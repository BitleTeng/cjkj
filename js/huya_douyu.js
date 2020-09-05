// ==UserScript==
// @name         虎牙自动弹幕及页面精简等功能、斗鱼页面精简及检测广告弹窗[更多福利关注 纯净至上公众号]
// @namespace    https://mp.weixin.qq.com/s/H3twfD4wXZuxFjyNQMYepA
// @require		 https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
//@require       https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js
// @version      3.1
// @description  出现页面布局问题 ctrl + f5 刷新一次
// @description  公众号教程地址最初版本教程地址:https://mp.weixin.qq.com/s/H3twfD4wXZuxFjyNQMYepA
// @description  斗鱼脚本功能: 自动精简斗鱼页面以及自动检测屏蔽广告等讨厌弹窗;自动发送弹幕暂时不添加;自动开启屏蔽功能
// @description  虎牙脚本功能: 自动发送弹幕;自动精简虎牙页面(非常精简,不喜欢请关闭脚本);自动开启屏蔽功能(屏蔽进场消息、礼物特效和消息等);破解关键字输入限制;自动检测回复怼
// @author       Bitle
// @license      MIT
// @match        *://www.huya.com/*
//@match         *://www.douyu.com/*
// @run-at       document-idle
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// ==/UserScript==
(function() {
    var $_ = function(para){
        let judgeSelect = para.toString().substring(0,1);
        let valueSelect = para.toString().substring(1);
        var el;
        if(judgeSelect==="."){
            el = document.getElementsByClassName(valueSelect)[0];
        }else if(judgeSelect==="#"){
            el = document.getElementById(valueSelect);
        }
        return el;
    }
    $(document).ready(function(){
        if(window.location.host=="www.huya.com"){
            let url = window.location.href;
            $('.mod-sidebar').remove();
            $('.room-footer').remove();
            $('.box-crumb').remove();
            $('.room-sidebar-hd').remove();
            $('.player-gift-wrap').remove();
            if($('.special-bg')){
                $('.special-bg').remove();
            }
            if(url=="https://www.huya.com/"||url=="https://www.huya.com/g"){
                // console.log("");
            }else{
                $('.duya-header').remove();
            }
            $('.main-room').css("padding","10px 0px 0");
            $('.main-wrap').css("padding","55px 0 0 0");
            $(".main-room").css("paddingLeft","8px");
            $(".main-wrap").css("padding","0");
            if($('.js-responded-list')){
                $('.js-responded-list').css({
                    height:"700px",
                    marginLeft:"10px"
                });
            }
            if( $('.mod-list')){
                $('.mod-list').css({
                    width:"99%",
                    padding:"0px"
                });
            }
            $('.player-ctrl-wrap').css({
                position:"unset",
                marginTop:"1px"
            });
            if($.cookie("yyuid") == null){
                window.localStorage.setItem("TT_ROOM_SHIELD_CFG_0_",'{"10000":1,"20001":1,"20002":1,"20003":1,"30000":0}');
            }else{
                let setName = "TT_ROOM_SHIELD_CFG_0_"+$.cookie("yyuid");
                window.localStorage.setItem(setName,'{"10000":1,"20001":1,"20002":1,"20003":1,"30000":0}');
            }
            //解除登录画质限制
            $('#player-login-tip-wrap').remove();
            VPlayer.prototype.checkLogin(true);
        }else if(window.location.host=="www.douyu.com"){
            $('.layout-Aside').remove();
            $('#js-bottom').remove();
            /**if(window.Notification && Notification.permission !== "denied") {
                Notification.requestPermission(function(status) {    // 请求权限
                    if(status === 'granted') {
                        var n = new Notification('Title', {
                            body : 'I am a Notification',
                        });
                        setTimeout(function() {
                            n.close();
                        }, 5000);
                    }
                });
            }**/
        }
    });
    var s = setInterval(function () {
        if(window.location.host=="www.huya.com"){
            let b = $_('.room-gg-chat');
            let c = $_('.J_input');
            let c2 = document.getElementsByClassName("J_input")[1];
            let d = $_('.roomBlockWords-list');
            let d2 = document.getElementsByClassName("roomBlockWords-list")[1];
            let e = $_(".chat-room");
            let e2 = $_(".chat-room__bd");
            if( $('#huya-ab')){$('#huya-ab').remove();}
            if(b){b.parentNode.removeChild(b);}
            if(c||c2){
                if(c.getAttribute("maxlength")=="10"||c.getAttribute("disabled")==""||c2.getAttribute("maxlength")=="10"||c2.getAttribute("disabled")==""){
                    c.removeAttribute("disabled");
                    c2.removeAttribute("disabled");
                    c.setAttribute("maxlength","n");
                    c2.setAttribute("maxlength","n");
                }
            }
            if(d||d2){
                d.style.overflow ="scroll";
                d.style.height ="333px";
                d.style.zIndex = "999999";
                d2.style.overflow ="scroll";
                d2.style.height ="336px";
                d2.style.zIndex = "99999";
            }
            if(e||e2){
                e.style.height = "520px";
                e2.style.height = "100%";
            }
        }else if(window.location.host=="www.douyu.com"){
            var e_ = $_('.layout-Player-barrage');
            let m_ = $_('.layout-Main');
            let n_ = $_('.layout-Player-main');
            let url = window.location.href;
            //window.localStorage.setItem("chat-shield-config",'{"c":1568042436000,"e":253402300799000,"v":"\"{\\\"allGift\\\":1,\\\"message\\\":1,\\\"videoBroadcast\\\":1,\\\"smallgift\\\":1,\\\"userEnter\\\":1}\"","r":1}');
            // window.localStorage.setItem("acf_refer_action_code",'{"c":1568042408401,"e":253402300799000,"v":"\"click_shield_gift_select\""}')
            //$('.ShieldTool-list').children('div').attr("class","ShieldTool-listItem is-checked");
            //$(".ShieldTool-enter").children('div').eq(0).attr("class","ShieldTool-listItem is-checked");
            if($('.Title-impress')){$('.Title-impress').remove();}
            if($('.Title-videoSiteLink')){ $('.Title-videoSiteLink').remove();}
            if($('.Title-roomOtherBottom')){$('.Title-roomOtherBottom').remove();}
            if($('.layout-Player-toolbar')){$('.layout-Player-toolbar').remove();}
            if($('.SignBaseComponent-sign-box')){$('.SignBaseComponent-sign-box').remove();}
            if($('.AppFlow is-show')){$('.AppFlow is-show').remove();}
            if($('.UPlayerLotteryEnter')){$('.UPlayerLotteryEnter').remove()}
            if($('.layout-Player-guessgame')){$('.layout-Player-guessgame').remove();}
            if($('.LotteryContainer')){$('.LotteryContainer').remove();}
            if($('.layout-Player-announce')){$('.layout-Player-announce').remove();}
            if($('.layout-Player-rank')){$('.layout-Player-rank').remove();}
            if($('.ChatTabContainer')){$('.ChatTabContainer').remove();}
            if($('.closeBg-998534')){$('.closeBg-998534').remove();}
            if($('#js-player-toolbar')){$('#js-player-toolbar').remove();}
            if($('.SuperFansGuideTips')){$('.SuperFansGuideTips').remove();}
            if($(".Act156581")){$('.Act156581').remove();}
            if($('.PcDiversion')){$('.PcDiversion').remove();}
            if($('.HeaderGif-left')){$('.HeaderGif-left').remove();}
            if($('.HeaderGif-right')){$('.HeaderGif-right').remove();}
            if($('.Title-anchorFriend')){$('.Title-anchorFriend').remove();}
            if($('.SociatyLabel')){$('.SociatyLabel').remove();}
            if($('.Title-addFriend')){$('.Title-addFriend').remove();}
            if($('.ActSuperFansGroup ')){$('.ActSuperFansGroup ').remove();}
            if(url ==="https://www.douyu.com/directory"||url === "https://www.douyu.com/"){
                //console.log(url);
            }else{
                if($(".layout-Container").css("paddingTop")!=="0px"){$(".layout-Header").hide();$(".layout-Container").css("paddingTop","0px");}
            }
            if(e_){e_.style.top=0;}
            if(m_){m_.style.margin = "0px";m_.style.padding = "0px";}
            if(n_){n_.style.height = "110%";}
            if($('.Title').height()!=90){$('.Title').css("height","90px");}
            if($('.Title-anchorPic')){$('.Title-anchorPic').css({height:"90px",width:"90px"});}
            if($('.layout-Player-title').css("marginBottom")!=="0px"){$('.layout-Player-title').css("marginBottom","0px");}
        }
    },0);
    var str_div = (function(){/*
			<div id="open"
        style="user-select: none;cursor:pointer;width: 40px;height: 40px;border-radius:6px;background:#65c294;position: fixed;right: 100px;bottom:60px;color: #111331;text-align: center;z-index: 99999;display: flex;flex-direction: column;justify-content: flex-start;">
        <div class="drag"
            style="font-size: 10px;box-sizing:border-box;border-bottom: 1px solid yellow;line-height:20px;">拖动</div>
        <div class="move" style="font-size: 10px;box-sizing:border-box;border-top: 1px solid yellow;line-height:20px;">
            展开</div>
    </div>
    <div id="barrage"
        style="user-select: none;display:none;position:fixed;top:0;background: #65c294;width: 200px;height: 230px;z-index: 999999999999;">
        <div id="head"
            style="color: #ffffff;height: 30px;text-align: center;border-bottom: 1px solid #eeeeee;cursor: pointer;">
            <div class="reply"
                style="margin-left: 3px;font-size: 15px;float: left;color: #ffffff;font-weight: bold;line-height: 30px;box-sizing: border-box;width: 30px;background: #111331">
                怼</div>
            <div style="font-size: 12px;float: left;line-height: 30px;width: 134px;">自动弹幕</div>
            <div class="close"
                style="font-size: 15px;float: left;color: #ffffff;font-weight: bold;line-height: 30px;box-sizing: border-box;width: 30px;background: #111331">
                藏</div>
        </div>
        <div id="barrageContent" style="margin-top: 3px;">
            <div style="height: 30px;">
                <span
                    style="color: #ffffff;font-size: 15px;line-height: 30px;vertical-align:top;margin-left: 3px;">时间(s):</span>
                <textarea id="setTime" placeholder="默认10s"
                    style="width: 80px;vertical-align:top;line-height: 8px;resize: none;color: #232323;padding-top: 9px;"></textarea>
            </div>
            <div style="height: 130px;">
                <span
                    style="color: #ffffff;font-size: 15px;line-height: 30px;vertical-align:top;margin-left: 3px;">输入弹幕:</span>
                <textarea id="barrage_text" placeholder="多个弹幕请换行"
                    style="width: 187px;height: 90px;resize: none;margin-left: 3px;"></textarea>
            </div>
        </div>
        <div id="reply" style="display:none;">
            <div>
                <span style="color: #ffffff;font-size: 12px;margin-left: 3px;">关键字:</span>
                <textarea id="setKey" placeholder="关键字目前只能输入一个"
                    style="width: 187px;height:44px;margin-left: 3px;line-height: 8px;resize: none;color: #232323;padding-top: 9px;"></textarea>
            </div>
            <div>
                <span style="color: #ffffff;font-size: 12px;margin-left: 3px;">回怼弹幕:</span>
                <textarea id="reply_text" placeholder="多个回复随机弹幕请换行"
                    style="width: 187px;height: 46px;resize: none;margin-left: 3px;"></textarea>
            </div>
        </div>
        <div id="comfirm"
            style="color: #ffffff;font-size: 15px;width:100%;height: 30px;line-height: 30px;text-align:center;background: green;cursor: pointer;position: absolute;bottom: 0;">
            开始执行</div>
    </div>
		*/}).toString().split('/*')[1].split('*/')[0].replace(/[\n]/g, '');
    if(window.location.host=="www.huya.com"){
        $("body").append(str_div);
        $('#head').mousedown(function (e) {
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;

            $(document).mousemove(function (e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - $('#barrage').outerWidth(true)) {
                    x = $(document).width() - $('#barrage').outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - $('#barrage').outerHeight(true)) {
                    y = $(document).height() - $('#barrage').outerHeight(true);
                }
                let obj = { x: x, y: y };
                window.localStorage.setItem("coordinate", JSON.stringify(obj));

                $('#barrage').css({
                    'left': x + 'px',
                    'top': y + 'px'
                });
            });
            $(document).mouseup(function () {
                $(document).off('mousemove');
            });
        });


        $('.drag').mousedown(function (e) {
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;

            $(document).mousemove(function (e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - $('#open').outerWidth(true)) {
                    x = $(document).width() - $('#open').outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - $('#open').outerHeight(true)) {
                    y = $(document).height() - $('#open').outerHeight(true);
                }
                let obj = { x: x, y: y };
                window.localStorage.setItem("coordinate_two", JSON.stringify(obj));

                $('#open').css({
                    'left': x + 'px',
                    'top': y + 'px'
                });
            });
            $(document).mouseup(function () {
                $(document).off('mousemove');
            });
        });
        $(".move").click(function () {
            $("#open").slideToggle();
            $("#barrage").slideToggle();
            let x = JSON.parse(window.localStorage.getItem("coordinate")).x;
            let y = JSON.parse(window.localStorage.getItem("coordinate")).y;
            $('#barrage').css({
                'left': x + 'px',
                'top': y + 'px'
            });
        });
        $(".close").click(function () {
            $("#barrage").slideToggle();
            $("#open").slideToggle();
        });
        var comfirmStatus = true;
        var stop1, stop2;
        var pageStatus = true;
        var relaseBarrage = [];
        var relaseKey = [];
        var Barrage = [];
        var checkReply = [];
        var defualtTime = 10;
        let random_ = function (len) {
            let rand = Math.floor(Math.random() * len);
            return rand;
        }
        let countTime = function (time) {
            let second = time * 1000;
            let len = $('#barrage_text').val().split("\n").length;
            let pageStatus_ = JSON.parse(window.localStorage.getItem("pageStatus"));
            Barrage = $('#barrage_text').val().split("\n");
            $('#comfirm').text("停止执行");
            $('#comfirm').css("backgroundColor", "red");
            stop1 = setInterval(function () {
                $(".chat-room__input>span").attr("class", "btn-sendMsg enable");
                $('#pub_msg_input').val(Barrage[random_(len)]);
                $('.btn-sendMsg').click();
            }, second);
        }
        let changeTime = function () {
            let randomTime = Math.random() * (5 - 1) + 1;
            return parseFloat(randomTime.toFixed(2));
        }
        $('#comfirm').click(function () {
            let pageStatus_ = JSON.parse(window.localStorage.getItem("pageStatus"));
            if (pageStatus_ === true || pageStatus_ === null) {
                if (comfirmStatus === true) {
                    comfirmStatus = false;
                    var reg = new RegExp("^[0-9]*$");
                    let value = parseInt($('#setTime').val());
                    window.localStorage.setItem("barrageText", JSON.stringify($('#barrage_text').val()));
                    if (reg.test(value)) {
                        let rdtime = value + changeTime();
                        window.localStorage.setItem("countTime", JSON.stringify(value));
                        countTime(rdtime);
                    } else if ($('#setTime').val() == "") {
                        countTime(defualtTime);
                    } else {
                        alert("时间填写不是数字");
                    }
                } else {
                    comfirmStatus = true;
                    $('#comfirm').text("开始执行");
                    $('#comfirm').css("background", "green");
                    clearInterval(stop1);
                }
            } else {
                if (comfirmStatus === true) {
                    comfirmStatus = false;
                    let times_ = changeTime()*1000;
                    window.localStorage.setItem("setKey", JSON.stringify($('#setKey').val()));
                    window.localStorage.setItem("replyText", JSON.stringify($('#reply_text').val()));
                    stop2 = setInterval(repyRule,3000+times_);
                    $('#comfirm').text("停止执行").css("background", "red");
                } else {
                    comfirmStatus = true;
                    $('#comfirm').text("开始执行").css("background", "green");
                    clearInterval(stop2);
                }
            }
        });
        let repyRule = function(){
            let name_ = $("#chat-room__list > li:last-of-type >.msg-normal>.name").text();
            let msg_ = $("#chat-room__list > li:last-of-type >.msg-normal>.msg").text();
            let relaseBarrageLen = $('#reply_text').val().split("\n").length;
            relaseBarrage = $('#reply_text').val().split("\n");
            relaseKey = $('#setKey').val().split("\n");
            let check = new RegExp(relaseKey[0], 'g');

            if (check.test(msg_)) {
                //console.log("@"+name_+"=>"+relaseBarrage[random_(relaseBarrageLen)]);
                $(".chat-room__input>span").attr("class", "btn-sendMsg enable");
                $('#pub_msg_input').val("@"+name_+"=>"+relaseBarrage[random_(relaseBarrageLen)]);
                $('.btn-sendMsg').click();
            }
        }
        $(".reply").click(function () {
            let pageStatus_ = JSON.parse(window.localStorage.getItem("pageStatus"));
            let countTime = JSON.parse(window.localStorage.getItem("countTime"));
            let barrageText = JSON.parse(window.localStorage.getItem("barrageText"));
            let replyText_ = JSON.parse(window.localStorage.getItem("replyText"));
            let setKey_ = JSON.parse(window.localStorage.getItem("setKey"));
            comfirmStatus = true;
            clearInterval(stop1);
            clearInterval(stop2);
            $('#comfirm').text("开始执行");
            $('#comfirm').css("background", "green");
            if (pageStatus_ === null || pageStatus_ === true) {
                window.localStorage.setItem("pageStatus", JSON.stringify(false));
                $('#setKey').val(setKey_);
                $('#reply_text').val(replyText_);
                $("#barrageContent").slideToggle();
                $("#reply").slideToggle();
            } else {
                window.localStorage.setItem("pageStatus", JSON.stringify(true));
                $('#setTime').val(countTime);
                $('#barrage_text').val(barrageText);
                $("#barrageContent").slideToggle();
                $("#reply").slideToggle();
            }

        })
        $(document).ready(function () {
            let x = JSON.parse(window.localStorage.getItem("coordinate_two")).x;
            let y = JSON.parse(window.localStorage.getItem("coordinate_two")).y;
            let countTime = JSON.parse(window.localStorage.getItem("countTime"));
            let barrageText = JSON.parse(window.localStorage.getItem("barrageText"));
            let replyText_ = JSON.parse(window.localStorage.getItem("replyText"));
            let setKey_ = JSON.parse(window.localStorage.getItem("setKey"));
            let pageStatus_ = JSON.parse(window.localStorage.getItem("pageStatus"));
            $('#open').css({
                'left': x + 'px',
                'top': y + 'px'
            });
            if (pageStatus_ === true || pageStatus_ === null) {
                $("#barrageContent").css("display", "block");
                $("#reply").css("diplay", "none");
                $('#setTime').val(countTime);
                $('#barrage_text').val(barrageText);
            } else {
                $("#barrageContent").css("display", "none");
                $("#reply").css("display", "block");
                $('#setKey').val(setKey_);
                $('#reply_text').val(replyText_);
            }
        });
    }
    //if end
})();
