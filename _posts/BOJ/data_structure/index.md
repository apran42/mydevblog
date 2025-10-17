---
layout: default
title: 기타 문제
permalink: /boj/data_structure/
categories: [boj, data_structure]
---

<h1>자료 구조 문제 목록</h1>
<div class="card-list">
  {% for post in site.categories.data_structure %}
    <a href="{{ post.url | relative_url }}" class="card">
      {{ post.title }}
    </a>
  {% endfor %}
</div>
