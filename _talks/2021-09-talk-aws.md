---
title: "Language Processing with Auxiliary Supervision and World Knowledge"
collection: talks
type: "Conference Presentation"
permalink: /talks/2021-09-talk-aws-code
venue: "Amazon Web Service (AWS) 2021"
date: 2019-07-23
location: "Seattle, WA"
---

[[Presentation-slides]](https://docs.google.com/presentation/d/1SOatvBHD_JyOgNuW5GueGd1yJ4vVghbG/edit?usp=sharing&ouid=109501306155809246755&rtpof=true&sd=true)[[Presenation-pdf]](https://drive.google.com/file/d/1q53HEVzgZv-wgPqd6mYFConk829QPgCc/view?usp=sharing)

======

<p align="justify">
Training language processing (LP) models for both natural and programming languages requires an extensive collection of training data. However, annotating structured outputs is difficult and often requires expertise and domain knowledge, making it costly to obtain high-quality annotations, which limits the performance of the model specially for the low-resource scenarios. On the other hand, an enormous amount of user-generated content with multiple modalities (code, text, databases or external libraries) has accumulated due to the growth of the Internet and the digitization of library archives. Although these data do not directly annotate the desired output structures, they provide related information and background knowledge that can be formed into auxiliary learning signals. However, the huge volume and heterogeneous and noisy nature of the unstructured data present challenges to the existing learning algorithms. Motivated by this, I focus on addressing the technical challenges of leveraging auxiliary supervision and designing learning algorithms that take heterogeneous learning signals as input. In this talk (i) I show that the word ontology leveraging the widely used external LP libraries (e.g., WordNet for English, or Abstract Syntax Tree (AST) for Java) can provide auxiliary supervision and improve the language modelling and the downstream tasks like slot filling or code auto-completion (ii) Given a set of high resource language corpora, I will discuss how can we filter out the harmful one and leverage the potentially useful subset of corpora (iii) I will also present my recent work on retrieval augmented source code generation and summarization and present how open source resources like Github or Stack Overflow can provide additional information to enhance these tasks. 
</p>
