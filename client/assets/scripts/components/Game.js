cc.Class({
    extends: cc.Component,

    properties: {        
        gameRoot:{
            default:null,
            type:cc.Node
        },
        
        prepareRoot:{
            default:null,
            type:cc.Node   
        },
        
        _myMJArr:[],
        _options:null,
        _selectedMJ:null,
        _chupaiSprite:[],
        _mjcount:null,
        _gamecount:null,
        _hupaiTips:[],
        _hupaiLists:[],
        _playEfxs:[],
        _opts:[],
    },
    
    onLoad: function () {
        if(!cc.sys.isNative && cc.sys.isMobile){
            var cvs = this.node.getComponent(cc.Canvas);
            cvs.fitHeight = true;
            cvs.fitWidth = true;
        }
        if(!cc.vv){
            cc.director.loadScene("loading");
            return;
        }
        
        //初始化View
        this.initView();
        //初始化事件
        this.initEventHandlers(); 
        //初始化数据
        this.initData();
        //开始游戏
        this.initStart();

        cc.vv.audioMgr.playBGM("bgFight.mp3");
    },
    
    initView:function(){
        
    },
    
    initEventHandlers:function(){
        cc.vv.gameNetMgr.dataEventHandler = this.node; 
        //初始化事件监听器
        var self = this; 
        /***
        this.node.on('game_holds',function(data){
           self.initMahjongs();
           self.checkQueYiMen();
        });
        */

    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
    }, 
    
    onDestroy:function(){
        console.log("onDestroy");
        if(cc.vv){
            cc.vv.gameNetMgr.clear();   
        }
    }
});
