
var ANIMATE_END = "webkitAnimationEnd animationend";
var questionIndex = 0;
var answerArr = [1,0,1,0,1];
var scoreArr =[0,0,0,0,0]
var totalScore=0;
window.onload=function(){
    var loading = $('.loading')
    var home =$('.home');
    var success =$('.success');
    var fail =$('.fail');
    var next =$('.next');
    var question_ctn =$('.question_ctn');
    var questions =$('.question');
    var question_li =questions.find('li');
    var score = $('.score');
    var challenger = $('.challenger');
    var share = $('.share');
    var yidong = $('.yidong');
    var explain_view = $('.explain_view');
    var isGetAnswer = false;
    loading.hide()
    home.show().addClass('on');
    $(".start").click(function(e){
        e.stopPropagation()
        home.removeClass('on');
        btnTapCallbk($(this), function(){
            yidong.append('<img src="images/yidong_1.jpg">')
            home.hide()
            question_ctn.fadeIn(500,function(){
                questions.eq(questionIndex).show().addClass('ani')
            })
        });
    });

    next.click(function(e){
        e.stopPropagation()

        btnTapCallbk($(this), function(){
            if (!isGetAnswer) {
              layer.open({
                content: '请答题！'
                ,skin: 'msg'
                ,time: 2 //2秒后自动关闭
              });
              return;
            }
            question_ctn.fadeIn(500,function(){
                isGetAnswer=false;
                if (questionIndex < 4) {
                    questions.eq(questionIndex).hide().removeClass('ani');
                    questions.eq(++questionIndex).show().addClass('ani');
                }else{
                    for (var i = 0; i < 5; i++) {
                        totalScore += scoreArr[i];
                    }
                    questions.eq(questionIndex).hide().removeClass('ani');
                    next.hide()
                    score.text(totalScore);
                    if (totalScore >= 60) {
                        success.fadeIn();
                        challenger.text(totalScore == 60 ? "61%" : (totalScore==80 ? '79%' : '96%'))
                    }else{
                        fail.fadeIn();
                    }
                }
            })
        });
    });
    $('.restart').click(function(e){
        e.stopPropagation()
        var _self = $(this);
        btnTapCallbk(_self.find('img'),function(){
            questions.find('.acitve').removeClass('acitve');
            totalScore=0;
            questionIndex=0;
            scoreArr =[0,0,0,0,0];
            _self.parents('.complete').hide();
            next.fadeIn()
            questions.eq(questionIndex).show().addClass('ani')
        })
    })
    $('.xuanyao').click(function(e){
        e.stopPropagation()
        var _self = $(this);
        btnTapCallbk(_self.find('img'),function(){
            share.fadeIn()
        })
    })
    $('.guanzhu').click(function(e){
        e.stopPropagation()
        var _self = $(this);
        btnTapCallbk(_self.find('img'),function(){
            yidong.fadeIn()
        })
    })
    yidong.click(function(e){
        e.stopPropagation()
        yidong.fadeOut()
    })
    question_li.click(function(e){
        e.stopPropagation()
        var that = $(this);
        isGetAnswer = true;
        if (that.hasClass('acitve')) {return;}
        that.siblings('.acitve').removeClass('acitve');
        that.addClass('acitve');

        if (answerArr[questionIndex] == that.index()) {
            scoreArr[questionIndex] = 20;
        }else{
            scoreArr[questionIndex] = 0;
        }
    });

    share.click(function(e){
        e.stopPropagation();
        $(this).fadeOut()
    })
    $('.explain').click(function(e){
        e.stopPropagation();
        btnTapCallbk($(this),function(){
           explain_view.fadeIn();
        })
    })
    $('.back_home').click(function(e){
        e.stopPropagation();
        btnTapCallbk($(this),function(){
           explain_view.fadeOut();
        })
    })
var audioPlay=$('.audioPlay');
var audio=$('.audio')[0];
var isPlay= true;
    audioPlay.click(function(e){
        e.stopPropagation();
        if (isPlay) {
            audioPlay.addClass('audioPause');
            audio.pause();
            isPlay=false;
        }else{
            audioPlay.removeClass('audioPause');
            audio.play();
            isPlay= true;
        }
    })


var title ='要考四六级了 你的脑力还够不够？';
var desc ='脑力大挑战来啦！快来回答问题看看你是不是传说中的最强大脑吧！';
var thisUrl = location.href.split('#')[0];
var shareImg =location.origin + "/xinyidong/images/logo2_1.png";
// var code =window.location.search.match(/code=(.*)&/)[1]; 
$.ajax({
    url: "/xinyidong/signPackage.php",
    dataType: "json",
    data: {url: thisUrl},
    success: function(res){
        console.log(res)
        wx.config({
            debug: false,
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]
        });
    }
});

wx.ready(function(){
    wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: thisUrl,
        imgUrl: shareImg
    });

    wx.onMenuShareTimeline({
        title: title,
        link: thisUrl,
        imgUrl: shareImg
    });
    wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: thisUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
    });
    wx.onMenuShareWeibo({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: thisUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
    });
    wx.onMenuShareQZone({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: thisUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
    });
});

}


function btnTapCallbk($ele, func){
    $ele.addClass("push-it").one(ANIMATE_END, function(){
        $(this).removeClass("push-it");
        func();
    });
}