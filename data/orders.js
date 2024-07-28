export const orders = JSON.parse(localStorage.getItem("orders")) || [];

// This will add the orders to the top of the array
export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

// This will save the order to the local storage
function saveToStorage() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

// This will identify and get the matching orders
export function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if (order.id === orderId) {
      matchingOrder = order;
    }
  });

  return matchingOrder;
}
