var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation(){
    let uname=document.getElementById("uname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let conpassword=document.getElementById("conpassword").value;
    if(uname.length<3){
        document.getElementById("msg").innerHTML="Username must be atleast 3 characters";

    }
    else if(uname.length>3){
        msg="";

    }
    //console.log(email.match(validRegex))
     if (email.match(validRegex)==false){
        document.getElementById("msg3").innerHTML="Username must include @";
    }
    
    else if(email.match(validRegex)==true){
        msg3="";

    }
    if(password.length<5){
        document.getElementById("msg2").innerHTML="password must be atleast 5 characaters";

    }
    else if(uname.length>5){
        msg="";

    }

}