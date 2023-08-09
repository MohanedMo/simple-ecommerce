import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosProducts } from "../rtk/slices/getproducts-slice";
import { addToCart, removeFromCart } from "../rtk/slices/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

function addProduct(product){
    if(!cart.some((el) => el.id === product.id)){
        dispatch(addToCart(product))
    }else{
        dispatch(removeFromCart(product))
    }

}
  useEffect(() => {
    dispatch(axiosProducts());
  },);
  return(
  <div className="row " style={{marginTop: "70px"}}>
    { products.map((product)=>(
        <div className="col" key={product.id}>
        <div className="card" style={{width: "18rem"}}>
        <img style={{height: "300px"}} src={product.picture} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <Link to={`/products/${product.id}`}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <div className="d-flex mb-2 mt-2 ">
            <span>Price:- </span>
            <span className="card-text ms-2">{product.price}$</span>
          </div>
          <button
            className={
              cart.some((el) => el.id === product.id) === true ? "btn btn-success" : "btn btn-primary"
            }
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
      </div>
    ))}
</div>
)
}
export default Products;

