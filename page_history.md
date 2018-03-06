---
layout: bronze
title: History
permalink: /history/

[//]: # Page Header
circle: "#47E7CE"
---

<div class="history_group discover_overlay" style="background-image: url('/assets/img/history_cover2.jpg');">
    <div class="discover_grid">
        <div class="frow centered">
            <div class="history_content">
                <div class="frow justify-between">
                    <div class="history_left_panel animated fadeIn"></div>

                    <div class="history_masthead animated fadeIn">
                        <div class="history_masthead_title">
                            At GWCC, we thrive on building with our community.
                        </div>
                        <div class="history_masthead_subtitle">
                            Learn how much we have been able to accomplish in under one year of re-establishing the center in the Greenmount West neighborhood in Baltimore,&nbsp;Maryland
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<div class="timeline_wrapper textured_bg">
    <div class="timeline_background"></div>
    <div class="frow justify-end">
        <section class="timeline_section">
            {% for item in site.timeline %}
            {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
            {% if thecycle == 'odd' %}
            <div class="timeline_single js_discover_reveal">
                <div class="frow justify-between">
                    {% include components/timeline_event.html %}
                </div>
            </div>
            {% endif %}
            {% if thecycle == 'even' %}
            <div class="timeline_single js_discover_reveal">
                <div class="frow justify-between direction-reverse">
                    {% include components/timeline_event.html %}
                </div>
            </div>
            {% endif %}
            {% endfor %}
        </section>
    </div>
</div>
