"use strict";
var app=app || {};
			/*app.setContentView();p =app || {};*/
app = {
		init : x =>{
			console.log("step1");
			app.session.context(x);
			app.onCreate();
		/*	let a = x;
			$('#login_btn').on('click',function(){
				alert('컨텍스트'+a);
			});*/
		},
		onCreate : ()=>{
			console.log("step3");
			app.setContentView();
			$('#login_btn').click(()=>{
				location.href=app.x()+'/move/member/login';
			});
			$('#loginForm_Btn').click(()=>{
				location.href=app.x()+'/member/login/member/nav'; //1,2,3 값
			});
			
			$('#logout_btn').click(()=>{
				location.href=app.x()+'/member/logout';
			});
			
			$('#join_btn').click(()=>{
				location.href=app.x()+'/move/member/add';
			});
			$('#joinform_btn').click(()=>{
				location.href=app.x()+'/move/member/login';
			});
			
			$('#nav_home_btn').click(()=>{
				location.href=app.x()+'/member/logout';
			});
		},
		
		setContentView : ()=>{
			console.log("step4"+app.j());
		}
	};
app.session = {
	context : x =>{
		console.log("step2"+x);
		sessionStorage.setItem('context',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('css',x+'/resources/css');
		sessionStorage.setItem('img',x+'/resources/img');
	},
	path : x=>{
		return sessionStorage.getItem(x);
	}
};
app.x= ()=>{
	return app.session.path('context');
};
app.j= ()=>{
	return app.session.path('js');
};
app.c= ()=>{
	return app.session.path('css');
};
app.i= ()=>{
	return app.session.path('img');
};
