import React from "react";
import axios from "axios";

const base_url = "https://api.escuelajs.co/api/v1";

const GetProducts = async () => {
  const url = `${base_url}/products`;
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default GetProducts;
