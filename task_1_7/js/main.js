$(document).ready(function(){
	//下划线动画
	(function(){
		lineToWidth($('#section-4').find('p:first'),$('#section-4').find('hr'),32+'px',232+'px');
		lineToWidth($('#section-7').find('.left').find('p:first'),$('#section-7').find('.left').find('hr'),30+'px',171+'px');
		lineToWidth($('#section-7').find('.center').find('p:first'),$('#section-7').find('.center').find('hr'),30+'px',171+'px');
		lineToWidth($('#section-8').find('.top').find('h1'),$('#section-8').find('.top').find('hr'),30+'px',167+'px');

		function lineToWidth(obj,objHr,beforeWidth,afterWidth){
			obj.hover(function(){
				objHr.stop().animate({'width':afterWidth});
			},function(){
				objHr.stop().animate({'width':beforeWidth});
			});
		}
	})();

	//头部下划线移动
	(function(){
		var headLi=$('#header').find('li');
		var headLiLink=headLi.find('a');
		var headHr=$('#header').find('hr');
		var iNow=0;

		headLi.hover(function(){
			iNow=$(this).index();
			headLiLink.css('color',' #787b83');
			headLiLink.eq(iNow).css('color','#E94F4F');
			headHr.stop().animate({'left':22 + 104*iNow + 'px'});
		},function(){
			headLiLink.css('color',' #787b83');
			headHr.stop().animate({'left':22 + 'px'});
		});
		
	})();

	//第6部分的轮播图
	(function(){
		var aUl=$('#section-6').find('ul');
		var aUlLi=aUl.find('li');
		var aOl=$('#section-6').find('ol');
		var aOlLi=aOl.find('li');
		var iNow=0;
		var timer=null;

		autoPlay();

		aOlLi.hover(function(){
			clearInterval(timer);
			iNow=$(this).index();
			var left= -iNow*aUl.width()/3;
			toMove(left);
		},function(){
			autoPlay();
		});

		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow %= 3;
				var left= -iNow*aUl.width()/3;
				toMove(left);
			},2000);
		}

		function toMove(left){
			aUl.stop().animate({left:left},700);
			aOlLi.removeClass('native');
			aOlLi.eq(iNow).addClass('native');
		}
	})();
});