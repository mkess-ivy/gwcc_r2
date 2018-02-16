---
layout: bronze
title: Discover
permalink: /discover/

[//]: # Page Header
circle: "#47E7CE"

[//]: # Discover Prime Groups
discover_prime_img1:
discover_prime_img2:
discover_prime_img3:
discover_prime_img4:
---

<div class="mission_group color_overlay">
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

<!-- Discover Prime -->
<div class="discover_grid">
    <div class="discover_prime_group">
        {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
        <div class="discover_prime_single">
            <div class="frow justify-between">
                <div class="discover_prime_image discover_overlay" style="background-image: url('/assets/img/gwcc_art_class.jpg');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            Our History
                        </div>
                        <div class="discover_prime_summary">
                            Established and operating since 2016. The founding members have a focus on providing programming + new experiences to all community residents.
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + Learn More
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        {% endif %}
        {% if thecycle == 'even' %}
        <div class="discover_prime_single">
            <div class="frow justify-between">
                <div class="discover_prime_image discover_overlay" style="background-image: url('/assets/img/gwcc_community_kids.jpg');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            After School Club
                        </div>
                        <div class="discover_prime_summary">
                            The Club’s dedicated staff provide a structured program between 3:15 PM and 6:30 PM of academics, enrichment, play and homework help.
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + Learn More
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {% endif %}
        <!-- <div class="discover_prime_single">
            <div class="frow justify-between">
                <div class="discover_prime_image discover_overlay" style="background-image: url('/assets/img/gwcc_girls_making.jpg');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            Meet the People
                        </div>
                        <div class="discover_prime_summary">
                            Meet the team that works to keep the center servicing all community residents.
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + Learn More
                            </div>
                        </a>
                    </div>

                </div>
            </div>

        </div>

        <div class="discover_prime_single">
            <div class="frow justify-between">
                <div class="discover_prime_image discover_overlay" style="background-image: url('/assets/img/gwcc_community_kids.jpg');"></div>
                <div class="discover_prime_meta">
                    <div class="frow centered-column vertical-align">
                        <div class="discover_prime_title">
                            Visit the Center
                        </div>
                        <div class="discover_prime_summary">
                            The Greenmount West Community Center sits within the Baltimore Montesorri Public Charter School.
                        </div>
                        <a class="brand_cta_v2">
                            <div>
                                + Get Directions
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div> -->
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
                    + Sign Up
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
                    + Support Us
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
