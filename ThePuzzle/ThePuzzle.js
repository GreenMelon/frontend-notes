function over(e) {
    e.preventDefault();
}
//抓起，记录一下，当前被抓起的元素的Id
function drag(e) {
    //获取ID
    var id = e.target.id;//被抓起元素的ID值
    //传输数据
    e.dataTransfer.setData("id",id);
}
//f放下
function drop(e) {
    //获取被抓取的元素id
    var takeId = e.dataTransfer.getData("id");
    //被放置的位置的div的id
    var putId = e.target.id;
    //获取被抓取的元素
    var take = document.getElementById(takeId);
    //获取被替换的div
    var  put = document.getElementById(putId);
    var takeParent = take.parentNode;
    var putParent = put.parentNode;
    //互换
    takeParent.appendChild(put);
    putParent.appendChild(take);
}
//开始游戏时。打乱图片位置
function ckeckUpset() {
    var tus = document.getElementsByClassName('a1');
    for(var i=0;i<100;i++) {
        var m = parseInt(Math.random()*54);
        var n = parseInt(Math.random()*54);

        var tusmp = tus[m].parentNode;
        var tusnp = tus[n].parentNode;

        tusmp.appendChild(tus[n]);
        tusnp.appendChild(tus[m]);
    }
}
//重新开始，还原图片位置
function checkAgain() {
    window.location.reload();
}
//更换图片
function checkReplace() {
    var isImg = document.getElementsByClassName('a1');
    for(var i=0; i<isImg.length;i++) {
        isImg[i].style.backgroundImage="url(aaaa.png)";
    }
}