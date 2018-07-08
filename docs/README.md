# Introduction
Videoflow player is a flexible tool that can be embedded into your website, OTT or mobile app as a fully functional player offering the video playback capabilities
along with the rest of Videoflows functionality such as interactivity, 360 content graphics overlays and controllers. By Using Videoflow player API, you can generate the player as an object
and then add it to your DOM. This way, you can get the events from the player and respond to them within your website. For example, you can change the color of your background, based on the events that are
emitted by the player.

In addition to that, Videoflow player can also be integrated into other players. In those cases the video playback functionality will not be a part of Videoflow. Instead Videoflow will act as a transparent overlay that will
generate the interactivity and the graphics over the existing player, it will become a layer within a third party player. This functionality is useful if you already have a player, and you want to add the interactive functionality along with the rest of the powerful features of Videoflow.

# Getting Started


```html
<html>
    <header>
        <script src="https://rawgit.com/TwiztedDesign/vfp/master/dist/vfp.js"></script>
    </header>
    <body>
    
        <div id="container">
            <img id="image" src="https://cdn.abcotvs.com/dip/images/2452137_092417-wtvd-shutterstock-nascar-generic-img.jpg?w=1280&r=16:9" style="width: 960px">    
        </div>
    
            
    </body>
</html>
```
```javascript
new VideoflowPlayer('#container', 'https://www.videoflow.io/experience/Byvf_oxyVz7');
```

# Examples
## Bitmoving Player
<diV class="vf-example-container hd">
    <iframe src="https://rawgit.com/TwiztedDesign/vfp/master/examples/basic/index.html"></iframe>
</div>