import React from "react";
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>E-commerce is the activity of electronically buying or 
                    selling products on online services or over the Internet. </p>
                    <p>E-commerce draws on technologies such as mobile commerce, electronic funds transfer, 
                        supply chain management, Internet marketing, online transaction processing, 
                        electronic data interchange (EDI), inventory management systems, and automated data collection systems. </p>
            </div>
        </div>
    )
}
export default DescriptionBox