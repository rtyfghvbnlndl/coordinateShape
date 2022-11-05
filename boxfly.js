//document.body.clientWidth
var width=1024
//输入格子数，计算各边格子个数
function calX(box){
    var x=4,y,w=0
    while(w<box){
        w=0
        y=Math.floor(x/4*3)
        x1=x
        y1=y
        do{
            w+=2*(x1+y1)-5
            x1-=4
            y1-=4
        }while(x1>=7&&y1>=7)
        ++x
    console.log(w,x-1,y)
    }
    return [x-1,y]

}
//保留两位小数，只舍不入
function float2(x){
    x=Math.floor(x*100)/100
    return x
}
//计算css参数
function calsize(x,y,wei){
    pad=float2(3*wei/100)
    bor=float2(3*wei/100)
    perX=float2(wei/x-(pad/x+bor/x)*(x+1))
    hei=Math.floor(wei/4*3)
    perY=float2(hei/y-(pad/y+bor/y)*(y+1))
    var dict={
        "pad":pad,
        "bor":bor,
        "perX":perX,
        "perY":perY
    }
    return dict
}
//生成格子
function setBox(x,y){
    for(a=1;a<=x;++a){
        for(b=i;b<=y;++b){
            Document.getElementById("boxs").innerHtml+=`<div id="${a}_${b}"></div>`
        }
    }
}
//给格子编号
function boxCode(x,y){
    var boxCodes={}
    x1=x
    y1=y
    var n=1,p=0
    do{console.log(p)
        for(i=x1;i>1;--i){
            a=i+2*p
            b=y1+2*p
            boxCodes[`${a}_${b}`]=n
            ++n
        }
        for(i=y1;i>1;--i){
            a=1+2*p
            b=i+2*p
            boxCodes[`${a}_${b}`]=n
            ++n
        }
        for(i=1;i<x1;++i){
            a=i+2*p
            b=1+2*p
            boxCodes[`${a}_${b}`]=n
            ++n
        }
        for(i=1;i<y1-1;++i){
            a=x1+2*p
            b=i+2*p
            boxCodes[`${a}_${b}`]=n
            ++n
        }
        x1-=4
        y1-=4
        ++p
    }while(x1>=7&&y1>=7)
    return boxCodes
    
}
//调试
a=calX(223)
console.log(a)
b=calsize(a[0],a[1],1024)
console.log(b)
c=boxCode(a[0],a[1])
console.log(c)