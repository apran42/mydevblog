---
layout: default
title: Sorting 문제
permalink: /boj/sorting/
categories: [boj, sorting]
---

<h1>Sorting 문제 목록</h1>
<div class="card-list">
  {% for post in site.categories.sorting %}
    <a href="{{ post.url | relative_url }}" class="card">
      {{ post.title }}
    </a>
  {% endfor %}
</div>
