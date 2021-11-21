let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function myfunction(th)
{
    // var div1= document.createElement("div");
    var div1= document.createElement("div");
    var div2= document.createElement("div");
    var div3= document.createElement("div");
    var sp=document.createElement("span");
    var im=document.createElement("img");
    var h3=document.createElement("h3");
    h3.innerHTML="cart item 04";
    // div1.classList.add("cart-items-container");
    im.setAttribute("src", "images/cart-item-4.png");
    div1.classList.add("cart-item");
    div2.classList.add("content");
    div3.classList.add("price");
    div3.innerHTML="$15.99/-"
    sp.classList.add("fas","fa-times");
    sp.setAttribute("onclick","this.parentElement.style.display='none'");
    div2.appendChild(h3);
    div2.appendChild(div3);
    div1.appendChild(sp);
    div1.appendChild(im);
    div1.appendChild(div2);
    // document.getElementById("cart-items").appendChild(div1);
    container=document.getElementById("cart-items");
    container.insertBefore(div1, container.firstChild);
}
