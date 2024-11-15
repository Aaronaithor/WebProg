function isPasswordEqual(){
    let pass = document.getElementById("Password");
    let pass2 = document.getElementById("confirmPassword");
    let error = document.getElementById("error");

    if(pass.value == pass2.value){
        return true;
    }else{
        pass.style = "border: 1px solid rgb(91, 44, 44)";
        pass2.style = "border: 1px solid rgb(91, 44, 44)";
        error.innerHTML = "*Passwords do not match";
        return false;
    }
}

