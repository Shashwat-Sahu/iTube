function slide(i)
        {
                document.getElementById("image").src="gif"+(i)+".gif";
            document.getElementById("text"+i).style.display="block";
            i=2;
                     setInterval(function(){
                         document.getElementById("text"+i).style.display="block";
                            for(var j=1;j<4;j++)
                                {
                                    if(j==i)
                                        continue;
                                    else
                                    document.getElementById("text"+j).style.display="none";
                                }
                             document.getElementById("image").src="gif"+(i++)+".gif";
                     if(i==4)
                     i=1;}
                     ,2000);
                    
                
        }
        window.onload=slide(1);
    function slideblock(){
        var elem1=document.getElementById("new_right");
        var elem2=document.getElementById("newleft");
        document.getElementById("left").style.display="none";
        document.getElementById("right").style.display="none";
        elem1.style.display="inline-block";
        elem2.style.display="inline-block";
        var lefting=50;
        var righty=20;
        var id=setInterval(frame,20);
        function frame(){
            if(lefting==20&&righty==50)
            {
                clearInterval(id);
            }
            else
               { lefting--;
                righty++;
                   elem1.style.left=lefting+"%";
                elem2.style.left=righty+"%";
               }
        }
        document.getElementById("right").style.left="20%";
        document.getElementById("left").style.left="50%";
        slide1(1);
        function slide1(i)
        {

                document.getElementById("image1").src="gif"+(i)+".gif";
            document.getElementById("text"+i+"1").style.display="block";
            i=2;
                     setInterval(function(){
                         document.getElementById("text"+i+"1").style.display="block";
                            for(var j=1;j<4;j++)
                                {
                                    if(j==i)
                                        continue;
                                    else
                                    document.getElementById("text"+j+"1").style.display="none";
                                }
                             document.getElementById("image1").src="gif"+(i++)+".gif";
                     if(i==4)
                     i=1;}
                     ,2000);
                    
                
        }
    }
function slideblock1(){
    var elem1=document.getElementById("right");
        var elem2=document.getElementById("left");
        document.getElementById("newleft").style.display="none";
        document.getElementById("new_right").style.display="none";
        elem1.style.display="inline-block";
        elem2.style.display="inline-block";
        var lefting=50;
        var righty=20;
        var id=setInterval(frame,20);
        function frame(){
            if(lefting==20&&righty==50)
            {
                clearInterval(id);
            }
            else
               { lefting--;
                righty++;
                   elem2.style.left=lefting+"%";
                elem1.style.left=righty+"%";
               }
        }
}
function validate(){
    var str1=document.getElementById("pass").value;
    var str2=document.getElementById("repass").value;
    if(str1!=str2)
        {
            var doc=document.getElementById("checking");
            doc.innerHTML="Do not match";
            doc.style.backgroundColor="#ff8a80";
            doc.style.color="#d32f2f";
            document.getElementById("submit").disabled=true;
        }
    else{
                    var doc=document.getElementById("checking");
            doc.innerHTML="Match";
            doc.style.backgroundColor="lightgreen";
            doc.style.color="darkgreen";
        document.getElementById("submit").disabled=false;
    }
}
