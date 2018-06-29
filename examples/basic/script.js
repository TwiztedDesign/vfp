var youtube = document.querySelector('#youtube');
var image = document.querySelector('#image');
new VideoflowPlayer('https://www.videoflow.io/experience/Byvf_oxyVz7', youtube, {});
image.onload = function(){
    new VideoflowPlayer('https://www.videoflow.io/experience/Byvf_oxyVz7', image, {});
};
