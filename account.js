window.onload=function(){
    var re = new RegExp("username" + "=([^;]+)");
    var username=re.exec(document.cookie);
    document.getElementById("current_username").innerHTML=username[1];
    re = new RegExp("email" + "=([^;]+)");
    var email=re.exec(document.cookie);
    email[1]=email[1].replace("%40","@");
    document.getElementById("current_email").innerHTML=email[1];
    re = new RegExp("success" + "=([^;]+)");
    var success=re.exec(document.cookie);
    if(success[1]=="success")
    {   
        document.getElementById("success").innerHTML="Successfully Updated";
    document.getElementById("success").style.display="inline-block";
    document.cookie="success=null;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}
    else if(success[1]=="unsuccessful"){
      document.getElementById("success").innerHTML="Credentials already exist!";
        document.getElementById("success").style.display="inline-block";
        document.getElementById("success").style.backgroundColor="#ff8a80";
        document.getElementById("success").style.color="#d32f2f";
        document.cookie="success=null;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
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
            document.getElementById("submit").style.cursor="not-allowed";
        }
    else{
                    var doc=document.getElementById("checking");
            doc.innerHTML="Match";
            doc.style.backgroundColor="lightgreen";
            doc.style.color="darkgreen";
        document.getElementById("submit").disabled=false;
        document.getElementById("submit").style.cursor="pointer";
    }
}