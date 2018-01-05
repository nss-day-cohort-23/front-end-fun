"use strict";

const $ = require("jquery");

module.exports.displayProducts = products => {
  console.log("products", products);
  products.forEach((prod) => {
    let prodKey = Object.keys(prod)[0];
    console.log("prodKey", prodKey);
    let currentProd = prod[prodKey];
    let productString = `
      <h4>${currentProd.name}</h4>
      <h5>category: ${currentProd.category} type: ${currentProd.type}</h5>
      <p>${currentProd.description}</p>
    `;
    $("#products").append(productString);
  });
};
