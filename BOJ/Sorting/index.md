---
layout: default
title: Sort (정렬) 
categories: ["BOJ","Sorting"]
---

<h1>Sort (정렬) 문제 목록</h1>
<ul>
<div class="card-list">
{% for post in site.categories.Sorting %}
  <a href="{{ post.url }}" class="card">
    {{ post.title }}
  </a>
{% endfor %}
</div>
