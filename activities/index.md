---
layout: default
title: Activities
permalink: /activities/
---

<header class="page-intro activities-intro">
  <a class="page-intro__back" href="{{ '/' | relative_url }}#activities"><span aria-hidden="true">←</span> Activities</a>
  <p class="page-intro__eyebrow">Academic life</p>
  <h1>Activities</h1>
  <p>Conferences, workshops, talks, and other academic activities.</p>
</header>

<section class="activities-archive" aria-labelledby="activities-list-title">
  <header class="publications-index__heading">
    <h2 id="activities-list-title">All past events</h2>
    <span>Event archive</span>
  </header>
  <div class="timeline-list activities-timeline">
    {% for event in site.data.activities %}
      <div class="timeline-entry">
        <time class="timeline-date" datetime="{{ event.date }}">{{ event.date_label }}</time>
        <article class="activity-card">
          <div class="activity-card__meta">
            <p class="activity-card__type">{{ event.type }}</p>
            {% if event.participation %}<span class="activity-role activity-role--{{ event.participation | downcase }}">{{ event.participation }}</span>{% endif %}
          </div>
          <h3>{% if event.url %}<a href="{{ event.url }}" target="_blank" rel="noopener noreferrer">{{ event.title }}</a>{% else %}{{ event.title }}{% endif %}</h3>
          {% if event.venue %}<p class="activity-card__venue">{{ event.venue }}</p>{% endif %}
          {% if event.location %}<p class="activity-card__location">{{ event.location }}</p>{% endif %}
        </article>
      </div>
      {% if event.current_marker_after %}
        <div class="timeline-entry activities-current">
          <span class="timeline-date">Current</span>
          <div class="activities-current__label">Now</div>
        </div>
      {% endif %}
    {% else %}
      <div class="timeline-entry activities-current">
        <span class="timeline-date">Current</span>
        <div class="activities-current__label">Now</div>
      </div>
      <div class="timeline-entry activities-empty">
        <span class="timeline-date" aria-hidden="true"></span>
        <div>{% include wip-cocona.html text="Event history coming soon" %}</div>
      </div>
    {% endfor %}
  </div>
</section>
