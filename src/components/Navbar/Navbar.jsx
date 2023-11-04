import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><Link>Home</Link></li>
        <li><Link>Room</Link></li>
        <li><Link>My Bookings</Link></li>
        <li><Link>Sign in</Link></li>
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
                <ul className="flex gap-10 text-red-500 font-medium">
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