document.addEventListener("DOMContentLoaded",function(){
    let pass = document.querySelector("#password").value;
    let pass2 = document.querySelector("#confirmPassword").value;
    let error = document.querySelector("#error");

    if(pass == "" || pass2 == "")
        error.innerHTML = "*Fields are empty"

    if(pass == pass2){
        error.innerHTML = "";
    }else{
        error.innerHTML = "*Passwords do not match"
    }
})