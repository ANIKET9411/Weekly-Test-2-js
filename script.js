let main=document.querySelector('.main');
let button=document.querySelector('button');
let input=document.querySelector('input');
let b=document.querySelector('b');
let text=document.querySelector('.text');

button.addEventListener("click",function(){
   
    let selecteddate=new Date(input.value);
    let cdate=new Date();
    let age=cdate.getFullYear()-selecteddate.getFullYear();
    console.log(cdate);
    if(input.value=="")
    {
        alert("Please enter your Birthdate");
    }
    else {
        if(cdate.getMonth()<selecteddate.getMonth() ||((cdate.getMonth()==selecteddate.getMonth())&& (cdate.getDate()<selecteddate.getDate())))
    {
        age--;
    }
    b.innerText=age;
}
if(age<0)
    {
        alert("Enter a Valid DOB");
        b.innerText="-";
    }
})