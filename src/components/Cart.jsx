import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from "../store/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }

    const cartItems = useSelector(state => state.cart);
    const cartProducts = cartItems.map(product => {
        return(
            <div key={product.id} style={{display: "flex", flexDirection: "column", border: "3px solid black", textAlign: "center", height: "300px", width: "300px", marginBottom: "20px"}}>
            <div>
            <img src={product.image} alt="" style={{height: "130px", width: "100px"}}/>
            </div>
            <span style={{margin: "5px"}}>{product.title}</span>
             <span style={{margin: "5px"}}>INR:{product.price}</span>
             <div style={{textAlign: "center"}}>
              
            <button onClick={() => removeFromCart(product.id)} style={{margin: "5px", padding: "5px", width: "100px", backgroundColor: "red", color: "white"}}>Remove</button>
             </div>
          </div>
        )
    })
  return (
    <>
        <h1 style={{marginTop: "105px"}}>Cart</h1>
        <div style={{display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "space-evenly"}}>
            {cartProducts}
        </div>
    </>

  )
}

export default Cart