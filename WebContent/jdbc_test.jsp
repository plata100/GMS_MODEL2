<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.gms.web.constant.DB, java.sql.*"%>

<%
	Class.forName(DB.MARIADB_DRIVER);
	Connection conn=DriverManager.getConnection(DB.MARIADB_URL,DB.USERNAME,DB.PASSWORD);
	Statement stmt=conn.createStatement();
	String sql="SELECT * FROM Member WHERE member_id='glass'";
	ResultSet rs=stmt.executeQuery(sql);
	String findName="";
	if(rs.next()){
		findName=rs.getString("name");
	}
%>
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<h1>Hello <%=findName%> !</h1>
</body>
</html>






