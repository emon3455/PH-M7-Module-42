const addProduct=()=>{
    const product = document.getElementById("product-name").value;
    const quantity= document.getElementById("product-quantity").value;

    displayProduct(product,quantity);

    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value ="";

    saveToLocalStorage(product,quantity);

}

const displayProduct=(product, quantity)=>{
    const container = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText=`${product}: ${quantity}`;
    container.appendChild(li);

}

const getStoredShoppingCart=()=>{
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveToLocalStorage=(product , quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product]=quantity; //this line helps us to add data in object
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart",cartStringify);
}

const displayProductFromLocalStorage=()=>{
    const savedProduct = getStoredShoppingCart();
    for (const product in savedProduct) {
        const quantity = savedProduct[product];
        displayProduct(product,quantity);
    }
}

displayProductFromLocalStorage();