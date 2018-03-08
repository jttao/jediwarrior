var Net = require("Net")
var Global = require("Global")
cc.Class({
    extends: cc.Component, 
    properties: {   
    }, 
    initNetHandlers:function(){
        var self = this;
    }, 
    // use this for initialization
    onLoad: function () {
        
        if(!cc.sys.isNative && cc.sys.isMobile) {
            var cvs = this.node.getComponent(cc.Canvas);
            cvs.fitHeight = true;
            cvs.fitWidth = true;
        }
        
        if(!cc.vv) {
            cc.director.loadScene("loading");
            return;
        }
        
        this.panelShop = cc.find("Canvas/shop");

        this.initButtonHandler("Canvas/button_rank");
        this.initButtonHandler("Canvas/button_gift");
        this.initButtonHandler("Canvas/button_notice");
        this.initButtonHandler("Canvas/button_rate");
        this.initButtonHandler("Canvas/button_shop");
        
        cc.vv.audioMgr.playBGM("bgMain.mp3");
    },
    
    initButtonHandler:function(btnPath){
        var btn = cc.find(btnPath);
        cc.vv.utils.addClickEvent(btn,this.node,"Hall","onBtnClicked");        
    },
    
    onBtnClicked:function(event){
        if(event.target.name == "button_rank"){ 
        }   
        else if(event.target.name == "button_gift"){  
        }
        else if(event.target.name == "button_notice"){ 
        }
        else if(event.target.name == "button_rate"){ 
        }
        else if(event.target.name == "button_shop"){   
            if(this.panelShop){
                this.panelShop.active = true; 
            }
        }
    },  
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
       
    }

});
