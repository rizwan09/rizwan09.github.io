---
title: Publications
layout: page
permalink: /publications/
---

<p>See also <a href="https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en">Google Scholar</a> (2,700+ citations, h-index 18 as of September 2026) and the <a href="{{ '/bibliography/ref.bib' | relative_url }}">BibTeX file</a>. Most-cited rankings are from Paper Digest.</p>

<p class="filter">Show:
  <a class="active" data-filter="all">all</a>
  <a data-filter="agents">agents</a>
  <a data-filter="code">code &amp; SE</a>
  <a data-filter="rag">RAG &amp; knowledge</a>
  <a data-filter="multimodal">multimodal &amp; spatial</a>
  <a data-filter="safety">safety</a>
  <a data-filter="ml">ML</a>
  <a data-filter="nlp">NLP</a>
</p>

<h2>Conference Papers</h2>
{% bibliography --file ref -g year -G descent -q @*[pub_type=conference]* %}

<h2>Journal Articles</h2>
{% bibliography --file ref -q @*[pub_type=journal]* %}

<h2>Workshop and Demo Papers</h2>
{% bibliography --file ref -q @*[pub_type=workshop]* %}

<h2>Preprints and Papers Under Review</h2>
{% bibliography --file ref -q @*[pub_type=pre-print]* %}
