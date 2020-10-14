class carousel{
    constructor(ad_box,ad_img,point,left_btn,right_btn){
        this.ad_box=ad_box;                                 //轮播图框框
        this.ad_img=ad_img;                                     //图
        this.point=point;                                       //轮播点
        this.left_btn=left_btn;                                    //左右按钮
        this.right_btn=right_btn;
        this.img_length=ad_img.children.length;              //图片个数
        this.img_width=ad_box.offsetWidth;                   //每张图or框框的宽度
        this.pic_cur = 0;                                    //当前是第几张图
        this.timer=null;   
        this.init();
    }
    //初始化，创建点，添加点的id，添加点的点击事件
    init(){
        //根据图片数量创建轮播点
        let that=this;
        for(let i=0;i<this.img_length;i++){
            let img_li=document.createElement("li");
            img_li.className='point-rest';
            this.point.appendChild(img_li);
        }
        this.point.children[0].className='point-cur';
        //为每个轮播点取id 和 点击事件
        for(let i=0;i<this.img_length;i++){
            this.point.children[i].id="point"+i;
            this.point.children[i].onclick=function(){
                that.pic_cur=that.point.children[i].id.charAt(that.point.children[i].id.length-1);
                that.pic_cur=parseInt(that.pic_cur);
                that.ad_img.style.left=that.pic_cur*(-1016)+"px";
                that.pointFix();
            }
        }
        //左右按钮绑定点击事件
        this.right_btn.onclick=this.rightBtnClick.bind(this);
        this.left_btn.onclick=this.leftBtnClick.bind(this);
        //自动轮播
        this.timer=setInterval(this.rightBtnClick.bind(this),2500);
        this.ad_box.onmouseout=function(){
            that.timer=setInterval(that.rightBtnClick.bind(that),2500);
        }
        this.ad_box.onmouseover=function(){
            clearInterval(that.timer);
        }
    }
    // 轮播点改色方法
    pointFix(){
        for(let i=0;i<this.img_length;i++){
            if(i==this.pic_cur){
                this.point.children[i].className="point-cur";
            }else{
                this.point.children[i].className="point-rest";
            }
        }
    }
    //左右按钮
    rightBtnClick(){
        if(this.pic_cur==(this.img_length-1)){
            this.ad_img.style.left=0+"px";
            this.pic_cur=0;
        }else{
            this.ad_img.style.left=(1+this.pic_cur)*(-1016)+"px";
            this.pic_cur++;
        }
        this.pointFix();
    }
    leftBtnClick(){
        if(this.pic_cur==0){
            this.ad_img.style.left=(this.img_length-1)*(-1016)+"px";
            this.pic_cur=this.img_length-1;
        }else{
            this.ad_img.style.left=(this.pic_cur-1)*(-1016)+"px";
            this.pic_cur--;
        }
        this.pointFix();
    }

}
export {carousel};