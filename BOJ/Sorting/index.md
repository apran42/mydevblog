---
layout: default
title: Sort (정렬) 
categories: "sorting"
---

<h1>Sorting (정렬) 문제 목록</h1>
<ul>
<div class="card-list">
{% for post in site.categories.sorting %}
  <a href="{{ post.url }}" class="card">
    {{ post.title }}
  </a>
{% endfor %}
</div>
