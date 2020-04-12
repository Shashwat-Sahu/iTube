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
