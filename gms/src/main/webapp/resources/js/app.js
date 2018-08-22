"use strict";
var app =app || {};
app = {
		init : x =>{
			alert("step1");
			app.session.context(x);
			app.onCreate();
		/*	let a = x;
			$('#login_btn').on('click',function(){
				alert('컨텍스트'+a);
			});*/
		},
		onCreate : ()=>{
			alert("step3");
			app.setContentView();
		},
		setContentView : ()=>{
			alert("step4"+app.session.path('js'));
		}
	};
app.session = {
	context : x =>{
		alert("step2"+x);
		sessionStorage.setItem('context',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('css',x+'/resources/css');
		sessionStorage.setItem('img',x+'/resources/img');
	},
	path : x=>{
		return sessionStorage.getItem(x);
	}
};
