//Task 1
const inventory = [{name: `Burger`, price: 15, quantity: 10,},
    { name: 'Hot Dog', price: 12, quantity: 5, },
    { name: 'Soda', price: 5, quantity: 7,},
    { name: 'Fries', price: 6, quantity: 15,},
     ]
  //Task 2
  let orders = []; 
  //Task 3
  function placeOrder(product){
    const order = product.quantity <= product.price ? "success":"Fail";
    return `${product.name} is ${success}` 
}
//Task 4
function calculateOrderTotal(product){
    for(let i = 0, i < inventory.length, i++) 
        return `${product.price}`
}
 //Task 5 
 function completeOrder(product){
    if (order===success) {
        console.log('Order for (name) is complete')
    } else {
        console.log('Order for (name) is incomplete')
    }
}
//Task 6
function checkPendingOrders(product){
   for(let i = 0, i < orders.length, i++) 
        return `${product.name}`
}