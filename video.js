
function check()
{
    if((localStorage.getItem("comment")).length!=0)
        {document.getElementById("form").style.display="none";}
    else{
        document.getElementById("comment").style.display="none";
    }
 document.getElementById("comment").innerHTML=localStorage.getItem("comment");
    
}
window.onload=check();
document.getElementById("video_content").src=localStorage.getItem("video_path");
document.getElementById("video_content").poster=localStorage.getItem("video_poster");
document.getElementById("title1").innerHTML=localStorage.getItem("video_name");
var path=localStorage.getItem("video_path"),i=0;


function clickclose(){
    document.getElementById("sidebar").style.display="none";
    document.getElementById("menu").style.display="none"; 
    document.getElementById("menu1").style.display="block";
    
        document.body.style.height="100%";
    document.body.style.overflow="auto"
}
function clickopen(){
    document.getElementById("sidebar").style.display="inline-block";
    document.getElementById("menu").style.display="block"; 
    document.getElementById("menu1").style.display="none";
    
        document.body.style.height="100%";
    document.body.style.overflow="hidden";  
}

function comment_entry()
    {
    var value1=document.getElementById("comment1").value;
    localStorage.setItem("comment",value1);
document.getElementById("comment").innerHTML=localStorage.getItem("comment");
    document.getElementById("form").style.display="none";
        document.getElementById("comment").style.display="block";
        document.getElementById("edit").style.display="block";
}
function edit()
{
    document.getElementById("edit").style.display="none";
    document.getElementById("comment").style.display="none";
    document.getElementById("form").style.display="block";
document.getElementById("comment1").value=localStorage.getItem("comment");
}