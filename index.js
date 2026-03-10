const inputProduct = document.getElementById('input-product');
const inputQuantity = document.getElementById('input-quantity');
const btnAddToCart = document.getElementById('btn-addToCart');

btnAddToCart.addEventListener("click", function(){

    const product = inputProduct.value;
    const quantity = inputQuantity.value;

    displayProduct(product, quantity);

    addProductToCart(product, quantity);

    inputProduct.value = "";
    inputQuantity.value = "";
});

function displayProduct(product, quantity){

    const container = document.getElementById("product-container");

    const li = document.createElement("li");

    li.innerText = product + " : " + quantity;

    container.appendChild(li);
}

function addProductToCart(product, quantity){

    let cart = {};

    const storedCart = localStorage.getItem("cart");

    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    cart[product] = quantity;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayStoredCart(){

    const storedCart = localStorage.getItem("cart");

    if(storedCart){

        const cart = JSON.parse(storedCart);

        for(const product in cart){

            const quantity = cart[product];

            displayProduct(product, quantity);
        }
    }
}

displayStoredCart();