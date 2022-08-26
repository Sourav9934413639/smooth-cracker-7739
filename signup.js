let form = document.querySelector("form")
let userdata = JSON.parse(localStorage.getItem("userdata") )||[]
form.addEventListener("submit", function(event) {

    event.preventDefault()
let data = {

email : form.email.value,
password : form.password.value,
confirmPassword : form.password2.value


}
if(checkemail(data.email)=== true){

    userdata.push(data);
    localStorage.setItem("userdata", JSON.stringify(userdata))
    alert("jakas")
}else{
    alert("Account already exists!");
}



})
 function checkemail(){
    let filtered = userdata.filter(function(elem){
        return email === elem.email;
    })
    if(filtered.length > 0){
return false;

    }else{
        return true;
    }
 }