---
layout: default
title: Math (수학) 문제
categories: ["BOJ","Math"]
---

<h1>Math (수학) 문제 목록</h1>
<ul>
<div class="card-list">
{% for post in site.categories.Math %}
  <a href="{{ post.url }}" class="card">
    {{ post.title }}
  </a>
{% endfor %}
</div>
