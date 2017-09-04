require.config({
  baseUrl:'/public/assets',
  paths:{
  	jquery : 'jquery/jquery.min',
  	cookie:'jquery-cookie/jquery.cookie',
  	template:'artTemplate/template-web',
  	bootstrap:'bootstrap/js/bootstrap.min',
  	datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
  	language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
  	validate:'validate/jquery-validate.min',
    form:'jquery-form/jquery.form',
  	uploadify:'uploadify/jquery.uploadify.min',
    region:'jquery-region/jquery.region',
    ckeditor:'ckeditor/ckeditor',
  	common : '../js/common',
  	login : '../js/login',
  	teacherlist:'../js/teacher-list',
  	teacheradd:'../js/teacher-add',
  	util:'../js/util',
  	index:'../js/index',
  	settings:'../js/settings'
  },
  shim:{// 把非标准模块转化为标准模块
  	bootstrap:{
  		deps:['jquery']
  	},
  	language:{
  		deps:['jquery','datepicker']
  	},
  	validate:{
  		deps:['jquery']
  	},
  	uploadify:{
  		deps:['jquery']
  	},
  	ckeditor:{
  		exports:'CKEDITOR'
  	}
  }
});