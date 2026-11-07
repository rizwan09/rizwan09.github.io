---
title: Publications
layout: page
permalink: /publications/
---

<p>Grouped by research thread, newest first. See also <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en">Google Scholar</a> and the <a href="{{ '/bibliography/ref.bib' | relative_url }}">BibTeX file</a>. Highlights in red are from my CV; most-cited rankings are from Paper Digest.</p>

<p class="jump">{% for t in site.data.threads %}<a href="#{{ t.id }}">{% if t.group == "Grounded Actions" %}Grounded: {% endif %}{{ t.name }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}</p>

<h2 id="knowledge" class="thread-group t-k">Retrieval and Knowledge</h2>
{% bibliography --file ref -q @*[thread=knowledge]* %}

<h2 id="code" class="thread-group t-c">Code Generation and Software Engineering</h2>
{% bibliography --file ref -q @*[thread=code]* %}

<h2 class="thread-group t-a">Grounded Actions</h2>

<h3 id="spatial" class="thread-name t-a">Maps and Spatial Reasoning</h3>
{% bibliography --file ref -q @*[thread=spatial]* %}

<h3 id="chart" class="thread-name t-a">Charts, Visual Data, and Multimodal</h3>
{% bibliography --file ref -q @*[thread=chart]* %}

<h3 id="web" class="thread-name t-a">Web and Computer-Use Agents</h3>
{% bibliography --file ref -q @*[thread=web]* %}

<h2 id="safety" class="thread-group t-s">Safety, Security, and Trust</h2>
{% bibliography --file ref -q @*[thread=safety]* %}

<h2 id="other" class="thread-group">Other ML and NLP</h2>
{% bibliography --file ref -q @*[thread=other]* %}
