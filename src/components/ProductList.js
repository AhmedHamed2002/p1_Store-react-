import { useEffect, useState } from "react";
import Card from "./Card";
import '../css/products.css'
function ProductList()
{
    let[products  , set_products]= useState([]) ;  
    let[categories  , set_categories]= useState([]) ;
    
    const Api_url  =  "https://fakestoreapi.com/products" ;
    
    const get_p = () =>
    {
        fetch(`${Api_url}`).then((response) => response.json()).then((data) => set_products(data)) ; 
    }

    const get_g = () => 
    {
        fetch(`${Api_url}/categories`).then((response) => response.json()).then((data) => set_categories(data)) ;
    } 

    const  getProductInGategory = (g) => {
        fetch(`${Api_url}/category/${g}`).then((response) => response.json()).then((data) => set_products(data)) ; 
    }
    
    
    
    useEffect(()=>{
        get_p() ; 
        get_g() ; 
    },[]); 
    return(
        <>
        <h2 className="text-center p-3 text-danger"> Our Products</h2>
        <div className="container">
            <div className="categories">
            <button key="all" onClick={() => { get_p() ;}} className="btn btn-danger p-3">All</button>
            {categories.map((g)=>{
                    return(<button key={g} onClick={() => {getProductInGategory(g);}} className="btn btn-danger">{g}</button>) ; 
                })}
            </div>
            <div className="row">
                {products.map((p) => {
                    return(
                        <div className="col col-3" key={p.id}>
                            <Card  ps ={p}/>
                        </div> 
                    ); 
                })} 

            </div>
        </div>
        </>
    ) ; 
}

export default  ProductList ; 