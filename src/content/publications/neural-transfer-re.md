---
title: "Neural sequential transfer learning for relation extraction"
authors: ["Christoph Alt"]
venue: "Doctoral Thesis, Technische Universität Berlin"
abbr: "Doctoral Thesis"
date: 2021-01-01
type: "phdthesis"
selected: true
doi: "10.14279/depositonce-11154"
url: "http://dx.doi.org/10.14279/depositonce-11154"
pdf: "https://www.depositonce.tu-berlin.de/bitstream/11303/12278/4/alt_christoph_benedikt.pdf"
---

Relation extraction (RE) is concerned with developing methods and models that automatically detect and retrieve relational information from unstructured data. It is crucial to information extraction (IE) applications that aim to leverage the vast amount of knowledge contained in unstructured natural language text, for example, in web pages, online news, and social media; and simultaneously require the powerful and clean semantics of structured databases instead of searching, querying, and analyzing unstructured text directly. In practical applications, however, relation extraction is often characterized by limited availability of labeled data, due to the cost of annotation or scarcity of domain-specific resources. In such scenarios it is difficult to create models that perform well on the task. It therefore is desired to develop methods that learn more efficiently from limited labeled data and also exhibit better overall relation extraction performance, especially in domains with complex relational structure.

In this thesis, I propose to use transfer learning to address this problem, i.e., to reuse knowledge from related tasks to improve models, in particular, their performance and efficiency to learn from limited labeled data. I show how sequential transfer learning, specifically unsupervised language model pre-training, can improve performance and sample efficiency in supervised and distantly supervised relation extraction. In the light of improved modeling abilities, I observe that better understanding neural network-based relation extraction methods is crucial to gain insights that further improve their performance. I therefore present an approach to uncover the linguistic features of the input that neural RE models encode and use for relation prediction. I further complement this with a semi-automated analysis approach focused on model errors, datasets, and annotations. It effectively highlights controversial examples in the data for manual evaluation and allows to specify error hypotheses that can be verified automatically. Together, the researched approaches allow us to build better performing, more sample efficient relation extraction models, and advance our understanding despite their complexity. Further, it facilitates more comprehensive analyses of model errors and datasets in the future.
