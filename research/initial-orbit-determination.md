---
layout: default
title: Projective Plane Subdivision for Initial Orbit Determination
permalink: /research/initial-orbit-determination/
---

<article class="research-detail">
  <header class="research-detail__header">
    <div>
      <a class="research-detail__back" href="{{ '/' | relative_url }}#research"><span aria-hidden="true">←</span> Research</a>
      <div class="research-detail__meta">
        <span class="research-status research-status--published">Published</span>
        <time>Aug 2022—Sep 2025</time>
      </div>
      <h1>Projective Plane Subdivision for Initial Orbit Determination</h1>
      <p class="research-detail__lead">A certified projective-plane subdivision framework for time-free, angles-only initial orbit determination from five lines of sight.</p>
      <nav class="research-detail__links" aria-label="Project resources">
        <a class="research-link research-link--publication" href="https://link.springer.com/chapter/10.1007/978-3-032-09645-6_6" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6zM15 3v4h3M9 11h6M9 15h6"/></svg> Publication
        </a>
        <a class="research-link research-link--arxiv" href="https://arxiv.org/abs/2509.14397" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 4c3.2 2.5 6.8 13.5 10 16M17 4C13.8 6.5 10.2 17.5 7 20"/></svg> arXiv
        </a>
      </nav>
    </div>
    <figure class="research-detail__figure">
      <img src="{{ '/assets/images/IOD-Concept_Illustration-transparent.png' | relative_url }}" alt="Concept illustration of candidate orbital planes">
    </figure>
  </header>
  <section class="research-detail__content">
    <h2>Overview</h2>
    <div class="research-detail__copy">
      <p>Developed a candidate-evaluation routine for time-free, angles-only orbit determination from five 3D lines of sight, using polynomial consistency checks to identify candidate orbital planes. Designed adaptive triangulation and certified existence and exclusion oracles using interval arithmetic and the Krawczyk operator.</p>
      {% include wip-cocona.html text="Webpage work in progress" %}
    </div>
  </section>
</article>
