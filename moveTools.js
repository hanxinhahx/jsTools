//对象移动动画方法，obj是要执行移动操作的对象，target是移动的目标位置，speed是移动的速度
function move(obj,dec,target,speed){
    var timr1=setInterval(function(){
        var newValue
        if (target<0&&speed>0) {
            speed=-speed;
        }
        if(dec=="x"){
             newValue=obj.offsetLeft+speed;
        }
        else if (dec=="y") {
            newValue=obj.offsetTop+speed;
        }
        if(newValue>target) newValue=target;
        if (dec=="x") {
            obj.style.left=newValue+"px";
        }
        else if(dec=="y"){
            obj.style.top=newValue+"px";
        }
        if(obj.offsetLeft==target||obj.offsetTop==target){
            clearInterval(timr1);
        }
    },100);
};
function moveFun(obj,dec,target,speed){
    move(obj,dec,target,speed);
};