let form=document.querySelector("form");
let signup=JSON.parse(localStorage.getItem("signup")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(signup.length===0)
    {
        alert("No Data");
        return;
    }
    let obj={
        email:form.email.value,
        password:form.password.value,
    }
    let loginaccess=false;
   signup.forEach(function(elem){
    if(elem.email===obj.email && elem.password===obj.password){
        loginaccess=true;
        localStorage.setItem("login",JSON.stringify(elem));
        alert("login Success");
        window.location.href="index.html";
    }
   })
   if(loginaccess===false)
   {
    alert("Invalid Data")
   }
})