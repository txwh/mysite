window.onload=function(){
	
	//图片轮播
	var oUl = $('.ul_swtich');
	$('.right_jt').click(function(){
		oUl.animate({'left':'-1214px'},'slow');
	});
	$('.left_jt').click(function(){
		oUl.animate({'left':'0px'},'slow');
	});
	
	//导航
//	$('#fwxm_li').mouseover(function(){
//      $('#fwxm').css({"display":"block","z-index":'999'});
//		$('#fwxm_li').css('color','RGB(95,179,54)').css('border-bottom','1px solid RGB(95,179,54)');
//		
//	});
//	$('#fwxm').mouseover(function(){
//		$('#fwxm').css('display','block');
//		$('#fwxm_li').css('color','RGB(95,179,54)').css('border-bottom','1px solid RGB(95,179,54)');
//	})
//	$('#fwxm_li').mouseout(function(){
//		$('#fwxm').css('display','none');
//		$('#fwxm_li').css('color','white').css('border-bottom','none');
//	});
//  $('#fwxm').mouseout(function(){
//  	$('#fwxm').css('display','none');
//  	$('#fwxm_li').css('border-bottom','none').css('color','white');
//  });
    
    $('#fwxm_li').hover(function(){
    	$('#fwxm').css({"display":'block',"z-index":"99999"});
    },function(){
    	$("#fwxm").css("display",'none');
    });
    
    $("#jjfa_li").hover(function(){
    	$('#jjfa').css({"display":'block',"z-index":"99999"});
    },function(){
    	$("#jjfa").css("display",'none');
    })
    
     $("#gywm_li").hover(function(){
    	$('#gywm').css({"display":'block',"z-index":"99999"});
    },function(){
    	$("#gywm").css("display",'none');
    })
     
    //背景大图片轮播
    var oBg1 = $('#background_1');
    var oBg2 = $('#background_2');
    var a = oBg1.css("z-index");
    var b = oBg2.css("z-index");
    var aYuan = $('#bullet1');
    var bYuan = $('#bullet2');
    aYuan.addClass('selected');
    
    function lunbo(){
    	if(a>b){
    		a--;
    		oBg1.css("z-index",a);
            aYuan.addClass('selected');
            bYuan.removeClass('selected');
            //文字动画
         
//          setTimeout(wordmove,300);
            guiwe()
             wordmove();
             wordmove2();
             $('#word_animate').css('display','block'); 
            $('#word_animate2').css('display','none');
    	}
    	else{
    		b--;
    		oBg2.css("z-index",b); 
            bYuan.addClass('selected');
            aYuan.removeClass('selected');
            //瞬间消失
            $('#word_animate2').css('display','block'); 
            $('#word_animate').css('display','none'); 
            
            //归位
            guiwe();
            wordmove();
            wordmove2();
            
            
    	}
    	
    };
    
    function guiwe(){
    	$('#b1').css({'opacity':"0","left":"250px"});
            $('#s1').css({'opacity':"0","left":'300px'});
            $('#b2').css({'opacity':"0","left":'250px'});
             $('#s2').css({'opacity':"0","left":'300px'});
            $('#b3').css({'opacity':"0","left":'250px'});
             $('#s3').css({'opacity':"0","left":'300px'});
             $('#i1').css({'opacity':'0','top':'0px'});
             $('#ninety').css({'opacity':'0','left':'980px'});
             
             $('#zhuanzhu').css({'opacity':"0",'top':"50px"})
             $('#ruanjian').css({'opacity':'0','top':'240px'})
    }
    
    //文字动画1
    function wordmove()
    {
    	if(a>=b){$('#b1,#b2,#b3,#s1,#s2,#s3').stop();}                 //停止掉
    
        $('#b1').animate(
        	{
        	opacity:"1",
        	left:"200px"
        },200,function()
        {
        	$('#s1').animate(
        		{
        		opacity:"1",
        		left:"350px"
        	},200,function(){
        		$('#b2').animate(
        		{
        		opacity:"1",
        		left:'200px'
        		},200,function(){
        			$('#s2').animate({
        				opacity:"1",
        		        left:"350px"
        			},200,function(){
        				$("#b3").animate({
        					opacity:"1",
        		            left:'200px'
        				},200,function(){
        					$('#s3').animate({
        						opacity:"1",
        		                left:"350px"
        					},200,function(){
        						$('#i1').animate({
        							opacity:"1",
        							top:"50px"
        						},200,function(){
        							$('#ninety').animate({
        								opacity:"1",
        								left:"930px"
        							})
        						})
        					})
        				})
        			})
        		})
        	})
        })
    }
    
    //互联网+ 文字动画
    function wordmove2(){
    	if(a<=b){$('#zhuanzhu,#ruanjian').stop();}     
    	$('#zhuanzhu').animate({
    		opacity:'1',
    		top:'100px'
    	},200,function(){
    		$('#ruanjian').animate({
    			opacity:"1",
    			top:"190px"
    		})
    	})
    }
    
    
    //小圆点点击
    
    $('#bullet1').click(function(){
    	if(a>b){lunbo()}
    })
    
    $('#bullet2').click(function(){
    	if(a<=b){lunbo()}
    })
    
    
    var sIt = setInterval(lunbo,5000);
    
    wordmove();         //一开始就执行一遍
    
    //点击左右绿色小圆圈箭头
    $('#left_btm,#right_btm').click(function(){
    	guiwe();
    	lunbo();
    	clearInterval(sIt);
    	sIt = setInterval(lunbo,5000);
    });
}
