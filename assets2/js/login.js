require(["config"],function(){
	require(["zepto"],function($){
		require(["tap"],function(){
			$(function(){
				$("#sbmt").on("tap",function(event)){
					event.preventDefault();
					var params={};
					params.username=$('.loginNum').val().trim();
					params.pwd=$('.password').val().trim();
					$.post('/api/login',params,function(res){
						if(res.code==0){
							alert("登录成功");
							location="index.html"
						}else{
							alert("登录失败");
							return
						}
					})
				}
			})
		})
	})
})