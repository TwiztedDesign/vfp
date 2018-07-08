class VideoflowPlayer {
    constructor(selector, url){
        this.selector = selector;
        this.url = url;
        this.element = null;
        this.iframe = null;
        this.init();
        this.createPlayer();
    }

    init(){
        if(this.selector instanceof Element){
            this.element = this.selector;
            return;
        } else if(typeof this.selector === 'string'){
            switch(this.selector[0]){
                case '<' : {
                    //create element
                    let matches = this.selector.match(/<([\w-]*)>/);
                    if (matches === null || matches === undefined) {
                        throw 'Invalid Selector / Node';
                    }
                    let nodeName = matches[0].replace('<', '').replace('>', '');
                    this.element = document.createElement(nodeName);
                    break;
                }
                default : {
                    this.element = document.querySelector(this.selector);
                }
            }
        } else if(this.isBitmovinPlayer()){
            this.element = this.selector.getFigure();
            this.overlay_type = 'bitmovin';
            this.isBitmovin = true;
        }

    }

    isBitmovinPlayer(){
        return typeof this.selector === 'object' &&
            this.selector.getFigure &&
            typeof this.selector.getFigure === 'function' &&
            this.selector.getFigure() &&
            this.selector.getFigure().classList.contains('bitmovinplayer-container');
    }

    createPlayer(){
        if(!this.element){
            throw 'No such element';
        }
        let iframe = document.createElement("iframe");
        iframe.src = this.url + '?controls=0';


        this.element.style.display = 'inline-block';
        this.element.style.position = 'relative';
        iframe.classList.add("videoflow-player-overlay");
        iframe.style.border = 'none';
        iframe.style.position = 'absolute';
        iframe.style.width = '100%';
        iframe.style.right = '0';
        iframe.style.left = '0';

        switch (this.overlay_type){
            case 'bitmovin':
                iframe.style.bottom = '80px';
                iframe.style['z-index'] = '1';
                iframe.style.height = '30%';
                break;
            default:
                iframe.style.top = '0';
                iframe.style.height = '100%';
        }

        this.element.appendChild(iframe);
        this.iframe = iframe;
    }
}

module.exports = VideoflowPlayer;

