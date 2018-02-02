---
layout: home
permalink: /home/
title: Home

[//]: #Videos
video_bg: /assets/video/bsbv2.mp4
---
<video autoplay loop id="video-background" muted plays-inline poster="/assets/video/bsb_poster.jpg">
    <!-- <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"> -->
    <source src="{{ page.video_bg }}" type="video/mp4">
</video>

<div class="grid">
    <div class="home_masthead">
        <div class="frow centered">
            <div class="home_masthead_title">A Community Arts Space</div>
            <div class="home_masthead_subtitle">Greenmount West Community Center is a community arts space that’s free to the public.</div>
            <div class="home_masthead_small_group">
                <div class="small_circle color"></div>
                <div class="small_text">Greenmount West Community Center is centrally located in Baltimore, MD — providing resources + programming to all the community’s residents.  <span class="bold">Volunteer today!</span></div>
            </div>
        </div>
    </div>
    <!-- <div class="video_group" style="background-image:url('{{ page.brand_video }}')">

    </div> -->
</div>

{% include components/bronzey.html
    background="/assets/img/penn_station_team.png"
    text="Peek Inside GWCC"
%}

<div class="grid">
    <div class="goldie">
        <div class="single">
            <div class="goldie_title">
                Discover GWCC<br />Free + Open to Public
            </div>
            <div class="goldie_text">
                Programming for youth and adults, while serving as a resource hub for all of the Greenmount West initiatives (Workforce development, AHC and GED)
            </div>
            <a class="goldie_cta">
                <div>
                    + Learn More
                </div>
            </a>
        </div>
        <div class="single">
            <div class="goldie_title">
                Employing Youth Workers<br />Ages 14+
            </div>
            <div class="goldie_text">
                Youth from the Greenmount West community, either living in or going to school in, are hired to help manage and facilitate programming and procedures in the center.
            </div>
            <a class="goldie_cta">
                <div>
                    + Learn More
                </div>
            </a>
        </div>
    </div>
    <div class="sponsors">
        <div class="sponsors_title">
            Sponsors
        </div>
        <div class="sponsors_group">
            <ul>
                <div class="frow justify-between">
                    <li>
                        <a href=""><img src="/assets/img/logo_rwd.png" /></a>
                    </li>
                    <li>
                        <a href=""><img src="/assets/img/logo_gwca.png" /></a>
                    </li>
                    <li>
                        <a href=""><img src="/assets/img/logo_bma.png" /></a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
