function clickclose(){
    document.getElementById("sidebar").style.display="none";
    document.getElementById("menu").style.display="none"; 
    document.getElementById("menu1").style.display="block";
    document.getElementById("main").style.width="100%";
}
function clickopen(){
    document.getElementById("sidebar").style.display="inline-block";
    document.getElementById("menu").style.display="block"; 
    document.getElementById("menu1").style.display="none";
    document.getElementById("main").style.width="85%";
    
}
function searchit(){
    var str;
    document.getElementById("suggestion").style.display="block";
    str=document.getElementById("searching").value;
    if(str=="")
    document.getElementById("suggestion").style.display="none";
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
window.onload=loading();
    function login_change(){
       var str=document.getElementById("user_name").innerHTML; 
    if(str!="")
    document.getElementById("login_change").style.display="block";
    }
    function login_change_after(){
        document.getElementById("login_change").style.display="none";
    }
