document.getElementById('cardholder').value = localStorage.getItem('GBusername');
function makepayment(){ 
    if(verify()){
        pay();
    }   
    else{
        return verify();
    }
}

function verify()
{
    var regx1=/^([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})$/;
    var regx2=/^([0-9])([0-9])([0-9])$/;
    var regx3=/^\d{2}\/\d{2}$/;
    var holder_name=document.getElementById("cardholder").value;
    var cardnum=document.getElementById("cardnum").value;
    var cvv=document.getElementById("cvv").value;
    var expiry=document.getElementById("expiry").value;

    if(holder_name=="")
    {
        alert("Please Enter Card Holder Name");
        return false;
    }
    if (cardnum=="")
    {
        alert("Enter the Card Number");
        return false
    }
    if(!regx1.test(cardnum))
    {
        alert("Invalid Card Number Format");
        return false;
    }
    if (cvv=="")
    {
        alert("Enter the CVV Number");
        return false;
    }
    if(!regx2.test(cvv))
    {
        alert("Invalid CVV Format");
        return false;
    }
    if (expiry=="")
    {
        alert("Enter the validity year and month");
        return false;
    }
    if(!regx3.test(expiry))
    {
        alert("Invalid Date Format");
        return false;        
    }
 return true;   

}

function getCartCount(){
    var cart_count = 0 ;
    for (var i = 0; i <= localStorage.length-1; i++) {
      if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress" || localStorage.key(i)==="GBtotal" || localStorage.key(i)==="GBdiscount"){
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

function displayCart(){
    var entry = "<tr id='headrow'><th>Item(s)</th><th>Price(in Rs. only/-)</th></tr>\n";
    for (var i = 0; i <= localStorage.length-1; i++) {
        if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBdiscount" || localStorage.key(i)==="GBtotal" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress"){
            continue;
        }
        entry += "<tr><td>" + localStorage.key(i) + "</td>\n<td>"
                + localStorage.getItem(localStorage.key(i)) + "</td></tr>\n";
    }
    document.getElementById('iternary').innerHTML = entry;
}
displayCart();

document.getElementById('total').innerHTML = "Rs. " + localStorage.getItem('GBtotal');

function pay(){
    alert('Your order has been placed successfully! Thank you for using for Gharbhejo.');
    localStorage.clear();
    document.getElementById('signup_btn').style.display = "unset";
    document.getElementById('signout_btn').style.display = "none";
    document.getElementById('greetings').style.display = "none";
    window.location.replace('index.html');
}