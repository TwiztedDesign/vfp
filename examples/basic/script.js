// var url = 'https://www.videoflow.io/experience/Byvf_oxyVz7';
var url = 'http://localhost:3002/experience/SyG9T3sfm';

//new VideoflowPlayer('#wrapper1', url);


var conf = {
    key: '97448c59-7697-4ff3-bae1-ed41b2358f44',
    source: {
        dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
    }
};
var player = bitmovin.player('player');

player.setup(conf).then(
    function(value) {
        // Success
        console.log('Successfully created bitmovin player instance');
        new VideoflowPlayer(player, url);
    },
    function(reason) {
        // Error!
        console.log('Error while creating bitmovin player instance');
    }
);
