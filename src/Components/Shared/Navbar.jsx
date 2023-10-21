import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/websitelogo.jpg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = ({changeBackground}) => {
  const { user, logOutUser } = useContext(AuthContext)

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: 'User Signed Out successfully'
        })
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'please sign in first!'
        })
      })
  }

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addProduct">Add Product</NavLink></li>
    <li><NavLink to="/myCart">My Cart</NavLink></li>
  </>


  return (
    <div className="bg-black bg-opacity-95">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-black rounded-box w-52 text-white">
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="rounded-full w-full border-2">
              <img className="rounded-full w-6 md:w-10" src={logo} alt="" />
            </div>
          </Link>
          <a className="md:text-xl ml-2 font-bold border-b-4 border-yellow-300 text-white"><span className="text-red-600">Tech</span>Nexa</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 font-bold text-white">
            { navLinks}
          </ul>
        </div>
        <div className="navbar-end md:space-x-2">

          {
            user && 
            <div className="flex gap-2 items-center">
              <div className="w-2, h-6 md:w-10 md:h-10 rounded-full">
              <img className="w-full h-full rounded-full" src={user.photoURL} alt="" />
              </div>
              <h1 className="text-xs text-white">{user.displayName}</h1>
            </div>
          }
          {
            user ? <button onClick={handleLogout} className=" rounded-xl text-xs bg-red-600 md:bt md:btn-sm
           font-bold">Sign Out</button> :
              <Link to='/signin'>
                <button className="
              bg-red-600 font-bold btn btn-sm">Sign In</button>
              </Link>
          }
          <input onClick={changeBackground} type="checkbox" placeholder="Dark" className="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;