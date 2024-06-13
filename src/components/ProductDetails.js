import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function  ProductDetails()
{
    const  Api_url =  'https://fakestoreapi.com/products'; 
    const  params  =  useParams() ; 
    const [product ,  set_product] =  useState([]);  
    useEffect(()=>{
        fetch(`${Api_url}/${params.productId}`).then((res) => res.json()).then((data) => set_product(data)) ;  
    },[]); 
    return(
        <>
            <h1> {product.title}</h1>
            <p>{product.description}</p>
        </>
    ) ; 
}

export  default ProductDetails ;  