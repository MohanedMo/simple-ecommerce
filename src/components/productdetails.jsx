import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


const ProductDetails = (props) => {
    let id = useParams()
    let productId = id.id
    let products = useSelector((state) => state.products)
    let product = products.filter((product) => product.id === productId)[0]
    return (
        <React.Fragment> 
        <h1>Details</h1>
        <div className="container">
            <h2>Name :- <span>{product.name}</span></h2>
            <img className="w-25" src={product.picture} alt="Not Found"/>
            <h3>Price :- <span>{product.price}</span></h3>
        </div>
        </React.Fragment>
     );
}
 
export default ProductDetails
