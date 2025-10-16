---
layout: default
title: 기하학 문제
permalink: /boj/geometry/
categories: [boj, geometry]
---

<h1>기하학 문제 목록</h1>
<div class="card-list">
  {% for post in site.categories.geometry %}
    <a href="{{ post.url | relative_url }}" class="card">
      {{ post.title }}
    </a>
  {% endfor %}
</div>
