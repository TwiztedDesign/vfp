let VideoflowPlayer = (url, element) => {
    let iframe = document.createElement("iframe");
    iframe.src = url + '?controls=0';

    var bb = element.getBoundingClientRect();
    iframe.style.position = 'absolute';
    iframe.style.top = bb.top + 'px';
    iframe.style.left = bb.left + 'px';
    iframe.style.width = bb.width + 'px';
    iframe.style.height = bb.height + 'px';
    iframe.style.border = 'none';
    insertAfter(iframe, element);

};

VideoflowPlayer.prototype = {

};


let insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};



module.exports = VideoflowPlayer;