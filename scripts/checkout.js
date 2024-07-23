import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// This uses a module that has a function so when we make changes to our cart it will automatically update and load the HTML
renderOrderSummary();
renderPaymentSummary();
