//JavaScript Document
/* subvisual */
$(document).scroll(function(){
	var scrollTop = $(document).scrollTop();
	if(scrollTop >= 332){
		$("div[class ^= 'subvisual'] .tab").addClass("on");
	} else{
		$("div[class ^= 'subvisual'] .tab").removeClass("on");
	}
})


/* tab */
function tabmenu(tab, contentAll){
$(tab).eq(0).addClass("on");
$(contentAll).hide();
$(contentAll).eq(0).show();
	$(tab).click(function(){
		$(tab).removeClass("on");
		$(this).addClass("on");

		$(contentAll).hide();
		var contentIndex = $(this).index();
		$(contentAll).eq(contentIndex).show();
	})
}

tabmenu(".history ul li",".history .tabcontent");// sub1_1 연혁 
tabmenu(".policy ul li",".policy .tabcontent");//sub1_2 경영방침
tabmenu(".protect_tab li",".protect_tabcontent");//sub2_1 작물보호제

/* product tag */
function product(e){
	for(var i=0; i < 13; i++){
		var text = $(e).eq(i).text();
		if (text.indexOf('원예용') == 0){
			$(e).eq(i).css({"background-color": "#00a0e9"})
		}
	}
}

product('.protect .protect_tabcontent:nth-of-type(1) span');
product('.protect .protect_tabcontent:nth-of-type(2) span');
product('.protect .protect_tabcontent:nth-of-type(3) span');

/* pest */
function pest(e){
	for(var i=0; i < 5; i++){
		var text = $(e).eq(i).find("span").text();
		if (text.indexOf('원예용') == 0){
			$(e).eq(i).find("h4").css({"background-color": "#00a0e9"})
			$(e).eq(i).find("span").css({"background-color": "#00a0e9"})
			var j = i+1;
			$('<style>.pest .pest_item' +j+ ' strong::after{background-color: #00a0e9;}</style>').appendTo('head');
		}
	}
}
pest(".pest article");