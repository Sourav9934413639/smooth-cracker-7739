let form=document.querySelector("form");
let signup=JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        
        email:form.email.value,
        password:form.password.value,
        confirm:form.password2.value
    }
    // console.log(obj)
    if(obj.password!=obj.confirm)
    {
        alert("enter password and confirm password same")
    }
    else{
   if(obj.email==""|| obj.confirm==""|| obj.password=="")
   {
    alert("fill empty fileds")
   }
   else{
    alert("successfully created account")
    window.location.href ="signin.html"
    signup.push(obj);
    localStorage.setItem("signup", JSON.stringify(signup));
   }
}

})