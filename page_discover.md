---
layout: bronze
title: Discover
permalink: /discover/

[//]: # Page Header
circle: "#47E7CE"
---

<div class="mission_group color_overlay" style="background-image:url('/assets/img/penn_station_team.jpg')">
    <div class="discover_grid">
        <div class="mission_meta">
            <div class="frow justify-between">
                <div class="mission_single">
                    <div class="mission_title">
                        Mission
                    </div>
                    <div class="mission_summary">
                        The mission of GWCC is to empower the youth and their families through sustainable programming and innovative partnerships in a safe, community art space.
                    </div>
                </div>
                <div class="mission_single">
                    <div class="mission_title">
                        Vision
                    </div>
                    <div class="mission_summary">
                        A safe, welcoming and inclusive gathering space where opportunities to grow, learn and create are boundless
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Discover Prime -->
<div class="discover_grid">
    <div class="discover_prime_group">
        {% for item in site.data.discover_prime %}
        {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
        <div class="discover_prime_single">
            <div class="frow justify-between">
                <div class="discover_prime_image discover_overlay" style="background-image: url('{{ item.bg }}');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            {{ item.title }}
                        </div>
                        <div class="discover_prime_summary">
                            {{ item.summary }}
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + {{ item.cta_text }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {% endif %}
        {% if thecycle == 'even' %}
        <div class="discover_prime_single">
            <div class="frow justify-between direction-reverse">
                <div class="discover_prime_image discover_overlay" style="background-image: url('{{ item.bg }}');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            {{ item.title }}
                        </div>
                        <div class="discover_prime_summary">
                            {{ item.summary }}
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + {{ item.cta_text }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {% endif %}
        {% endfor %}
    </div>

    <div class="discover_alt_group">
        <div class="frow justify-between">
            <div class="discover_alt_single">
                <div class="discover_img_group">
                    <div class="discover_alt_image" style="background-image:url('/assets/img/gwcc_volunteer.jpg');"></div>
                    <div class="discover_alt_solid">

                    </div>
                </div>
                <div class="discover_alt_title">
                    Volunteer
                </div>
                <div class="discover_alt_summary">
                    GWCC Volunteers assist with staff and residents to push the mission forward
                </div>
                <a class="brand_cta_v2"><div class="margin_center">
                    + Learn More
                </div></a>
            </div>
            <div class="discover_alt_single">
                <div class="discover_img_group">
                    <div class="discover_alt_image" style="background-image:url('/assets/img/gwcc_donate.jpg');"></div>
                    <div class="discover_alt_solid">

                    </div>
                </div>
                <div class="discover_alt_title">
                    Donate
                </div>
                <div class="discover_alt_summary">
                    GWCC Volunteers assist with staff and residents to push the mission forward
                </div>
                <a class="brand_cta_v2"><div class="margin_center">
                    + Take Action
                </div></a>
            </div>
            <div class="discover_alt_single">
                <div class="discover_img_group">
                    <div class="discover_alt_image" style="background-image:url('/assets/img/gwcc_spaceuse.jpg');"></div>
                    <div class="discover_alt_solid">

                    </div>
                </div>
                <div class="discover_alt_title">
                    Space Use / Rental
                </div>
                <div class="discover_alt_summary">
                    GWCC Volunteers assist with staff and residents to push the mission forward
                </div>
                <a class="brand_cta_v2"><div class="margin_center">
                    + Learn More
                </div></a>
            </div>
        </div>
    </div>
</div>
