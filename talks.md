---
title: Talks
layout: page
permalink: /talks/
---
{% for group in site.data.talk %}
<h2>{{ group.group }}</h2>
<ul>
{% for t in group.talk %}
  <li><b>{{ t.title }}</b>, {{ t.venue }}.
    {% if t.url %}[<a href="{{ t.url }}">slides</a>]{% endif %}
    {% if t.abstract %}[<a data-toggle="collapse" href="#{{ t.key }}-abstract">abstract</a>]<div id="{{ t.key }}-abstract" class="collapse"><p class="abstract">{{ t.abstract }}</p></div>{% endif %}
  </li>
{% endfor %}
</ul>
{% endfor %}
