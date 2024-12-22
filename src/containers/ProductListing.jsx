import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const respone = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProduts(respone.data));
  };
  useEffect(()=>{
    fetchProducts()
  },[])
  console.log("Products: ",products);
  return (
    <div className="ui grid container" style={{ marginTop: "30px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
