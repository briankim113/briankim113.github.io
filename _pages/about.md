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
* *{{ item.date }}*: {{ item.title }} — {{ item.content }}
{% endfor %}

[View all news →](/news/)



Publications
======
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for pub in pubs limit:5 %}
* **{{ pub.title }}**{% if pub.authors %}: {% for a in pub.authors %}{% if forloop.first %}{% if a == site.author.name %}<em>{{ a }}</em>{% else %}{{ a }}{% endif %}{% elsif forloop.last %}{% if forloop.length > 2 %}, and {% else %} and {% endif %}{% if a == site.author.name %}<em>{{ a }}</em>{% else %}{{ a }}{% endif %}{% else %}, {% if a == site.author.name %}<em>{{ a }}</em>{% else %}{{ a }}{% endif %}{% endif %}{% endfor %}.{% endif %}{% if pub.venue %} <em>{{ pub.venue }}</em>{% endif %}, {{ pub.date | default: "1900-01-01" | date: "%Y" }}.
{% endfor %}

[View all publications →](/publications/)


Personal
======
1. I am actively running [a book review / reflection blog](https://brianreadsbooks.wordpress.com/). Let me know if you have any book recommendations.
2. I am a member of the [Heart of Los Angeles Eisner Intergenerational Orchestra](https://www.holaio.org/), where I play the clarinet. Please join us if you are a music enthusiast based in LA!
3. I have lived in 6 different countries and have documented my past experiences [here](https://briankim113.wixsite.com/ciao-italia) and [there](https://briankim113.wixsite.com/nyuad).
4. I am learning Spanish and Tagalog. Help me practice, por favor / pakiusap!
