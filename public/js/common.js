define(['jquery','template','cookie'],function($,template){
    // NProgress.start();
    // NProgress.done();
    
    // 实现左侧菜单的折叠展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    // 实现退出功能
    $('#logoutBtn').click(function(){
        // console.log(123);
        $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    location.href='/main/login'
                }
            }
        })
        return false;
    });

    //验证是否登录
    //$.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
    var seesionId = $.cookie('PHPSESSID');
    // console.log(seesionId);
    if(!seesionId && location.pathname!='/main/login'){
        location.href='/main/login';
    }

    //获取用户登陆信息，并填充页面
    var cookie = $.cookie('loginInfo');
    // console.log(cookie);
    var loginInfo = cookie?JSON.parse(cookie):{};
    // console.log(loginInfo);
    // var loginInfo=JSON.parse($.cookie('loginInfo'));
    // $('.profile img').attr('src',loginInfo.tc_avatar);
    // $('.profile h4').html(loginInfo.tc_name);
    
    var tpl='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
    var html=template.render(tpl,loginInfo);
    $('#profileId').html(html);
});


	

	