#!/usr/bin/env python3
"""Remove only near-white pixels connected to an image's outer boundary."""

from pathlib import Path
import sys
from collections import deque

import numpy as np
from PIL import Image


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: remove_connected_white.py INPUT OUTPUT")

    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    image = Image.open(source).convert("RGBA")
    pixels = np.asarray(image).copy()

    rgb = pixels[:, :, :3]
    lightest_channel = rgb.min(axis=2)
    near_white = lightest_channel >= 238
    height, width = near_white.shape
    exterior = np.zeros_like(near_white, dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((0, x))
        queue.append((height - 1, x))
    for y in range(height):
        queue.append((y, 0))
        queue.append((y, width - 1))

    while queue:
        y, x = queue.popleft()
        if exterior[y, x] or not near_white[y, x]:
            continue
        exterior[y, x] = True
        if y > 0:
            queue.append((y - 1, x))
        if y + 1 < height:
            queue.append((y + 1, x))
        if x > 0:
            queue.append((y, x - 1))
        if x + 1 < width:
            queue.append((y, x + 1))

    # Feather the last few near-white pixels to avoid a pale halo around lines.
    feathered_alpha = np.clip((255 - lightest_channel) * (255 / 17), 0, 255)
    pixels[:, :, 3][exterior] = np.minimum(
        pixels[:, :, 3][exterior], feathered_alpha[exterior]
    ).astype(np.uint8)

    destination.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(pixels, mode="RGBA").save(destination, optimize=True)


if __name__ == "__main__":
    main()
