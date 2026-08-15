---
layout: default
title: Approximating Periodic Orbits and Navigation Minimal Problems
permalink: /research/periodic-orbits/
---

<article class="research-detail">
  <header class="research-detail__header">
    <div>
      <a class="research-detail__back" href="{{ '/' | relative_url }}#research"><span aria-hidden="true">←</span> Research</a>
      <div class="research-detail__meta">
        <span class="research-status research-status--accepted">Accepted</span>
        <time>Sep 2025—May 2026</time>
      </div>
      <h1>Approximating Periodic Orbits and Navigation Minimal Problems</h1>
      <p class="research-detail__lead">Compact algebraic models for Earth–Moon periodic-orbit families and liaison-navigation minimal problems in the circular restricted three-body problem.</p>
      <nav class="research-detail__links" aria-label="Project resources">
        <a class="research-link research-link--arxiv" href="https://arxiv.org/abs/2604.26332" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 4c3.2 2.5 6.8 13.5 10 16M17 4C13.8 6.5 10.2 17.5 7 20"/></svg> arXiv
        </a>
        <a class="research-link research-link--github" href="https://github.com/Rick3yHuang/Navigation-Problems-in-CR3BP" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-2.84 17.54c.45.08.62-.2.62-.44v-1.59c-2.54.55-3.07-1.08-3.07-1.08-.42-1.06-1.02-1.35-1.02-1.35-.83-.57.06-.56.06-.56.92.06 1.4.94 1.4.94.82 1.4 2.15 1 2.67.76.08-.59.32-1 .58-1.22-2.03-.23-4.16-1.02-4.16-4.46 0-.99.35-1.79.94-2.42-.09-.23-.41-1.16.08-2.39 0 0 .77-.25 2.48.92A8.63 8.63 0 0 1 12 8.35a8.54 8.54 0 0 1 2.26.3c1.72-1.17 2.48-.92 2.48-.92.49 1.23.17 2.16.08 2.39.59.63.94 1.43.94 2.42 0 3.45-2.14 4.23-4.17 4.45.33.28.62.84.62 1.68v2.38c0 .24.16.53.63.44A9 9 0 0 0 12 3z"/></svg> GitHub repo
        </a>
      </nav>
    </div>
    <figure class="research-detail__figure">
      <img src="{{ '/assets/images/periodic-orbits-transparent.png' | relative_url }}" alt="Families of periodic orbits near the Moon and the L1 and L2 libration points">
    </figure>
  </header>
  <section class="research-detail__content">
    <h2>Overview</h2>
    <div class="research-detail__copy">
      <p>Built compact quartic and sextic implicit models for Earth–Moon Lyapunov and Halo orbits by fitting JPL catalogs and using the Jacobi constant to parameterize orbit families. Developed a Macaulay2 toolkit for constructing CR3BP liaison-navigation minimal problems and computing their algebraic degrees.</p>
      {% include wip-cocona.html text="Webpage work in progress" %}
    </div>
  </section>
</article>
