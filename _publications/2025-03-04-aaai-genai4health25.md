---
title: "Large Language Models for Interpretable Mental Health Diagnosis"
collection: publications
permalink: /publication/2025-03-04-aaai-genai4health25
excerpt: "We propose a clinical decision-making support tool that integrates LLMs and constraint logic programming for interpretable mental health diagnosis."
date: 2025-03-04
venue: "Workshop on Large Language Models and Generative AI for Health at AAAI (GenAI4Health)"
paperurl: "https://openreview.net/forum?id=L5iBC2En9N"
citation: "Kim, B. H., & Wang, C. Large Language Models for Interpretable Mental Health Diagnosis. In <i>Workshop on Large Language Models and Generative AI for Health at AAAI 2025</i>."
---

We propose a clinical decision support system (CDSS) for mental health diagnosis that combines the strengths of large language models (LLMs) and constraint logic programming (CLP). Having a CDSS is important because of the high complexity of diagnostic manuals used by mental health professionals and the danger of diagnostic errors. Our CDSS is a software tool that uses an LLM to translate diagnostic manuals to a logic program and solves the program using an off-the-shelf CLP engine to query a patient’s diagnosis based on the encoded rules and provided data. By giving domain experts the opportunity to inspect the LLM-generated logic program, and making modifications when needed, our CDSS ensures that the diagnosis is not only accurate but also interpretable. We experimentally compare with two baseline approaches of using LLMs: diagnosing patients using the LLM-only approach, and using the LLM-generated logic program but without expert inspection. The results show that, while LLMs are extremely useful in generating candidate logic programs, these programs still require expert inspection and modification to guarantee faithfulness to the official diagnostic manuals. Additionally, ethical concerns arise from the direct use of patient data in LLMs, underscoring the need for a safer hybrid approach like our proposed method.


Links: 
[openreview](https://openreview.net/forum?id=L5iBC2En9N) | 
[arXiv](https://arxiv.org/abs/2501.07653) | 
[poster](https://briankim113.github.io/files/genai4health25-poster.pdf)
