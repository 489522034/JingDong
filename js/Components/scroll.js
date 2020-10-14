class scroll{
    constructor(top_search,side_bar){
        this.top_search=top_search;
        this.side_bar=side_bar;
        this.init();
    }
    init(){
        let that=this;
        document.body.onmousewheel = function(event){
            if(document.documentElement.scrollTop>600){
                that.top_search[0].style.display="block";
            }else{
                that.top_search[0].style.display="none";
            }
            if(document.documentElement.scrollTop>640){
                that.side_bar.style.position="fixed";
                that.side_bar.style.top="70px";
                that.side_bar.style.left="1519px";
            }else{
                that.side_bar.style.position="absolute";
                that.side_bar.style.top="0px";
                that.side_bar.style.left="1226px";
            }
            // console.log(document.documentElement.scrollTop);
        }
    }
}
export {scroll};