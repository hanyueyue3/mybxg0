define(['jquery','template','util','bootstrap'],function($,template,util){
	//设置导航菜单选中
	util.setMenu(location.pathname);
	util.qs('abc');
	
	$.ajax({
		//调接口，拿数据，渲染页面
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			// console.log(data);
			var html=template('teacherTpl',{list : data.result});
			$('#teacherInfo').html(html);	

			// 查看功能，动态加载的，必须写在这个位置
			$('.preview').click(function(){
				var tcId=$(this).closest('td').attr('data-tcId');
				console.log(tcId);
				$.ajax({
					type:'get',
					url:'/api/teacher/view',
					data:{tc_id:tcId},
					dataType:'json',
					success:function(data){
						var html=template('modalTpl',data.result);
						$('#modalInfo').html(html);
						//显示弹框
						$('#teacherModal').modal();
					}
				})
			});

			//控制讲师列表中的启用注销功能
			
			$('.eod').click(function(){
				var td=$(this).closest('td');
				var tcId=td.attr('data-tcId');
				var tcStatus=td.attr('data-status');
				var that=this;
				$.ajax({
					type:'post',
					url:'/api/teacher/handle',
					data:{tc_id:tcId,tc_status:tcStatus},
					dataType:'json',
					success:function(data){
						// console.log(data);
						// 用后台数据覆盖前台页面的属性值
						td.attr('data-status',data.result.tc_status);
						//将标签内的内容进行修改
						if(data.result.tc_status==0){
							$(that).html("注销");
						}else{
							$(that).html("启用");
						}
					}
				});
			})
		}
	})
})