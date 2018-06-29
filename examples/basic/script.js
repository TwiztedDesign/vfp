var youtube = document.querySelector('#youtube');
var image = document.querySelector('#image');

new VideoflowPlayer(youtube, 'https://www.videoflow.io/experience/Byvf_oxyVz7');
image.onload = function(){
    new VideoflowPlayer(image, 'https://www.videoflow.io/experience/Byvf_oxyVz7');
};
