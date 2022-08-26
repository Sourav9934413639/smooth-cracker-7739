let form = document.querySelector("form")
let userdata = JSON.parse(localStorage.getItem("userdata") )||[]
form.addEventListener("submit", function(event) {

    event.preventDefault()
let data = {

email : form.email.value,
password : form.password.value



}

if(signin(data.email, data.password)== true){
    localStorage.setItem("signin", JSON.stringify(data));
    alert("wrong password or email")
}else{
    alert("account login successfully");
    window.location.href ="index.html"
}


})

function signin(email,password){

    let filtered = userdata.filter(function(elem){

        return elem.email.value == email && elem.password.value == password
    })
    if(filtered.length > 0){
        return true
    }else{
        return false

    }

}