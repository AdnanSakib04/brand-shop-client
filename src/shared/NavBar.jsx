import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const NavBar = () => {
    
    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-bold bg-base-200 lg:bg-green-300 p-2 rounded-lg" : ""} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-bold bg-base-200 lg:bg-green-300 p-2 rounded-lg" : ""} to="/login">Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-bold bg-base-200 lg:bg-green-300 p-2 rounded-lg" : ""} to="/register">Register</NavLink></li>
    </>
    return (
        <div className="bg-white">
            <div className="navbar  max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">Event Management</a> */}
                    <img className="h-1/2 w-1/2 md:h-[50px] md:w-[180px]" src="https://i.ibb.co/VW0HXqv/image.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-1">
                        {navLinks}
                    </ul>

                </div>
                <div className="navbar-end">
                   
                            <Link to="/login">
                                <button className="btn bg-green-500">Login</button>
                            </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;