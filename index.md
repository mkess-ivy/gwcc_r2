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
            <div class="home_masthead_subtitle" id="delayReveal">Greenmount West Community Center is a space that’s free + open to the public.</div>
            <div class="home_masthead_small_group">
                <div class="small_circle color"></div>
                <div class="small_text">Greenmount West Community Center is centrally located in Baltimore, MD — providing resources + programming to all the community’s residents.  <span class="bold"><a class="plain_typeform_link typeform-share link" href="https://gwcc.typeform.com/to/zPthAI" data-mode="drawer_right" style="color:#267DDD;text-decoration:underline;font-size:20px;" target="_blank">Volunteer today!</a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script></span></div>
            </div>
        </div>
    </div>
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
                        <a href="https://www.rwdfoundation.org/" target="_blank"><img src="/assets/img/logo_rwd.png" /></a>
                    </li>
                    <li>
                        <a href="http://www.greenmountwest.org/" target="blank"><img src="/assets/img/logo_gwca.png" /></a>
                    </li>
                    <li>
                        <a href="https://artbma.org/" target="_blank"><img src="/assets/img/logo_bma.png" /></a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</div>
