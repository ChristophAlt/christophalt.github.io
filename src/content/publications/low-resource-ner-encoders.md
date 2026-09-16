---
title: "A Comparative Study of Pre-trained Encoders for Low-Resource Named Entity Recognition"
authors: ["Yuxuan Chen", "Jonas Mikkelsen", "Arne Binder", "Christoph Alt", "Leonhard Hennig"]
venue: "Proceedings of the 7th Workshop on Representation Learning for NLP"
abbr: "ACL REPL4NLP"
date: 2022-05-01
type: "inproceedings"
selected: false
website: "https://github.com/DFKI-NLP/fewie"
---

Pre-trained language models (PLM) are effective components of few-shot named entity recognition (NER) approaches when augmented with continued pre-training on task-specific out-of-domain data or fine-tuning on in-domain data. However, their performance in low-resource scenarios, where such data is not available, remains an open question. We introduce an encoder evaluation framework, and use it to systematically compare the performance of state-of-the-art pre-trained representations on the task of low-resource NER. We analyze a wide range of encoders pre-trained with different strategies, model architectures, intermediate-task fine-tuning, and contrastive learning. Our experimental results across ten benchmark NER datasets in English and German show that encoder performance varies significantly, suggesting that the choice of encoder for a specific low-resource scenario needs to be carefully evaluated.
