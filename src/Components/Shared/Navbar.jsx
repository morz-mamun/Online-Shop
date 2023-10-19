import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/websitelogo.jpg"

const Navbar = () => {
    const navLinks = <>
       
        <li><NavLink to="/">Home</NavLink></li> 
        <li><NavLink to="/addProduct">Add Product</NavLink></li> 
        <li><NavLink to="/myCart">My Cart</NavLink></li> 
        

        
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/">
      <div className="rounded-full w-full">
        <img className="rounded-full w-10" src={logo} alt="" />
      </div>
    </Link>
    <a className="btn btn-ghost  normal-case text-xl">TechNexa</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-20 font-bold">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link>
    <button className="btn">Login</button>
    </Link>
    <input type="checkbox" className="toggle" checked />
  </div>
</div>
    );
};

export default Navbar;