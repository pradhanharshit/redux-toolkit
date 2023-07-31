import React from 'react'
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const NavBar = () => {

    const totalItems = useSelector(state => state.cart)
   
  return (
    <div style={{display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "rgb(96 165 250)", position: "fixed", top: "0", left: "0", width: "100%"}}>
      
        <h1 style={{color: "white"}}>Navbar</h1>

            <div style={{display: "flex", gap: "8px", justifyContent: "center", alignItems: "center"}}>
            <Link style={{textDecoration: "none"}} to="/">
            <span style={{fontSize: "18px", color: "white"}}>Products</span>
            </Link>
            <div style={{backgroundColor: "white", borderRadius: "10px", display: "flex", gap: "4px", padding: "5px", marginRight: "10px"}}>
            <Link style={{textDecoration: "none"}} to="cart">
            <span style={{fontSize: "18px", color: "rgb(96 165 250)"}}>Cart</span>
            </Link>
            <span style={{color: "rgb(96 165 250)"}}>{totalItems.length}</span>
            </div>
            </div>
      </div>
  )
}

export default NavBar