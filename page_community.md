---
layout: map2
title: Community
permalink: /community/

[//]: # Page Header
circle: "#47E7CE"
---


<div class="history_group mapbox_wrapper">
    <div class="map_title">
            Greenmount West Campus<br/>
            <span>(zoom)</span>
    </div>
    <div id='map'>

    </div>
    {% include components/mapbox.html %}
</div>

<div class="discover_grid">
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
            {% include components/community_resource.html  
                data_space="maker_gallery_spaces"
            %}
            </div>
        </div>


        <div class="category_group">
            <div class="category_title">
                Recreational Spaces
            </div>
            <div class="frow justify-start">
            {%  include components/community_resource.html  
                data_space="recreational_spaces"
            %}
            </div>
        </div>

        <div class="category_group">
            <div class="category_title">
                Schools + Transportation Hub
            </div>
            <div class="frow justify-start">
            {% include components/community_resource.html  
                data_space="school_spaces"
            %}
            </div>
        </div>

        <div class="category_group">
            <div class="category_title">
                Community Resources
            </div>
            <div class="frow justify-start">
                {% include components/community_resource.html  
                    data_space="community_resource_spaces"
                %}
            </div>
        </div>
    </div>
</div>
