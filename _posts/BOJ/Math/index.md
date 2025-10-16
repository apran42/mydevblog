---
layout: default
title: Math 문제
permalink: /boj/math/
categories: [boj, math]
---

<h1>Math 문제 목록</h1>
<div class="card-list">
  {% for post in site.categories.math %}
    <a href="{{ post.url | relative_url }}" class="card">
      {{ post.title }}
    </a>
  {% endfor %}
</div>
