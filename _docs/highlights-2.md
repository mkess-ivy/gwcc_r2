---
docs-question: Create a highlight (image, video, link or slideshow)
docs-category: highlights
---
In siteleaf panel, select Posts.  Select to add a New Post.  

## To include a video, add this content to the 'Markdown' area:

    {% raw %}
    {% include components/highlight_video.html
    background="/assets/img/highlights_podcast.jpg"
    vimeo-id="242342417"
    %}
    {% endraw %}

Fill out the variables correctly.  For 'background', paste url for image. For 'vimeo-id', add the video ID for your video.



## To include a slideshow, add this content to the Markdown area:

    {% raw %}
    {% include components/highlight_slide.html
    slide1="/assets/img/highlights_podcast.jpg"
    slide2="/assets/img/highlights_podcast.jpg"
    slide3="/assets/img/highlights_podcast.jpg"
    %}
    {% endraw %}

Replace the image urls with the correct urls to display slides 1 - 3.  This slider can hold 5 images with the following variables - 'slide4' and 'slide5'.


## To include a link or image, add this content to the Markdown area:

    {% raw %}
    {% include components/highlight_default.html
    background="/assets/img/gwcc_discover_cover.jpg"
    url="http://www.google.com"
    %}
    {% endraw %}

Update the background variable to display the background image.  Update the URL for where the link should point to.

## Update the rest of the variables listed below:

    + title
    + highlight_summary
    + featured
    + cover
    + vimeo_video

Remember, 'featured' variable should equal true or false.   'cover' is the image that will show if this post is featured on the Highlights Page.  'vimeo_video' should equal true if this is a video post, it should equal false if this is not a video post.

Select Save.
