var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation() {
    let uname = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conpassword = document.getElementById("conpassword").value;
    if (uname.length < 3) {
        document.getElementById("msg").innerHTML = "Username must be atleast 3 characters";
    } else if (uname.length > 3) {
        msg.innerHTML = "";
    }
    if (email.match(validRegex) == null) {
        document.getElementById("msg3").innerHTML = "must be in the format of email";
    } else if (email.match(validRegex)) {
        msg3.innerHTML = "";
    }
    if (password.length < 5) {
        document.getElementById("msg2").innerHTML = "password must be atleast 5 characaters";

    } else if (uname.length > 5) {
        msg.innerHTML="";

    }
    if(password!=conpassword){
        document.getElementById("msg4").innerHTML = "password not matched";
    }else if (password==conpassword) {
        msg4.innerHTML="";

    }
    

}