
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<!doctype html>
<html lang="en">
<jsp:include page="../common/head.jsp" />
<body>
<div id="wrapper">
	<div id="header">
		<jsp:include page="titleBox.jsp"/>
		<div id="Login-box">
			&nbsp;&nbsp;
		</div>
		
	</div> <!-- header end --><jsp:include page="../common/menuBox.jsp"/>
	<jsp:include page="contentBox.jsp" /> <!-- 멤버 서치로 링크걸어줬음  -->
	<jsp:include page="../common/footer.jsp" />
</div>
</body>
</html>