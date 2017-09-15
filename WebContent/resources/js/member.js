/**
 * member javaScript
 */
var app=(function(){
	var init=function(ctx) {
		session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/home.do";
	};
	var setContentView=function(){
		
	};
	var ctx=function(){
		return session.getPath('ctx');
	};
	var js=function(){
		return session.getPath('js');
	};
	var img=function(){
		return session.getPath('img');
	};
	var css=function(){
		return session.getPath('css');
	};
	return {
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css,
		onCreate : onCreate
	};
})();

var session=(function(){
	var init=function(ctx) {
		//보안을 위해 로그인할 때 접근경로를 줌
		sessionStorage.setItem('ctx', ctx);
		sessionStorage.setItem('js', ctx+'/resources/js');
		sessionStorage.setItem('img', ctx+'/resources/img');
		sessionStorage.setItem('css', ctx+'/resources/css');
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	//클로저 : 객체를 return
	return {
		init : init,
		getPath : getPath
	}; 
})();

var memberDetail=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$("#updateBtn").on('click', function(){
			sessionStorage.setItem('id', $('#detail_id').text());
			sessionStorage.setItem('name', $('#detail_name').text());
			sessionStorage.setItem('phone', $('#detail_phone').text());
			sessionStorage.setItem('email', $('#detail_email').text());
			controller.moveTo('member', 'member_update')
		});
	};
	var setContentView=function(){
		
	};
	var detailStudent=function(x){
		alert(x);
	}
	return {
		init : init,
		detailStudent : detailStudent
	};
})();

var memberUpdate=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		var id=sessionStorage.getItem('id');
		var name=sessionStorage.getItem('name');
		var phone=sessionStorage.getItem('phone');
		var email=sessionStorage.getItem('email');
		var password=$('#confirm').val();
		$('#name').attr('placeholder',name);
		$('#phone').attr('placeholder',phone);
		$('#email').attr('placeholder',email);
		$('#confirmBtn').on('click', function(){
			alert('수정할 아이디 : '+id);
			alert('수정할 이메일 : '+$('#email').val());
			controller.updateStudent(id,$('#email').val());
		});
	};
	return {
		init : init
	};
})();

var controller=(function(){
	var init=function(){
		
	};
	var logout=function(dir,page) {
		location.href=app.ctx()+"/"+dir+".do?action=logout&page="+page;
	};
	var moveTo=function(dir, page) {
		location.href=app.ctx()+"/"+dir+".do?action=move&page="+page;
	};
	var deleteTarget=function(target){
		prompt(target+'의 ID?');
	};
	var list=function(dir, page, pageNumber) {
		location.href=app.ctx()+"/"+dir+".do?action=list&page="+page+"&pageNumber="+pageNumber;
	};
	var updateStudent=function(id,email){
		location.href=app.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function (id){
		alert('삭제할 id : '+id);
		location.href=app.ctx()+"/member.do?action=delete&page=member_list&id="+id;
	};
	var detailStudent=function(id){
		alert('조회할 id : '+id);
		location.href=app.ctx()+"/member.do?action=detail&page=member_detail&id="+id;
	};
	var searchStudent=function(){
		var search=document.getElementById('search').value;
		location.href=app.ctx()+"/member.do?action=search&page=member_list&search="+search;
	};
	return {
		init : init,
		logout : logout,
		moveTo : moveTo,
		deleteTarget : deleteTarget,
		list : list,
		updateStudent : updateStudent,
		deleteStudent : deleteStudent,
		detailStudent : detailStudent,
		searchStudent : searchStudent
	};
})();

var navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		//setContentView가 먼저 작동한 다음에 부여
		$(".dropdown-menu li").eq(0).on('click', function(){
			controller.moveTo('member', 'member_add');
		});
		$(".dropdown-menu li").eq(1).on('click', function(){
			controller.list('member','member_list','1');
		});
		$(".dropdown-menu li").eq(2).on('click', function(){
			controller.detailStudent(prompt('조회 ID'));
		});
		$(".dropdown-menu li").eq(3).attr("role", "separator");
		$(".dropdown-menu li").eq(3).addClass("divider");
		$(".dropdown-menu li").eq(4).on('click', function(){
			controller.deleteTarget('학생');
		});
		
		$("#logout").attr("style", "color:white");
		$("#logout").on('click', function(){
			controller.logout('common','home');
		});
	};
	var setContentView=function(){
		var $u1=$("#navbar_ul_stu");
		var $u2=$("#navbar_ul_grade");
		var $u3=$("#navbar_ul_board");
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
	};
	return {
		init : init
	};
})();

var home=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();

var main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group li').eq(0).on('click', function(){
			controller.moveTo('member','member_add');
		});
		$('.list-group li').eq(1).on('click', function(){
			controller.list('member','member_list','1');
		});
		$('.list-group li').eq(2).on('click', function(){
			controller.detailStudent(prompt('조회 ID'));
		});
		$('.list-group li').eq(3).on('click', function(){
			controller.deleteTarget('학생');
		});
	};
	var setContentView=function(){
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
	};
	return {
		init : init
	};
})();

var member=(function(){
	var init=function(){
		$('#loginBtn').on('click', function(){
			alert('로그인 fx 실행');
			if($('#input_id').val()===""){
				alert('ID 를 입력해 주세요');
				return false;
			}
			if($('#input_pass').val()===""){
				alert('PASS 를 입력해 주세요');
				return false;
			}
			$('#login_box').attr('action', app.ctx()+"/common.do");
			$('#login_box').attr('method', 'post');
			return true;
		});
	};
	return {
		init : init
	};
})();