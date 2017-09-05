define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region','validate','form','status'],function($,template,util,CK){
	//菜单栏选中
	util.setMenu('/main/index');
	//调用后台接口获取所有的个人信息
	$.ajax({
		type:'get',
		url:'/api/teacher/profile',
		dataType:'json',
		success:function(data){
			// console.log(data);
			//将后台数据填充到前端模板中，渲染页面
			var html=template('settingTpl',data.result);
			$('#settingInfo').html(html);
			//处理头像上传
			// $('#upfile').uploadify({
			// 	width : 120,
			// 	height : 120,
			// 	buttonText : '',
			// 	itemTemplate : '<span></span>',
			// 	fileObjName : 'tc_avatar',
			// 	swf : '/public/assets/uploadify/uploadify.swf',
			// 	uploader : '/api/uploader/avatar',
			// 	onUploadSuccess : function(f,data){
			// 		var data = JSON.parse(data);
			// 		console.log(data);
		 //        // 修改图片的URL地址
		 //        // $('.preview img').attr('src',data.result.path); 
		 //    }
			// });
			// 处理头像上传
      $('#upfile').uploadify({
        width : 120,
        height : 120,
        buttonText : '',
        itemTemplate : '<span></span>',
        fileObjName : 'tc_avatar',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        onUploadSuccess : function(f,data){
            console.log(data);
          var data = JSON.parse(data);
          // 修改图片的URL地址
          $('.preview img').attr('src',data.result.path);
        }
      });
			//省市县三级联动
			$('#pcd').region({
				url:'/public/assets/jquery-region/region.json'
			});
			//富文本
			// CKEDITOR.replace('editor')
			CKEDITOR.replace('editor',{
		        toolbarGroups : [
		          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
		        ]
     		});
     		//保存提交功能
     		$('#settingForm').validate({
     			sendForm:false,
     			valid:function(){
     				//同步富文本信息到textarea
     				for(var instance in CKEDITOR.instances){
     					CKEDITOR.instances[instance].updateElement();
     				}
     				//获取省市县名称
     				var p=$('#p').find('oprion:slected').text();
     				var c=$('#c').find('oprion:slected').text();
     				var d=$('#d').find('oprion:slected').text();
     				var hometown=p+'|'+c+'|'+d;
     				//验证通过（在这省略验证），提交表单
     				$(this).ajaxSubmit({
     					type:'post',
     					url:'/api/teacher/modify',
     					data:{tc_hometown:hometown},
     					dataType:'json',
     					success:function(data){
     						// console.log(data);
     						if(data.code==200){
     							location.reload();
     					}
     				}
     			});
     		}
     	});
		}
	});
});


