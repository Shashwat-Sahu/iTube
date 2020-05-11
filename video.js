
function loading(){
    document.getElementById("load").style.display="block";
    document.getElementById("afterload").style.display="none";
    document.body.style.backgroundColor="#004d40";
    document.getElementById("waves").style.display="block";
    setTimeout(function(){document.getElementById("load").style.display="none";
    document.getElementById("afterload").style.display="block";
    document.getElementById("waves").style.display="none";},6000);
var re = new RegExp("username" + "=([^;]+)");
    var username=re.exec(document.cookie);
    if(username[1]!="")
    {document.getElementById("login").src="loginavatar.png";
       document.getElementById("user_name").innerHTML=username[1];
    }
    else
        document.getElementById("login_change").style.display="none";
}

    function login_change(){
       var str=document.getElementById("user_name").innerHTML; 
    if(str!="")
    document.getElementById("login_change").style.display="block";
    }
    function login_change_after(){
        document.getElementById("login_change").style.display="none";
    }

function check()
{
    if((localStorage.getItem("comment"))!="")
        {document.getElementById("form").style.display="none";}
    else{
        document.getElementById("comment").style.display="none";
    }
 document.getElementById("comment").innerHTML=localStorage.getItem("comment");
    
}


function searchit(){
    var str;
    str=localStorage.getItem("video_name");
    var string,string1,string2,string3;
    string1="Deathnote"
    string2="The Forbidden Army";
    string3="Stranger Things";
    var re=new RegExp(str,"gi");
    if(string1.search(re)>=0)
        for(var i=1;i<=3;i++){
    document.getElementById("search"+i).innerHTML=string1 +" Episode "+i;
        }
    else if(string2.search(re)>=0)
        for(var i=1;i<=3;i++){
    document.getElementById("search"+i).innerHTML=string2 +" Episode "+i;
        }
    else if(string3.search(re)>=0)
        for(var i=1;i<=3;i++){
    document.getElementById("search"+i).innerHTML=string3 +" Episode "+i;
        }
    else
        for(var i=1;i<=3;i++){
    document.getElementById("search"+i).innerHTML="No match";
        }
}

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
        document.getElementById("edit").style.display="inline-block";
        document.getElementById("send").style.display="none";
}
function edit()
{
    document.getElementById("edit").style.display="none";
    document.getElementById("comment").style.display="none";
    document.getElementById("form").style.display="inline";
    document.getElementById("send").style.display="inline-block";
document.getElementById("comment1").value=localStorage.getItem("comment");
}
window.onload=function(){
document.getElementById("video_content").src=localStorage.getItem("video_path");
document.getElementById("video_content").poster=localStorage.getItem("video_poster");
document.getElementById("title1").innerHTML=localStorage.getItem("video_name");
var path=localStorage.getItem("video_path");
    check();loading();searchit();setsidevideo();
};
function setsidevideo(){
    var string=["Deathnote","The Forbidden Army","Stranger Things"];
    var str=localStorage.getItem("video_name");
    var re=new RegExp(str,"gi");
    var no_item=[8,4,5];
    var i=str.search("episode");
    i=i+8;
    i=str[i];
    if(str.search(string[0]))
    {str="deathnote";}
    else if(str.search(string[1]))
    {str="theforgottenarmy";}
    else
    {str="strangerthings";}
    var path="media/"+name[j]+"/";
    
}