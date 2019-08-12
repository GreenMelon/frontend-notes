//会员名 获得焦点时触发事件
function tipName() {
    var userName = document.regForm.userName.value;
    if(userName=="") {
        document.getElementById("nameMsg").innerHTML="*用户名为4-16个字符，可以包含字母数字下划线"
    }
}
//会员名失去焦点时触发事件
function checkUserName() {
    var userName =document.regForm.userName.value;
    var msg = document.getElementById("nameMsg");
    msg.style.color="red";
    if(userName=="") {
        msg.innerHTML="用户名不能为空";
        return false;
    }
    var input =/^\w{4,16}$/;
    if(!input.test(userName)){
        msg.innerHTML='用户名为4-16个字符，可以包含字母数字下划线';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//密码 失去焦点时触发事件
function checkUserPwd() {
    var userPwd =document.regForm.userPwd.value;
    var msg = document.getElementById('pwdMsg');
    msg.style.color='red';
    if(userPwd=='') {
        msg.innerHTML='请输入密码';
        return false;
    }
    if(userPwd.length<6) {
        msg.innerHTML='密码不能少于6位';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//重复密码 失去焦点时触发事件
function checkReuserPwd() {
    var userPwd = document.regForm.userPwd.value;
    var reuserPwd = document.regForm.reuserPwd.value;
    var msg = document.getElementById('repwdMsg');
    msg.style.color='red';
    if(reuserPwd==''){
        msg.innerHTML='请再次输入密码';
        return false;
    }
    if(userPwd!=reuserPwd) {
        msg.innerHTML='两次输入密码不一致';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//邮箱 失去焦点时触发事件
function checkEmail() {
    var email = document.regForm.email.value;
    var msg = document.getElementById('emailMsg');
    msg.style.color='red';
    if(email=='') {
        msg.innerHTML='邮箱不能为空';
        return false;
    }
    var input= /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!input.test(email)){
        msg.innerHTML='请输入正确的邮箱格式';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//姓名失去焦点时触发事件
function checkrealName() {
    var realName = document.regForm.realName.value;
    var msg = document.getElementById('realNameMsg');
    msg.style.color='red';
    if(realName=='') {
        msg.innerHTML='姓名不能为空';
        return false;
    }
    var input=/^[\u2E80-\u9FFF]{2,4}$/;
    if(!input.test(realName)){
        msg.innerHTML='请输入正确的姓名';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//身份证失去焦点时触发事件
function checkIdcard() {
    var idCard = document.regForm.idCard.value;
    var msg = document.getElementById("idCardMsg");
    msg.style.color='red';
    if(idCard=='') {
        msg.innerHTML='身份证号码不能为空';
        return false;
    }
    var input =/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
    if(!input.test(idCard)) {
        msg.innerHTML='请输入正确的身份证号码';
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//手机号 失去焦点时触发事件
function checkPhone() {
    var phone = document.regForm.phone.value;
    var msg = document.getElementById("phoneMsg");
    msg.style.color="red";
    if(phone=='') {
        msg.innerHTML="手机号码不能为空";
        return false;
    }
    var input=/^1[3|4|5|7|8][0-9]\d{8}$/;
    if(!input.test(phone)) {
        msg.innerHTML="请输入正确的手机号码";
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//固定电话 失去焦点时触发事件
function checkRephone() {
    var rePhone = document.regForm.rePhone.value;
    var msg = document.getElementById("rePhonemsg");
    msg.style.color="red";
    if(rePhone=='') {
        msg.innerHTML="固定电话不能为空";
        return false;
    }
    var input = /^0[1-9]{2,3}-[1-9]\d{5,7}$/;
    if(!input.test(rePhone)) {
        msg.innerHTML="请输入正确的固定电话，格式为0XXX-XXXXXXX";
        return false;
    }
    msg.innerHTML='√';
    msg.style.color='green';
    return true;
}
//个人兴趣 失去焦点时触发事件
function checkUserLikes() {
    var likes = document.getElementsByName('UserLikes');
    likeMsg.style.color='red';
    for(var i=0;i<likes.length;i++){
        if(likes[i].checked) {
            likeMsg.innerHTML='√';
            likeMsg.style.color='green';
            return true;
        }
        likeMsg.innerHTML='请选择个人兴趣';
        return false;
    }
}
//全选按钮点击效果
function selectAll() {
    var checkAll = document.regForm.checkAll;
    var likes = document.getElementsByName("userLikes");
    for(var i=0;i<likes.length;i++) {
        likes[i].checked=checkAll.checked;
    }
}
//用户协议点击效果
function checkUserAgreement() {
   if(UserAgreement.checked){
        UserAgreementMsg.innerHTML='√';
        UserAgreementMsg.style.color='green';
        return true;
   }
   else{
        UserAgreementMsg.innerHTML='同意协议才可注册';
        UserAgreementMsg.style.color='red';
        return false;
   }
}
//个人兴趣选中后显示√
// function checkClickOnThe() {
//     if(ClickOnThe.checked){
//         likeMsg.innerHTML="√";
//         likeMsg.style.color='green';
//     }
// }
function checkForm() {
    if(checkUserName()&&checkUserPwd()&&checkReuserPwd()&&checkEmail()&&checkrealName()&&
    checkIdcard()&&checkPhone()&&checkRephone()&&checkUserLikes()&&checkUserAgreement()) {
        return true;
    }
        return false;
}