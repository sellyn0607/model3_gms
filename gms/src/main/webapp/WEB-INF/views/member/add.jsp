<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
#user {
	margin: 150px auto;
	width: 250px;
}
</style>
	<div id="user">
		<h2>회원 가입</h2>
		<form id="joinForm"  style="border:1px solid black" name="joinForm"> 
			아이디 : <input type="text" name="userid" maxlength="10" size="9"><br>
			비밀번호 : <input type="password" name="pw" maxlength="20"size="12"> <br> 
			이름 : <input type="text" name="name" maxlength="5" size="8"><br> 
			명단 : <input type="radio" name="roll" value="팀장" />팀장
				 <input type="radio" name="roll"value="프론트개발" />프론트개발<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				 <input type="radio" name="roll"value="백단개발" /> 백단개발
				 <input type="radio" name="roll"value="민폐" />민폐 <br> 
			 팀ID : <select name="team_id">
			 		<option value="ATEAM">ATEAM</option>
					<option value="CTEAM">CTEAM</option>
					<option value="HTEAM">HTEAM</option>
					<option value="STEAM">STEAM</option>
					</select><br> 
			수강 목록 : <input type="checkbox" name="subject" value="java" checked="checked" /> Java
					<input type="checkbox" name="subject" value="JSP" /> JSP <br /> 
					<input type="checkbox" name="subject" value="PHP"> PHP 
					<input type="checkbox" name="subject" value=NodeJS /> NodeJS
					<input type="checkbox" name="subject" value="Linux" /> Linux <br /> 
					<input type="checkbox" name="subject" value="HTML" /> HTML 
					<input type="checkbox" name="subject" value="Spring" /> Spring <br /> 
			주민번호 : <input type="text" name="ssn1" maxlength="6" size="7"> -
					<input type="text" name="ssn2" maxlength="1" size="1"> <br>
				<input id="joinButt" type="button" value="회원가입">
		 </form> 
	</div>

