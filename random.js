function call(){
    var name=["deathnote","strangerthings","theforgottenarmy"];
    var fullname=["Death Note","Stranger Things","The Forgotten Army"];
    var no_item=[8,4,5];
    var k=Math.floor(Math.random()*3);
    var originalname=["Rebirth","Confrontation","Dealings","Pursuit","Tactics","Unraveling","Overcast","Glare"];
    var t=0,i;
    var j=k;
    var path="media/"+name[j]+"/";
    for(i=0;i<no_item[j];i++,t++){
        if(j==1||j==2)
            originalname[i]=" ";
document.getElementById("video"+(t+1)).poster=path+"poster1.jfif";
document.getElementById("video"+(t+1)).src=path+name[j]+(i+1)+".mkv";
document.getElementById("name"+(t+1)).innerHTML=fullname[j]+" Episode "+(i+1)+"<br>"+originalname[i];
    }
    j=0;
    while(j<no_item.length){
path="media/"+name[j]+"/";
        if(j===k)
        {j++;continue;}
    for(i=0;i<no_item[j];i++,t++){
        if(j==1||j==2)
            originalname[i]=" ";
document.getElementById("video"+(t+1)).poster=path+"poster1.jfif";
document.getElementById("video"+(t+1)).src=path+name[j]+(i+1)+".mkv";
document.getElementById("name"+(t+1)).innerHTML=fullname[j]+" Episode "+(i+1)+"<br>"+originalname[i];
    }
    j++;    
    }
}
window.onload=call();
function set(value){
var video_path=document.getElementById("video"+value).src;
    var video_poster=document.getElementById("video"+value).poster;
    var video_name=document.getElementById("name"+value).innerHTML;
localStorage.setItem("video_path",video_path);
    localStorage.setItem("video_poster",video_poster);
    localStorage.setItem("video_name",video_name);
}
