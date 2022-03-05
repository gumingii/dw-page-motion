$(function(){ 
    $('.btn_nav').click(function(){
        if($('.btn_nav').hasClass('active')){
            $('#navWrap').attr('style', "display:none;");
            $('.btn_nav').removeClass('active');
        }else{
            $('#navWrap').attr('style', "display:block;");
            $(this).addClass('active');
        }
    });
    
    /*$('span').mouseover(function(){
        /*$('.hide').removeClass('hide');
        new Vivus('.Layer_1',{type:'oneByOne',duration:100});
    });*/
    
   /*$('.dw_detail_inner').mouseenter(function(){
        $('#dw_detail .img').attr('style', "display:block;");
        //$('.detail_img1').attr('style', "margin-right:-8px;");
        
        var windowWidth = $( window ).width();
        if(windowWidth > 1300) {
            $('.detail_img2').attr('style', "left:-6");
        }
        
    });
    */
    $('.dw_detail_inner').mouseleave(function(){
        $('#dw_detail .img').attr('style', "display:none;");
        $('.detail_img1').attr('style', "margin-right:2.6;");
        $('.detail_img2').attr('style', "margin-right:2.6;");
    });

//    $('.main_img .content h3').addClass('fadein');
//    $('.main_img .content h2').addClass('fadein');
    
    $(window).scroll(function(){
        var thisPage = $(this);
        scroll_animation('.model01', thisPage, 'fromLeft');
        scroll_animation('.model02', thisPage, 'fromRight');
        scroll_animation('#dw_detail h2', thisPage, 'fromLeft');
        scroll_animation('.detail_img1', thisPage, 'up');
        scroll_animation('.detail_img2', thisPage, 'up');
        scroll_animation('.detail_img3', thisPage, 'up');       
        scroll_animation('#dw_design .img_design', thisPage, 'fromLeft');
        scroll_animation('#dw_design .text_box', thisPage, 'fromRight');
        scroll_animation('#dw_style .img_style ', thisPage, 'fromRight');
        scroll_animation('#dw_style .text_box', thisPage, 'fromLeft');
        scroll_animation('#classic img', thisPage, 'watch_up_left');
        scroll_animation('#iconic .boxs img', thisPage, 'watch_up_right');
        scroll_animation('#petite img', thisPage, 'watch_up_left');
    });

    function scroll_animation(pathId, thisPage, ani){
        if(thisPage.scrollTop() > $(pathId).offset().top - thisPage.height()){
            if(pathId=='.detail_img2'){
                $(pathId).attr('style', "animation-delay:0.3s;");
            }
            if(pathId=='.detail_img3'){
                $(pathId).attr('style', "animation-delay:0.6s;");
            }
            
            
            
            $(pathId).addClass(ani);
        }else{
            $(pathId).removeClass(ani);
        }
    }

});