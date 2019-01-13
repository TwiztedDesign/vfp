# Introduction
Videoflow player is a flexible tool that can be embedded into your website, OTT or mobile app as a fully functional player offering the video playback capabilities
along with the rest of Videoflows functionality such as interactivity, 360 content, graphics overlays and controllers. By Using Videoflow player API, you can generate the player as an object
and then add it to your DOM. This way, you can get the events from the player and respond to them within your website. For example, you can change the color of your background, based on the events that are
emitted by the player.

In addition to that, Videoflow player can also be integrated into other players. In those cases the video playback functionality will not be a part of Videoflow. Instead, Videoflow will act as a transparent overlay that will
generate the interactivity and the graphics over the existing player, it will become a layer within a third party player. This functionality is useful if you already have a player, and you want to add the interactive functionality along with the rest of the powerful features of Videoflow.

# Getting Started
Include the Videoflow API script in your header
```html
    <script src="https://rawgit.com/TwiztedDesign/vfp/master/dist/vfp.js"></script>
```
Add a container element in your HTML
```html
    <div id="container"></div>
```
Initialize the player object in your script and attach it to the container
```javascript
new VideoflowPlayer('#container', 'https://www.videoflow.io/experience/Byvf_oxyVz7');
```
The player object takes two parameters on initialization:
1. The query selector of the DOM element, in this case it the id "container"
2. The url of the Videoflow project to load. Make sure that the project is public.

# Examples
## Vanilla Videoflow Player
This example load the player into an empty div. This is useful when loading a standard project into the player. The video playback and interactive overlay will be served by Videoflow.
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
    <script>
        // Initialize the player
        new VideoflowPlayer('#container', 'https://www.videoflow.io/experience/xxx-xxxx-xxx');
    </script>
</html>
```


## Bitmoving Player
Videoflow can be also loaded as an overlay with other players, In this example Videoflow player loads an overlay project (no video, just interactive content) over a Bitmovin player. The initialization
method stays the same, but instead of a query selector we pass the instance of the Bitmoving player in the script

```javascript
var conf = {
    key: 'xxxxxxxxx-xxxxxx-xxxxxxxxx-xxxxxxxxxxx',
    source: {
        dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    }
};

// Initialize the Bitmovin player
var BMPlayer = bitmovin.player('player');
var VFPlayer;
BMPlayer.setup(conf).then(
    function(value) {
        // Initialize the Videoflow player overlay on successful load of the Bitmovin player
        VFPlayer = new VideoflowPlayer(BMPlayer,'https://www.videoflow.io/experience/xxx-xxxx-xxx' );
    },
    function(reason) {
        // Error!
        console.log('Error while creating bitmovin player instance');
    }
);
```
<!---<div class="vf-example-container hd">
    <iframe src="https://rawgit.com/TwiztedDesign/vfp/master/examples/basic/index.html"></iframe>
</div>
In the above example the overlay is interactive. Clicking the lower third will make it animate out and animate back in after 3 seconds.
The rest of the player controls a also available.-->
