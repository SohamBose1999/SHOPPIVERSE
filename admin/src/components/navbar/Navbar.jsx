import React from "react";
import "./Navbar.css"
import navlogo from "../../assets/logo4.jpg"
import navProfile from "../../assets/user image.gif"

const Navbar = () => {
    return(
        <div className="navbar">
           <a href="https://shoppiverse.vercel.app"><img src={navlogo} alt="" className="nav-logo"/></a> 
            <img src={navProfile} alt="" className="nav-profile"/>

        </div>
    )
}
export default Navbar