---
layout: home
title: Home

[//]: #Videos
video_bg: /assets/video/bsbv2.mp4
video_poster: /assets/video/bsb_poster.jpg
---
<video autoplay loop id="video-background" muted plays-inline poster="{{ page.video_poster }}">
    <!-- <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"> -->
    <source src="{{ page.video_bg }}" type="video/mp4">
</video>

<div class="grid">
    <div class="home_masthead">
        <div class="frow centered">
            <div class="home_masthead_title">A Community Arts Space</div>
            <div class="home_masthead_subtitle" id="delayReveal">Greenmount West Community Center is a community arts space that’s open to the public.</div>
            <div class="home_masthead_small_group">
                <div class="small_circle color"></div>
                <div class="small_text">Greenmount West Community Center is centrally located in Baltimore, MD — providing resources + programming to all the community’s residents.  <span class="bold">Donate today!</span></div>
            </div>
        </div>
    </div>
    <!-- <div class="video_group" style="background-image:url('{{ page.brand_video }}')">

    </div> -->
</div>

{% include components/bronzey.html
    background="/assets/img/penn_station_team_v3.jpg"
    text="Peek Inside GWCC"
%}

{% include components/goldie.html %}

<div class="grid">
    <div class="sponsors">
        <div class="sponsors_title">
            GWCC Sponsors
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
