function control(){
    if(myfunction()){
        window.location.replace("index.html");
    }   
    else{
        return myfunction();
    }
}

function myfunction(){
    var x,y;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("Email").value;
    var fname=document.getElementById("firstname").value;
    var pass=document.getElementById("pass").value;
    var country=document.getElementById("country").value;
    var address=document.getElementById("add").value;
    var conpass=document.getElementById("pass1").value;
    var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})$/;
    
    if(email=="")
    {
        document.getElementById("message1").innerHTML="**Enter Your Email Id";
        return false;
    }
    if (!regx.test(email))
    {
        document.getElementById("message1").innerHTML="** Invalid Email Id";
        
    }
    
    if(pass=="")
    {
        document.getElementById("message2").innerHTML="**Please Enter The Password";
        return false;
    }
    if(pass.length<5 || pass.length>20)
    {
        document.getElementById("message2").innerHTML="**The Password Must Contain Charcters Between 2 And 20";
    }
    if(conpass=="")
    {
        document.getElementById("message4").innerHTML="**Please Enter The Confirmation Password";
        return false;
    }
    if(conpass!=pass)
    {
        document.getElementById("message4").innerHTML="**Please Enter The Correct Password";
        return false;
    }
    if(phone=="")
    {
        document.getElementById("message").innerHTML="**Please Fill Mobile Number";
        return false;
    }
    if (isNaN(phone))
    {
        document.getElementById("message").innerHTML="**Enter correct Mobile Number";
        return false;
    }
    if(phone.length!=10)
    {
        document.getElementById("message").innerHTML="**Enter 10 Digit Mobile Number";
        return false;
    }
    
    if(country=="")
    {
        document.getElementById("message3").innerHTML="**Please Enter Your Country";
        return false;
    }
    
    
    localStorage.setItem('GBusername', fname);
    localStorage.setItem('GBusermail', email);
    localStorage.setItem('GBpassword', pass);
    localStorage.setItem('GBphone', phone);
    address = address + " " + document.getElementsByClassName("line2")[0].value
    localStorage.setItem('GBaddress', address);

    return true;
}

function getCartCount(){
    var cart_count = 0 ;
    for (var i = 0; i <= localStorage.length-1; i++) {
      if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress" || localStorage.key(i)==="GBtotal"){
        continue;
      }
      cart_count++;
    }
    if (cart_count > 0 ) 
    {
      return "CART ("+ cart_count + ")";
    }
    return "CART ";
  }
  
  
  document.getElementById('cartid').innerHTML = getCartCount();