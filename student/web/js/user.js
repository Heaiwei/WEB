//折叠菜单效果
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');

        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }

    var accordion = new Accordion($('#accordion'), false);
});

/*-------------------课程操作----------------------------*/

//查询课程平均分信息
function course_avg() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var url = "/student/AdminDao?action=course_avg";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//查询课程不及格率信息
function fail_rate() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var url = "/student/AdminDao?action=fail_rate";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//显示查询成绩排名信息
function show_course_ranking() {
    var result = document.getElementById("result");
    var show = "<div id='course_ranking'  class='d_form'>"
        + "<h3>请输入课程编号</h3>"
        + "<input id='course_ranking_value' type='text' autofocus='autofocus' name='cno' value placeholder='课程号'>"
        + "<input id='submit' onclick='course_ranking()' type='button' name='submit' value='查询'>"
        + "</div>";
    result.innerHTML = show;
}
//查询成绩排名信息
function course_ranking() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var Cno = document.getElementById("course_ranking_value").value;
    var url = "/student/AdminDao?action=course_ranking&cno=" + Cno;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/*-------------------------全部信息-------------------------*/

function query_all(object) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "/student/AdminDao?action=query_all_" + object, true);
    xmlhttp.send();
}

/*-------------------------修改个人信息-------------------------*/

function change_info(object) {
    var result = document.getElementById("result");
    var show = null;
    if (object == "user") {
        show = "<div id='change_user'  class='d_form'>"
            + "<h3>请输入需要修改的用户信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='username' value placeholder='修改前用户名' required>"
            + "<input type='text' autofocus='autofocus' name='password' value placeholder='修改前密码' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_username' value placeholder='用户名' required>"
            + "<input type='password' name='after_password' value placeholder='密码'>"
            + "<input id='submit' onclick='change_user()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    result.innerHTML = show;
}
//修改个人信息
function change_user() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var user = document.getElementById("change_user").getElementsByTagName("input");
    var username = user[0].value.toString();
    var password=user[1].value.toString();
    var after_username = user[2].value.toString();
    var after_password = user[3].value.toString();
    var url = "/student/AdminDao?action=change_info&username=" + username + "&after_username=" + after_username + "&after_password=" + after_password;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}