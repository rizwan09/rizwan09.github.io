---
title: "Multi-Task Learning for Document Ranking and Query Suggestion"
collection: publications
Authors: '<b>Wasi Ahmad</b>, Kai-Wei Chang, and Hongning Wang.'
date: 05/2018
venue: 'ICLR'
paperurl: 'https://wasiahmad.github.io/files/publications/2018/mtask_ranking_suggestion.pdf'
presentationurl: 'https://wasiahmad.github.io/files/publications/2018/poster_mtask_ranking_suggestion.pdf'
codeurl: 'https://github.com/wasiahmad/context_attentive_ir'
excerpt: ''
---
---
<a href='https://wasiahmad.github.io/files/publications/2018/mtask_ranking_suggestion.pdf' target="_blank">[Download Paper]</a>

<div style='display: flex; justify-content: center;'><img src='https://wasiahmad.github.io/files/publications/2018/MNSRF-1.png' 
alt='Image not Loading' style='height:400px;' align='middle'></div><br>

<p align="justify">
We propose a multi-task learning framework to jointly learn document ranking and query suggestion for web search. 
It consists of two major components, a document ranker and a query recommender. Document ranker combines current query and 
session information and compares the combined representation with document representation to rank the documents. Query 
recommender tracks users’ query reformulation sequence considering all previous in-session queries using a sequence to 
sequence approach. As both tasks are driven by the users’ underlying search intent, we perform joint learning of these two 
components through session recurrence, which encodes search context and intent. Extensive comparisons against state-of-the-art 
document ranking and query suggestion algorithms are performed on the public AOL search log, and the promising results 
endorse the effectiveness of the joint learning framework.
</p>