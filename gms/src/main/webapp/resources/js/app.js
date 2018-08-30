"use strict";
var app=app || {};
			/*app.setContentView();p =app || {};*/
var user= user || {};

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
				var form = document.getElementById('loginForm');
				form.action = app.x()+"/member/login/member/nav";
				form.method = "post";
				form.submit();
				/*location.href=app.x()+''; //1,2,3 값
*/			});
			
			$('#logout_btn').click(()=>{
				location.href=app.x()+'/member/logout';
			});
			
			$('#join_btn').click(()=>{
				location.href=app.x()+'/move/member/add';
			});
			$('#joinform_btn').click(()=>{
				alert("회원가입버튼 클릭");
				/*$('#joinForm').attr({
					action:app.x()+"/member/add",
					method:"POST"
					
				});
				submit()*/
				var form = document.getElementById('joinForm');
				form.action = app.x()+"/member/add/common/content";
				form.method = "post";
				form.submit();
			});
			
			$('#nav_home_btn').click(()=>{
				location.href=app.x()+'/member/logout';
			});

			$('#mypage_btn').click(()=>{
				location.href=app.x()+'/member/login/member/mypage';
			});
			
			$('#myPageUpdate_btn').click(()=>{
				location.href=app.x()+'/move/member/modify';
				alert(sessionStorage.getItem('userid'))
				
			});
			
			$('#myPageDelete_btn').click(()=>{
				location.href=app.x()+'/move/member/remove';
			});
			
			
			$('#delete_btn').click(()=>{
				var form = document.getElementById('deleteForm');
				var node = document.createElement('input');
				node.setAttribute('type','hidden');
				node.setAttribute('name','userid');
				node.setAttribute('id','userid');
				node.setAttribute('value',sessionStorage.getItem('userid'));
				alert(sessionStorage.getItem('userid'))
				form.appendChild(node);
				form.action = app.x()+"/member/remove";
				form.method = "post";
				form.submit();
			});
			
			$('#updateform_Btn').click(()=>{
				var form = document.getElementById('updateform');
				var node = document.createElement('input');
				node.setAttribute('type','hidden');
				node.setAttribute('name','userid');
				node.setAttribute('id','userid');
				node.setAttribute('value',sessionStorage.getItem('userid'));
				alert(sessionStorage.getItem('userid'))
				form.appendChild(node);
			 		
				form.action = app.x()+"/member/modify/member/nav";
				form.method = "post";
				form.submit();
			});
			$('#userid').text(sessionStorage.getItem('userid'));
			$('#name').text(sessionStorage.getItem('name'));
			$('#age').text(sessionStorage.getItem('age'));
			$('#gender').text(sessionStorage.getItem('gender'));
			$('#teamid').val(sessionStorage.getItem('teamid')).prop('selected',true);
			$('#roll').val(sessionStorage.getItem('roll')).prop('selected',true);
			
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
app.user=(x)=>{
	$.each(x,function(k,v){
		sessionStorage.setItem(k,v);
	});
	/*sessionStorage.setItem('userid',x.userid);
	sessionStorage.setItem('name',x.name);
	sessionStorage.setItem('age',x.age);
	sessionStorage.setItem('roll',x.roll);
	sessionStorage.setItem('gender',x.gender);
	sessionStorage.setItem('teamid',x.teamid);*/
};

user.session=x=>{
	
};