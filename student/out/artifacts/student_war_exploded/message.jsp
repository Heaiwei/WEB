<%@page import="bean.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset=UTF-8>
	<title>错误信息</title>
	<link rel="stylesheet" type="text/css" href="css/message.css">
	<link rel="shortcut icon"  href="images/study.gif">
</head>
<body>
	<main>
		<div class="message">
			<div class="left">
			<%
				//获取提示信息
				String info = (String) request.getAttribute("info");
				//如果提示信息不为空，则输出
				if(info != null){
			%>
				<h3><%=info%></h3>
			<%
				}
				//获取登录成功的用户信息
				User user = (User) session.getAttribute("user");
				//判断用户是否登录
				if(user != null){
					
				}else{
					//out.print("<script>alert('对不起！您还未登录！');</script>");
			%>
				<p><%="对不起！您还未登录！"%></p>
			<%
				}	
			%>
			</div>
			<div class="right">
				<a class="relogin" href="login.html">请点击此处重新进行登录</a>
			</div>
		</div>
	</main>
	
	<footer>
		<div class="info">
				<ul>
					<a href="#"><li>学生信息管理系统</li></a>
				</ul>
			</div>
			<div class="copyright">
				<a href="https://github.com/Heaiwei/">HAW</a>
			</div>
	</footer>
</body>
</html>