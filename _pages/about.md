---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

About
======
I am a 4th year Ph.D. candidate in Computer Science at the University of Southern California (USC), advised by [Dr. Chao Wang](https://sites.usc.edu/chaowang/).

My research lies at the intersection of **Software Engineering (SE) and Artificial Intelligence (AI)**. 
My work spans both *SE for AI* -- evaluating and verifying AI systems for reliability and fairness -- and *AI for SE* -- leveraging AI and LLMs to improve program analysis and verification.
Please refer to my [CV](https://drive.google.com/file/d/1bTXSlLyfK77NUlNFE2BHQ3DdVoqIlE4C/view?usp=sharing) for more information.

Prior to joining USC, I graduated cum laude with a B.S. in Computer Science from New York University Abu Dhabi (NYUAD), where I worked on browser security under [Dr. Christina Pöpper](https://poepper.net/).
Outside of work, I enjoy reading, clarinet, and tennis!


Recent News
======
{% for item in site.data.news limit:5 %}
* *{{ item.date }}*: {{ item.title }} — {{ item.content | markdownify }}
{% endfor %}

[View all news →](/news/)


Publications
======
* **Analyzing Fairness of Neural Network Prediction via Counterfactual Dataset Generation**. *Brian Hyeongseok Kim*, Jacqueline L. Mitchell, and Chao Wang. **NLDL 2026**, Tromsø, Norway.

* **FairQuant: Certifying and Quantifying Fairness of Deep Neural Networks**. *Brian Hyeongseok Kim*, Jingbo Wang, and Chao Wang. **ICSE 2025**, Ottawa, Canada.

* **Understanding Formal Reasoning Failures in LLMs as Abstract Interpreters**. Jacqueline L. Mitchell, *Brian Hyeongseok Kim*, Chenyu Zhou, and Chao Wang. **LMPL workshop @ SPLASH 2025**, Singapore.

* **Large Language Models for Interpretable Mental Health Diagnosis**. *Brian Hyeongseok Kim* and Chao Wang. **GenAI4Health workshop @ AAAI 2025**, Philadelphia, USA.

* **Extending Browser Extension Fingerprinting to Mobile Devices**. *Brian Hyeongseok Kim*, Shujaat Mirza, and Christina Pöpper. **WPES workshop @ CCS 2025**, Copenhagen, Denmark.


Personal
======
1. I am actively running [a book review / reflection blog](https://brianreadsbooks.wordpress.com/). Let me know if you have any book recommendations.
2. I am a member of the [Heart of Los Angeles Eisner Intergenerational Orchestra](https://www.holaio.org/), where I play the clarinet. Please join us if you are a music enthusiast based in LA!
3. I have lived in 6 different countries and have documented my past experiences [here](https://briankim113.wixsite.com/ciao-italia) and [there](https://briankim113.wixsite.com/nyuad).
4. I am learning Spanish and Tagalog. Help me practice, por favor / pakiusap!
