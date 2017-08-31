define(['jquery','template','bootstrap'],function($,template){
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
		}
	})
})