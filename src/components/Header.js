import {LOGO_URL} from "../utils/contents";
// import React from "/node_modules/react";
import React from "react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";


//Step 2: Now lets make a component for Header:consistes Logo and NAv links
const Header = ()=> {

    const [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data= useContext(UserContext);

    //Step 42: Now we will use a useSelector hook to get the data from the store.useSelector is giving acccess to our store
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='header'>
            <div className="nav-container">
                <div className='logo-container'>
                <img 
                    className="logo" 
                    src = {LOGO_URL}
                />
                </div>
                {/* Step 18: use of Link tag which is same as the anchor tag but it is used for routing and avoids page refresh */}
                    <ul className='nav-items'>
                        <li>Online Status : {onlineStatus? "🟢" : "🔴"}</li>
                       <li ><Link to = "/">Home</Link></li>
                       <li><Link to = "/about">About us</Link></li>
                       <li>
                           <Link to = "/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to = "/grocery">Grocery</Link>
                        </li>
                       <li><Link to = "/cart">Cart({cartItems.length})</Link></li>
                {/* step 9: create a login/logut button */}
                    <button className = "login" onClick = {() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}
                        >{btnName}</button>

                        <li>{data.LoggedInUser}</li>
                </ul>
            </div>
        </div>
    ) ;
} ;
export default Header;

//Note: when the login button is changing the whole header is getting re-rendered