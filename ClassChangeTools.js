/**
 * 通过改变类名来更改对象的样式
 */
//判断对象中是否含有某个类
function hasClass(obj,cn){
//使用正则表达式来判断对象中是否含有某个类
    var reg=new RegExp("\\b"+cn+"\\b");
    return  reg.test(obj.className);
};
//切换对象的类名，从而切换样式
function tollageClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }
    else addClass(obj,cn);
};
//删除对象中的某个类
function removeClass(obj,cn){
    var reg=new RegExp("\\b"+" "+cn+"\\b");
    obj.className=obj.className.replace(reg,"");
};
//向对象中添加一个类
function addClass(obj,cn){
if(!hasClass(obj,cn)){
    obj.className+=" "+cn;
  }
};
