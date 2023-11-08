import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
    const { logoutUser, user } = useContext(authContext)

    const handleLogout =()=>{
        logoutUser()
    }
    
    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/mybookings">My Bookings</Link></li>
        {
            user ? <div className="flex gap-2">
                {
                    user.photoURL ? <div className="mr-2 avatar hidden md:block">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL}/>
                        </div>
                    </div>
                        : <BsPersonCircle className="text-3xl"></BsPersonCircle>
                }
                <button onClick={handleLogout}>Logout</button>
            </div>
                : <li><Link className="text-red-600" to="/login">Sign in</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start ml-5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link className="text-2xl font-bold"><span className="text-red-500">R</span>oom<span className="text-red-600">R</span>over</Link>
            </div>
            <div className="navbar-end mr-5 hidden lg:flex">
                <ul className="flex gap-10 font-medium">
                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default Navbar;