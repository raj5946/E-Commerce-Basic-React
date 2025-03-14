import React from "react";

const GetTotalPrice = (cart) => {
  return cart?.length > 0 && cart.reduce((acc, cur) => acc + cur.price, 0);
};

export default GetTotalPrice;
