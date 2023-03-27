import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Table">Show Inventory</Link>
        <Link to="/Orders">View Orders</Link>
    </div>
  )
}

export default Nav