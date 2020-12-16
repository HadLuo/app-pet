var url = 'http://172.18.5.55:9000';

// var url = 'http://49.234.123.192:9000';
//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}
function getCookieValue(name) {
  let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
  return result ? result.pop() : ""
}
// 初始化 页面共同 js
function init_common(){
	// 初始化 搜索按钮
	$('#btn_search').click(function() {
		var str = $('#text_search').val();
		if (str == '') {
			return;
		}
		//调用搜索结果
		$.get(url + "/item/selectByTitles?t="+str, function(data) {
			if(data.data.length == 0){
				alert("没有相关结果！请换个关键词试试~");
				return ;
			}
			document.cookie = "search_values="+JSON.stringify(data.data) ;
			document.cookie = "search_keywords="+str ;
			//跳转到搜索详情页面
			window.location.href="search_list.html";
		});
	});
}







// function addItem(){
// 					var dom = '<li class="last wow rollIn" data-wow-delay="0.5s">'+
// 						'<div class="flower-ch">'+
// 							'<span>06-12</span><a href="flower_show.html">时尚广告片中的自然花艺某某鲜花测试文字</a>'+
// 							'<div class="line"></div>'+
// 						'</div>'+
// 						'<p>2016年6月6日，第十届虎啸国际高峰论坛暨第七届虎啸奖颁奖盛典在上海隆重举行。作为商业传播领域最具权威性、前瞻性及创新性的大型赛事活动之一，虎啸奖至今已成功举办... </p>'+
// 					'</li>';
// 					$('#ul_list').append(dom)
// 				}
// 				 // 获取当前滚动条的位置 
// 				    function getScrollTop() { 
// 				        var scrollTop = 0; 
// 				        if (document.documentElement && document.documentElement.scrollTop) { 
// 				            scrollTop = document.documentElement.scrollTop; 
// 				        } else if (document.body) { 
// 				            scrollTop = document.body.scrollTop; 
// 				        } 
// 				        return scrollTop; 
// 				    } 
				    
// 				    // 获取当前可视范围的高度 
// 				    function getClientHeight() { 
// 				        var clientHeight = 0; 
// 				        if (document.body.clientHeight && document.documentElement.clientHeight) { 
// 				            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
// 				        } 
// 				        else { 
// 				            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
// 				        } 
// 				        return clientHeight; 
// 				    } 
				    
// 				    // 获取文档完整的高度 
// 				    function getScrollHeight() { 
// 				        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
// 				    }
				    
// 				    var _container = document.getElementById('ul_list');
// 				    // 节流函数
// 				    var throttle = function(method, context){
// 				      clearTimeout(method.tId);
// 				      method.tId = setTimeout(function(){
// 				        method.call(context);
// 				      }, 300);
// 				    }
// 				    function fetchData() {
// 						for(var i=0;i<10;i++){
// 							 addItem();
// 						}
// 				    }
// 				    window.onscroll = function() {
// 				      if (getScrollTop() + getClientHeight() == getScrollHeight()) {
// 						  console.log("ssssssssssssssssssssssss")
// 				          throttle(fetchData);
// 				      }
// 				    };