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

<section class="textured_bg" style="background-image:url('/assets/img/texture_background.jpg');">
    <div class="yellow_lines ">
        <div class="yellow_single animated rubberBand"></div>
        <div class="yellow_single two animated rubberBand"></div>
    </div>

    <!-- Discover Prime -->
    <div class="discover_grid">
        <div class="discover_prime_group">
            {% for item in site.data.discover_prime %}
            {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
            {% if thecycle == 'odd' %}
            <div class="discover_prime_single js_discover_reveal">
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
                            <a class="brand_cta_v2" href="{{ item.url }}">
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
            <div class="discover_prime_single js_discover_reveal">
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
                            <a class="brand_cta_v2" href="{{ item.url }}">
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
                        <div class="discover_alt_solid"></div>
                    </div>
                    <div class="discover_alt_title">
                        Volunteer
                    </div>
                    <div class="discover_alt_summary">
                        GWCC Volunteers assist with staff and residents to push the mission forward
                    </div>
                    <a class="brand_cta_v2 margin_center typeform-share link" href="https://gwcc.typeform.com/to/zPthAI" data-mode="drawer_right" target="_blank"><div>+ Apply Now </div></a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
                </div>
                <div class="discover_alt_single">
                    <div class="discover_img_group">
                        <div class="discover_alt_image" style="background-image:url('/assets/img/gwcc_donate.jpg');"></div>
                        <div class="discover_alt_solid"></div>
                    </div>
                    <div class="discover_alt_title">
                        Donate
                    </div>
                    <div class="discover_alt_summary">
                        GWCC relies on people like you to provide programming, food and events for the youth and their families
                    </div>
                    <a class="brand_cta_v2 margin_center" href="/donate/"><div>
                        + Support Us
                    </div></a>
                </div>
                <div class="discover_alt_single">
                    <div class="discover_img_group">
                        <div class="discover_alt_image" style="background-image:url('/assets/img/gwcc_spaceuse.jpg');"></div>
                        <div class="discover_alt_solid"></div>
                    </div>
                    <div class="discover_alt_title">
                        Space Use / Rental
                    </div>
                    <div class="discover_alt_summary">
                        Host your meetings or special events within our community center
                    </div>
                    <a class="brand_cta_v2 margin_center" href="mailto:admin@greenmountwestcc.org"><div>
                        + Contact Us
                    </div></a>
                </div>
            </div>
        </div>
    </div>
</section>
