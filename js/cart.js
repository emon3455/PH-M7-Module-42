const addProduct=()=>{
    const product = document.getElementById("product-name").value;
    const quantity= document.getElementById("product-quantity").value;

    displayProduct(product,quantity);

    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value ="";
}

const displayProduct=(product, quantity)=>{
    const container = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText=`${product}: ${quantity}`;
    container.appendChild(li);
    
}