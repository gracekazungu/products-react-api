import React, {useState, useEffect} from "react";
import './style.css'
const Products=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    }, [])
console.log(products)
    const getProducts=async ()=>{
        try{
            setLoading(true)
            const response =await fetch('https://dummyjson.com/products')
            const result= await response.json()
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message)
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }


return(
    <div>
        <h1>All products</h1>
        <div className="item">
        {products.map(item=> (
            <div key={item.id}>
      <img src={item.thumbnail} alt={item.title} className="thumbnail" />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <button id="cart">ADD TO CART</button>
            </div>
        ))}
        </div>
    </div>
)
}
export default Products



