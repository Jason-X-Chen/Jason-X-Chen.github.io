// JavaScript Document
$(document).ready(function() {
    $(window).scroll(function(){		    //技巧：利用导航条a标签的href属性和条目的id的值
		var items = $("#content").find(".item");
		var nav = $("#nav");
		var top = $(document).scrollTop(); //滚动条距顶部的距离
		//console.log(top);
		var currentId = "";				   //滚动条当前所处的条目
		items.each(function() {
            var m = $(this);
			if(top>m.offset().top-100){	   //条目距顶部的距离
				currentId = "#" + m.attr("id");
			}else{
				return false;
			}
        });
		
		var currentLink = nav.find(".current");
		if(currentId && currentLink.attr("href") !== currentId){
			currentLink.removeClass("current");
			nav.find("[href="+ currentId +"]").addClass("current"); 
		}
	});
});