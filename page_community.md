---
layout: bronze
title: Community
permalink: /community/

[//]: # Page Header
circle: "#47E7CE"
---

<div class="discover_grid">
    <div class="discover_prime_single">
        <div class="community_prime_image" style="background-image: url('/assets/img/community_map.jpg');"></div>
    </div>

    <div class="give_meta">
        <div class="give_quote_group">
            <div class="give_quote">
                Greenmount West Community Center sits on a beautiful campus filled with resources and maker spaces

            </div>
            <div class="highlight_quote_bottom"></div>
        </div>


        <div class="category_group">
            <div class="category_title">
                Maker + Gallery Spaces
            </div>
            <div class="frow justify-start">
                {% for space in site.data.maker_gallery_spaces %}
                <div class="section_group">
                    <div class="section_title">{{ space.name_of_space }}</div>
                    <div class="section_location">
                        {{ space.address }}
                    </div>
                    <div class="section_url">
                        <a href="{{ space.url }}">{{ space.url }}</a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>


        <div class="category_group">
            <div class="category_title">
                Recreational Spaces
            </div>
            <div class="frow justify-start">
                {% for space in site.data.recreational_spaces %}
                <div class="section_group">
                    <div class="section_title">{{ space.name_of_space }}</div>
                    <div class="section_location">
                        {{ space.address }}
                    </div>
                    <div class="section_url">
                        <a href="{{ space.url }}">{{ space.url }}</a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>

        <div class="category_group">
            <div class="category_title">
                Schools + Transportation Hub
            </div>
            <div class="frow justify-start">
                {% for space in site.data.school_spaces %}
                <div class="section_group">
                    <div class="section_title">{{ space.name_of_space }}</div>
                    <div class="section_location">
                        {{ space.address }}
                    </div>
                    <div class="section_url">
                        <a href="{{ space.url }}">{{ space.url }}</a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>

        <div class="category_group">
            <div class="category_title">
                Community Resources
            </div>
            <div class="frow justify-start">
                {% for space in site.data.community_resource_spaces %}
                <div class="section_group">
                    <div class="section_title">{{ space.name_of_space }}</div>
                    <div class="section_location">
                        {{ space.address }}
                    </div>
                    <div class="section_url">
                        <a href="{{ space.url }}">{{ space.url }}</a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>


</div>
