$(document).ready(function(){
    
    /* notice-area cae*/
    function notice(){
        $(".notice").stop().animate({
            top:"-40px"
        },{
            duration:1000,
            easing:"linear",
            complete:function(){
                var $clone = $(".notice > li").first().clone();
                $(".notice").append($clone);
                $(".notice > li").first().remove();
                $(".notice").css({"top":"0px"});
            },
        });
    }
    setInterval(notice,2500);
    
    /* main-header fixed */
    $(window).on("scroll",function(){
        var s = $("html").scrollTop();
        
        if(s >= 40){
            $(".main-header")
                .addClass("scroll")
                .css({
                "border-bottom":"1px solid rgba(0,0,0,0.1)",
                "position":"fixed",
                "top":"0px"
            });
            $("#gnb").slideUp(100);
        }else{
            $(".main-header")
                .removeClass("scroll")
                .css({
                "position":"relative",
                "border-bottom":"none",
            });
            $("#gnb").slideDown(100);
        }
    });
    
    $(".logo").on("click",function(){
        $(".main-header").removeClass("scroll");
        $("#gnb").slideDown(100);
    });
    
    /* .mo-menu main tap */
    $(".mo-menu-sub-wrap").hide();
    $(".mo-menu-sub").hide();
    $(".mo-menu-tabs > li").first().addClass("select");
    
    $(".mo-menu-tabs > li").first().on("click",function(){
        $(".mo-menu-sub-wrap").hide();
        $(".mo-menu-sub").hide();
        $(".mo-menu-tabs > li").removeClass("select");
        $(".mo-menu-tabs > li").first().addClass("select");
    });
    
    $(".fa-chevron-left").on("click",function(){
        $(".mo-menu-sub-wrap").hide();
        $(".mo-menu-sub").hide();
        $(".mo-menu-tabs > li").removeClass("select");
        $(".mo-menu-tabs > li").first().addClass("select");
    });
    
    $(".mo-menu-tabs > li:not(:first-child)").on("click",function(){
        var tapidx1 = $(this).index()-1;
        $(".mo-menu-sub-wrap").show();
        $(".mo-menu-sub").hide();
        $(".mo-menu-sub").eq(tapidx1).show();
        $(".mo-menu-tabs > li").removeClass("select");
        $(this).addClass("select");
    });
    
    /* .mo-menu-sub tap */
    $(".bar-category").hide();
    $(".bar-category").first().show();
    $(".bar-tabs > li").first().addClass("select");
    
    $(".bar-tabs > li").on("click",function(){
        var bartapidx = $(this).index();
        $(".bar-category").hide();
        $(".bar-category").eq(bartapidx).show();
        $(".bar-tabs > li").removeClass("select");
        $(this).addClass("select");
    });
    
    /* main-slide swiper plug-in */
    var swiper = new Swiper(".swiper",{
        direction:'horizontal',
        loop:true,
        speed:1000,
        autoplay:{
            delay:2500
        },
        pagination:{
            el: '.swiper-pagination'
        },
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'                
        }
    });
    
    
    /* sect-category tap */
    $(".category-wrap > .category").hide();
    $(".category-wrap > .category").first().show();
    $(".tabs > li").first().addClass("select");
    
    $(".tabs > li").on("click",function(){
        var tapidx = $(this).index();
        $(".category-wrap > .category").hide();
        $(".category-wrap > .category").eq(tapidx).show();
        $(".tabs > li").removeClass("select");
        $(this).addClass("select");
    });
    
    
    /* sect-deal cae - remove btn */
    $("#deal-prev").css("display","none");
    
    var current1 = 0;
    var total1 = $(".deal-cont > li").length;
    var show1 = 3;
    var itemWidth1 = $(".deal-cont").children("li").width();
    var left1;
    var right1;
    
    function fnSlide1(idx){
        $(".deal-cont").animate({
            left:-(itemWidth1) * idx
        });
        current1=idx;
    }
    
    $("#deal-next").on("click",function(){
        fnChk1(current1 + 1);
        fnSlide1(current1 + 1);
    });
    
    $("#deal-prev").on("click",function(){
        fnChk1(current1 - 1);
        if(current1 == 0){
            return false;
        }else{
            fnSlide1(current1 - 1);
        }
    });
    
    function fnChk1(cnum){
        left1 = cnum;
        right1 = total1 - (left1 + show1);
        
        if((left1<=0)&&(right1<=0)){
            $("#deal-prev").css("display","none");
            $("#deal-next").css("display","none");
        }
        if((left1>0)&&(right1>0)){
            $("#deal-prev").css("display","block");
            $("#deal-next").css("display","block");
        }
        if((left1<=0)&&(right1>0)){
            $("#deal-prev").css("display","none");
            $("#deal-next").css("display","block");
        }
        if((left1>0)&&(right1<=0)){
            $("#deal-prev").css("display","block");
            $("#deal-next").css("display","none");
        }
    }
    
    
    /* sect-new cae - remove btn */
    $("#new-prev").css("display","none");
    
    var current2 = 0;
    var total2 = $(".new-cont > li").length;
    var show2 = 3;
    var itemWidth2 = $(".new-cont").children("li").width();
    var left2;
    var right2;
    
    
    function fnSlide2(idx){
        $(".new-cont").animate({
            left:-(itemWidth2) * idx
        });
        current2=idx;
    }
    
    $("#new-next").on("click",function(){
        fnChk2(current2 + 1);
        fnSlide2(current2 + 1);
    });
    
    $("#new-prev").on("click",function(){
        fnChk2(current2 - 1);
        if(current2 == 0){
            return false;
        }else{
            fnSlide2(current2 - 1);
        }
    });
    
    function fnChk2(cnum){
        left2 = cnum;
        right2 = total2 - (left2 + show2);
        
        if((left2<=0)&&(right2<=0)){
            $("#new-prev").css("display","none");
            $("#new-next").css("display","none");
        }
        if((left2>0)&&(right2>0)){
            $("#new-prev").css("display","block");
            $("#new-next").css("display","block");
        }
        if((left2<=0)&&(right2>0)){
            $("#new-prev").css("display","none");
            $("#new-next").css("display","block");
        }
        if((left2>0)&&(right2<=0)){
            $("#new-prev").css("display","block");
            $("#new-next").css("display","none");
        }
    }
    
    
    /* ranking number color */
    $(".rank-title h3:lt(3)").children(".rank-title h3 > b").css("color","#FF6D00")

    
    /* ranking auto */
    var rankidx=0;
    var timer;
    
    function ranking(idx){
		$(".rank-wrap > li").eq(idx).find(".rank-detail-info").animate({   
			height:"98px"
		},{
			duration:100,
            ease:"swing",complete:function(){
                $(".rank-detail-info").not(this).css({"height":"0"});
                $(".rank-title").find("span").removeClass("fas fa-angle-up");
                $(".rank-title").find("span").addClass("fas fa-angle-down");
                $(this).siblings(".rank-title").find("span").addClass("fas fa-angle-up");
            }
        });
        rankidx = idx +1 ;
	}
    
    function setIdx(){
        if(rankidx > 9){
            ranking(0);
        }else{
            ranking(rankidx);
        }
    }
    
	timer = setInterval(setIdx,2300);
    
    $(".rank-wrap > li").on("mouseover",function(){
        clearInterval(timer);
    }); 
    $(".rank-wrap > li").on("mouseout",function(){
        timer = setInterval(setIdx,2300);
    });
    
    /* footer .sns hover */
    $(".sns > li").on("mouseover",function(){
        $(this).addClass("on");
    });
    $(".sns").on("mouseout",function(){
        $(".sns > li").removeClass("on");
    });


});