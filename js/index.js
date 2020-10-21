import {carousel} from './Components/carousel.js';
import {ad1} from './Components/ad1.js';
import {scroll} from './Components/scroll.js';

//carousel
const ad_box = document.getElementById("ad-box");   //轮播图框框
const ad_img=document.getElementById("img-box");    //图
const point=document.getElementById("point-box");   //轮播点
const left_btn=document.getElementById("left");       //左按钮
const right_btn=document.getElementById("right");     //右按钮
//advertisement 1
const top_list=document.getElementById("ad1-top-list"); //ad1
const ad_1_box=document.getElementById("ad-1-box");  //ad1
//side bar and search box change when scroll
const top_search=document.getElementsByClassName("top-search");
const side_bar=document.getElementById("side-bar");

let carousel1=new carousel(ad_box,ad_img,point,left_btn,right_btn); //轮播
let ad11=new ad1(top_list,ad_1_box);   //广告1
let scroll1=new scroll(top_search,side_bar);  //下滑搜索框和边栏移动

if($.cookie("login")!=undefined){
    alert("已登录");
}

