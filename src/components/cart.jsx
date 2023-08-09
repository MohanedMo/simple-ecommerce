
import { useDispatch, useSelector } from "react-redux";
import {increaseCount , decreaseCount, resetCart , removeFromCart } from "../rtk/slices/cartSlice"




const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const prices = cart.map((p) => p.totalprice)
  let totalprice;
  if(prices.length !== 0){
    totalprice = prices.reduce((acc, curr) => acc + curr)
  }else{
    totalprice = 0
  }
  return ( 
    <>
    {totalprice !== 0 ? (
      <div style={{marginTop: "70px"}}  className="totalprice d-flex justify-content-center">
      <h2 className="d-flex justify-content-center">Total Cost :- <span>{totalprice} </span> </h2>
      </div>
    ) : (
      <div style={{marginTop: "70px"}} className="totalprice d-flex justify-content-center">
      <h2 className="d-flex justify-content-center">No Product in Cart</h2>
      </div>
    )}
        <main className="container  row flex-wrap">
          {cart.map((product) => (
            <div key={product.id} style={{width: "300px"}} className="d-flex border border-secondary m-2" >
            <img src={product["picture"]} className="card-img-top w-50 " alt="..." />
         <   div className="card-body">
             <div className="title d-flex justify-content-between">
             <h5 className="card-title ms-2 mt-2">{product["name"]}</h5>
             </div>
             <div className="details">
                 <div className="m-2 amount d-flex justify-content-between">
                 <span className='bg-primary text-white p-2 rounded'>{product["amount"]}</span>
                 <div className="buttons">
                  <button className='ms-2 btn btn-success btn-sm' onClick={() => dispatch(increaseCount(product))} >+</button>
                 <button className='ms-2 btn btn-warning btn-sm' onClick={ product["amount"] === 1 ? () => dispatch(removeFromCart(product)) : () => dispatch(decreaseCount(product))}>-</button>
                 </div>
                 </div>
                 <p className='ms-2 mt-3'>Total Price :- <span>{product.totalprice}$</span></p>
             <button className='ms-5 mb-2 btn btn-danger btn-sm' onClick={() => dispatch(removeFromCart(product))}>Delete</button>
             </div>
         </div>
        </div>
          ))}
        </main>
        <div className="d-flex justify-content-center">
          {totalprice !== 0 &&(
        <button className=" btn btn-primary" onClick={() => dispatch(resetCart())}>Reset</button>
          )}
        </div>
    </>
   );
}
 
export default Cart;






