function validateform(){
  var name=document.sub.name.value;
  var email=document.sub.email.value;
  var subject=document.sub.subject.value;
  var message=document.sub.message.value; 
  var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
 var err=document.getElementById("error-message");
  
 if(name==""){
     err.innerHTML='The Name is Empty'
     
     return false;
}
if(name.length<5){
 err.innerHTML='Name must be Contain five Elements Please Include Fullname';
     return false;
}
if(email=="")
{
 err.innerHTML='Email is Empty';
     return false;
}  
if(regex.test(email)==false){
 err.innerHTML='Invalid Email'
 return false
}
if(subject.length<5){
 err.innerHTML='Should Contain 5 Elements';
 return false
} 
if(message.length<10){
 err.innerHTML='Should Contain 10 Words';
 return false
} 
if(message.length>100){
 err.innerHTML='Exceeds Limit';
 return false
} 
return true;

}