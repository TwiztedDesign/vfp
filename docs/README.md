# Videoflow Player

## Example

```html
<html>
    <header>
        <script src="https://rawgit.com/TwiztedDesign/vfp/master/dist/vfp.js"></script>
    </header>
    <body>
        <img id="image" src="https://cdn.abcotvs.com/dip/images/2452137_092417-wtvd-shutterstock-nascar-generic-img.jpg?w=1280&r=16:9" style="width: 960px">    
    </body>
</html>
```
```javascript

var image = document.querySelector('#image');

image.onload = function(){
    new VideoflowPlayer(image, 'https://www.videoflow.io/experience/Byvf_oxyVz7');
};
```