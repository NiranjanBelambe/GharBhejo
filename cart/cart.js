function rmv(){
    var rmdata = confirm("Do you want to remove the selected items?");
    if(rmdata == true){
        for(var i=1; i<=document.getElementsByTagName("input").length; i++){
            if(document.getElementsByTagName("input")[i].checked == true){
                for(j=0; j<=localStorage.length-1; j++){
                    var ind = (3*(i-1)) + 1;
                    if(localStorage.key(j)==="GBusername" || localStorage.key(j)==="GBusermail" || localStorage.key(j)==="GBdiscount" || localStorage.key(j)==="GBpassword" || localStorage.key(j)==="GBphone" || localStorage.key(j)==="GBaddress" || localStorage.key(j)==="GBtotal"){
                        continue;
                    }
                    if(localStorage.key(j)===document.getElementsByTagName("td")[ind].innerHTML){
                        localStorage.removeItem(localStorage.key(j));
                        break;
                    }
                }
                location.reload();
            }
        }
    }
        
}

function displayCart(){
    var entry = "<tr id='headrow'><th></th><th>Item</th><th>Price(in Rs. only/-)</th></tr>\n";
    for (var i = 0; i <= localStorage.length-1; i++) {
        if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBdiscount" || localStorage.key(i)==="GBtotal" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress"){
            continue;
        }
        entry += "<tr><td><input type='checkbox'><span class='checkbox-custom rectangular'></span></td>\n<td>" + localStorage.key(i) + "</td>\n<td>"
                + localStorage.getItem(localStorage.key(i)) + "</td></tr>\n";
    }
    document.getElementById('cartList').innerHTML = entry;
}
displayCart();

if(document.getElementsByTagName("tr").length==1){
    document.getElementById("cartList").style.display="none";
    document.getElementById("rmv_btn").style.display="none";
    document.getElementById("proceed").style.display="none";
    document.getElementById("empty-img").style.display="block";
    document.getElementById("net").style.display="none";
    document.getElementById("header").innerHTML="You currently have no items in your cart.";
}
else{
    if(localStorage.getItem('GBusername')!==null)
        document.getElementById("header").innerHTML= localStorage.getItem('GBusername') + "'s shopping cart:";
    else
        document.getElementById("header").innerHTML= "Your shopping cart:";
}

var total=0;
for(i=2; i<=document.getElementsByTagName("td").length; i=i+3){
    total+=parseInt(document.getElementsByTagName("td")[i].innerHTML);
}
localStorage.setItem('GBtotal', total);

document.getElementById("net").innerHTML="Total is Rs." + total + "/-";

function buy(){
    if(localStorage.getItem('GBusername')!==null){
        var chkpass = prompt("Please enter your password.");
        if(chkpass==localStorage.getItem('GBpassword')){
            window.location.replace('checkout/details.html');
        }
        else{
            alert('The password is incorrect.');
        }
    }
    else{
        window.location.replace('signup/signup.html');
        alert("Please sign up first.");
    }
}

function getCartCount(){
    var cart_count = 0 ;
    for (var i = 0; i <= localStorage.length-1; i++) {
      if(localStorage.key(i)==="GBusername" || localStorage.key(i)==="GBusermail" || localStorage.key(i)==="GBpassword" || localStorage.key(i)==="GBdiscount" || localStorage.key(i)==="GBphone" || localStorage.key(i)==="GBaddress"  || localStorage.key(i)==="GBtotal"){
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