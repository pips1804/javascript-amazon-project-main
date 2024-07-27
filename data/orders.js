export const orders = JSON.parse(localStorage.getItem("orders")) || [];

// This will add the orders to the top of the array
export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("orders", JSON.stringify(orders));
}
