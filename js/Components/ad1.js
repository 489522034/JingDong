class ad1{
    constructor(top_list,ad_1_box){
        this.top_list=top_list;
        this.ad_1_box=ad_1_box;
        this.init();
    }
    init(){
        this.top_list.children[0].style.color="red";
        this.top_list.children[0].style.paddingBottom="5px";
        this.top_list.children[0].style.borderBottom="2px solid red";
        this.ad_1_box.children[1].style.display="block";
        for(let i=0;i<this.top_list.children.length;i++){
            let that=this;
            this.top_list.children[i].onmouseover=function(){
                for(let j=0;j<that.top_list.children.length;j++){
                    if(i==j){
                        that.top_list.children[j].style.color="red";
                        that.top_list.children[j].style.paddingBottom="5px";
                        that.top_list.children[j].style.borderBottom="2px solid red";
                        that.ad_1_box.children[j+1].style.display="block";
                    }else{
                        that.top_list.children[j].style.color="#aaaaaa";
                        that.top_list.children[j].style.borderBottom="none";
                        that.ad_1_box.children[j+1].style.display="none";
                    }
                }
            }
        }
    }
}
export {ad1};