function storeItem(productName, productPrice){
  if(localStorage.getItem(productName)!==null){
    alert("ALERT: " + productName + " has already been added to the cart.");
  }
  else {
  localStorage.setItem(productName, productPrice);
  alert("Item added to your cart: " + productName);
  }
  location.reload();
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