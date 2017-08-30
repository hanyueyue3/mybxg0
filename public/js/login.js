define(['jquery','cookie'],function($){
	//实现登陆功能
  $('#loginBtn').click(function(){
  	$.ajax({
  		type:'post',
  		url:'/api/login',
  		data:$('#loginForm').serialize(),
  		success:function(data){
  			console.log(data);
  			if(data.code==200){
  				//将login页面的data数据通过cookie传给index页面（common.js中使用）
  				$.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
  				location.href='/main/index';
  			}else{
  				alert('用户名或者密码错误');
  			}
  		}
  	});
  	  return false;
  })
});


