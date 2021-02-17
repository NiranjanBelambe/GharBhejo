document.getElementById("mail").value = localStorage.getItem('GBusermail');
document.getElementById("phone").value = localStorage.getItem('GBphone');
document.getElementById("address").value = localStorage.getItem('GBaddress');
document.getElementById("name").value = localStorage.getItem('GBusername');

function edit(){
    if(document.getElementById("edit").innerHTML=="Edit"){
        document.getElementById('name').disabled = false;
        document.getElementById('mail').disabled = false;
        document.getElementById('phone').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('edit').innerHTML = "Save";
    }
    else{
        document.getElementById('name').disabled = true;
        document.getElementById('mail').disabled = true;
        document.getElementById('phone').disabled = true;
        document.getElementById('address').disabled = true;
        document.getElementById('edit').innerHTML = "Edit";

    }
}

function next0(){
    if(document.getElementById("address").value==""){
        alert('Please fill shipping address.');
    }
    else if(document.getElementById("edit").innerHTML=="Edit"){
        localStorage.setItem('GBusermail', document.getElementById("mail").value);
        localStorage.setItem('GBphone', document.getElementById("phone").value);
        localStorage.setItem('GBaddress', document.getElementById("address").value);
        window.location.replace('checkout/payment.html');
    }
    else{
        alert('Please save your details before proceeding.');
    }
}

function getCartCount(){
    var cart_count = 0 ;
    for (var i = 0; i <= localStorage.length-1; i++) {
      if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBtotal" 
      || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress"){
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