import React from 'react';
import { Link} from "react-router-dom";


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin area</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default NavBar
