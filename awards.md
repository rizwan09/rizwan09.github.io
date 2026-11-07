---
layout: page
title: Honors and Awards
permalink: /awards/
---
{% for group in site.data.award %}
<h2>{{ group.group }}</h2>
<ul class="news">
{% for a in group.award %}
  <li class="glow"><span class="date">{{ a.year }}</span> {% if a.url %}<a href="{{ a.url }}">{{ a.title }}</a>{% else %}{{ a.title }}{% endif %}{% if a.venue %}, {{ a.venue }}{% endif %}</li>
{% endfor %}
</ul>
{% endfor %}
