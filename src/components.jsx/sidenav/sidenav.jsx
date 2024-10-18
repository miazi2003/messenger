import React from "react";
import "./sidenav.scss";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div>
        
          <div className="sidenav">
        <div className="logo"> Ecommerce CMS</div>
        <div className="management">Store Management</div>
        <Link to={"/category"}>
          {" "}
          <div className="categories">CATEGORY</div>
        </Link>
        <div className="buttons">
          <button>Subcategories</button>
          <button>Products</button>
          <button>Deals</button>
          <button>Banners</button>
          <button>Older Managment</button>
          <button>Stock Management</button>
          <button>Sales Managment</button>
          <button>Mail & Contacts</button>
          <button>Product Reviews</button>
          <button>site Management</button>
          <button>Utilities</button>
          <button>Maintenance</button>
        </div>
      </div>
      
   
    </div>
  );
}
export default SideNav;
