//对象移动动画方法，obj是要执行移动操作的对象，target是移动的目标位置，speed是移动的速度
function move(obj,dec,target,speed){
    var timr1=setInterval(function(){
        var newValue
        if (target<0&&speed>0) {
            speed=-speed;
        }
        if(dec=="left"||dec=="right"){
             newValue=obj.offsetLeft+speed;
        }
        else if (dec=="top"||dec=="bottom") {
            newValue=obj.offsetTop;
        }
        if(newValue>target) newValue=target;
        if (dec=="left"||dec=="right") {
            obj.style.left=newValue+"px";
        }
        else if(dec=="top"||dec=="bottom"){
            obj.style.top=newValue+"px";
        }
        if(obj.offsetLeft==target||obj.offsetTop==target){
            clearInterval(timr1);
        }
    },100);
  function moveFun(obj,dec,target,speed){
      move(obj,dec,target,speed);
  };
};