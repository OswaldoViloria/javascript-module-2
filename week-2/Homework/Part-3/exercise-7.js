/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];
// var selectedProducts = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "iphone XR",
  price: 10.99,
  stock: 3
};
var product4 = {
  id: 4,
  name: "Macbook",
  price: 19.99,
  stock: 2
};


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);




var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

function addToShoppingCart(id) {
  let product = products.find(product => product.id === id)

  if (product.stock >= 1) {
    shoppingCart.selectedProducts.push(product)
    shoppingCart.totalPrice = shoppingCart.totalPrice + product.price
  }
}

function removeFromShoppingCart(id) {
  let productIndex = shoppingCart.selectedProducts.findIndex(product => product.id === id);
  if (productIndex >= 0) {
    let productToRemove = shoppingCart.selectedProducts[productIndex]
    shoppingCart.selectedProducts = shoppingCart.selectedProducts.splice(productIndex, 1)
    shoppingCart.totalPrice = shoppingCart.totalPrice - productToRemove.price
  } 
}

function shop() {
  // update stock 
   shoppingCart.selectedProducts.forEach(product => { 
     let indexInStock = products.findIndex(stockProduct => product.id === stockProduct.id)
     products[indexInStock].stock = products[indexInStock].stock - 1
   });

  // reset shoppingCart
    shoppingCart.selectedProducts = []
    shoppingCart.totalPrice = 0
}


//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));