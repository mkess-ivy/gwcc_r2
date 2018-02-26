---
layout: bronze
title: Highlights
permalink: /highlights/

[//]: # Page Header
circle: "#47E7CE"

---
{% assign my_featured_post = site.posts | where: "featured", true %}
{% for post in my_featured_post limit:1 %}
<div class="highlights_group discover_overlay" style="background-image: url('{{ post.cover }}');">
    <div class="discover_grid">
        <div class="highlights_meta">
            <div class="highlights_top">
                <div class="frow justify-end">
                    <div class="featured">
                        Featured Highlight
                    </div>
                </div>
            </div>
            <div class="highlights_bottom">
                <div class="frow justify-start">
                    <div>
                        <div class="featured_title">
                            {{ post.title }}
                        </div>
                        <div class="featured_summary">
                            {{ post.highlight_summary }}
                        </div>
                        <a class="brand_cta_v2" href="{{ post.url }}"><div class="featured_cta">
                            + Read More
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endfor %}

<div class="discover_grid">
    <div class="highlights_items_meta">
        <div class="frow justify-between">
            {% assign my_non_featured_post = site.posts | where: "featured", false %}
            {% for post in my_non_featured_post reversed %}
            <div class="highlights_item">
                <a href="{{ post.url }}"><div class="highlights_item_cover highlights_overlay" style="background-image:url('{{ post.cover }}');"></div></a>
                <div class="highlights_item_title">
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </div>
                <div class="highlights_item_summary">
                    {{ post.highlight_summary }}
                </div>
                <a class="brand_cta_v2" href="{{ post.url }}"><div class="highlights_cta">
                    + Read More
                </div></a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
