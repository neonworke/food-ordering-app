import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <div className="w-full bg-red-700 h-16 text-white flex justify-center items-center">
            <div className="flex flex-row justify-between w-2/4 ml-80">
            <Link to="/"><div className="header-title text-4xl">Food Ordering Portal</div></Link>
            <div className="icons float-right">
                <div className=" flex pr-10 pt-3">
                <Link className="nav-link" to="/cart">
                <span className="material-icons pr-4">
                    shopping_cart
                </span>
                </Link>
                    if(props.cartItems === null){
                        <span>0</span>
                    } else {
                        <span>{props.cartItems.length}</span>
                    }    
            </div>
            </div>
            </div>
        </div>
    );
}

export default Header;