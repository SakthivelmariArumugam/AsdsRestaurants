const searchicon1=document.querySelector("#searchicon1");
const srchicno1=document.querySelector("#srchicon1");
const search1=document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
  search1.style.display='flex';
  searchicon1.style.display='none';
})

const searchicon2=document.querySelector("#searchicon2");
const srchicno2=document.querySelector("#srchicon2");
const search2=document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
  search2.style.display='flex';
  searchicon2.style.display='none';
})
const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');
bar.addEventListener('click',function(){
  setTimeout(()=>{
      cross.style.display='block';
  },200)
  headerbar.style.right='0%'
})
cross.addEventListener('click',function(){
  cross.style.display='none';
  headerbar.style.right='-100%';
}
)
var productContainer = document.getElementById("foods");
var search=document.getElementById("search");
var productlist=productContainer.getElementsByClassName("item");

search.addEventListener("keyup",function(){
  var enteredValue=event.target.value.toUpperCase();

  for(count=0;count<productlist.length;count=count+1)
  {
    var productname=productlist[count].querySelector("p").textContent;
    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
      productlist[count].style.display="none";
    }
    else{
      productlist[count].style.display="block";
    }
  }
})