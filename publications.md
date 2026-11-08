---
title: Publications
layout: page
permalink: /publications/
---

{% include pub-summary.html %}

<p>Grouped by research thread, newest first. See also <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en">Google Scholar</a> and the <a href="{{ '/bibliography/ref.bib' | relative_url }}">BibTeX file</a>. Highlights in red are from my CV; most-cited rankings are from Paper Digest.</p>

{% assign th = site.data.threads %}
{% assign tk = th | where: "id", "knowledge" | first %}{% assign tc = th | where: "id", "code" | first %}{% assign tsp = th | where: "id", "spatial" | first %}{% assign tch = th | where: "id", "chart" | first %}{% assign tw = th | where: "id", "web" | first %}{% assign ts = th | where: "id", "safety" | first %}{% assign to = th | where: "id", "other" | first %}
<p class="jump"><a href="#knowledge">{{ tk.name }}</a> · <a href="#code">{{ tc.name }}</a> · <a href="#grounded">{{ tsp.group }}</a> (<a href="#spatial">maps</a>, <a href="#chart">charts</a>, <a href="#web">web</a>) · <a href="#safety">{{ ts.name }}</a> · <a href="#other">{{ to.name }}</a></p>

<div class="pubgroup">
<h2 id="knowledge" class="thread-group">{{ tk.name }}</h2>
{% bibliography --file ref -q @*[thread=knowledge]* %}
{% bibliography --file ref -q @*[thread2=knowledge]* %}
</div>

<div class="pubgroup">
<h2 id="code" class="thread-group">{{ tc.name }}</h2>
{% bibliography --file ref -q @*[thread=code]* %}
{% bibliography --file ref -q @*[thread2=code]* %}
</div>

<div class="pubgroup">
<h2 id="grounded" class="thread-group">{{ tsp.group }}</h2>

<div class="pubsubgroup">
<h3 id="spatial" class="thread-name">{{ tsp.name }}</h3>
{% bibliography --file ref -q @*[thread=spatial]* %}
{% bibliography --file ref -q @*[thread2=spatial]* %}
</div>

<div class="pubsubgroup">
<h3 id="chart" class="thread-name">{{ tch.name }}</h3>
{% bibliography --file ref -q @*[thread=chart]* %}
{% bibliography --file ref -q @*[thread2=chart]* %}
</div>

<div class="pubsubgroup">
<h3 id="web" class="thread-name">{{ tw.name }}</h3>
{% bibliography --file ref -q @*[thread=web]* %}
{% bibliography --file ref -q @*[thread2=web]* %}
</div>
</div>

<div class="pubgroup">
<h2 id="safety" class="thread-group">{{ ts.name }}</h2>
{% bibliography --file ref -q @*[thread=safety]* %}
{% bibliography --file ref -q @*[thread2=safety]* %}
</div>

<div class="pubgroup">
<h2 id="other" class="thread-group">{{ to.name }}</h2>
{% bibliography --file ref -q @*[thread=other]* %}
{% bibliography --file ref -q @*[thread2=other]* %}
</div>
