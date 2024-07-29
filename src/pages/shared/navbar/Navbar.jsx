import { useContext } from "react";
import logo from "../../../assets/Black_Gold_White_Elegant_Gold___Jewelry_Shop_Logo__1_-removebg-preview.png"
import { NavLink, Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User LogOut Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Error...",
                        text: `${error}`,
                    });
                }
            });
    };
    const navItem = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"}>
            Home
        </NavLink>
        <NavLink to="/allJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
            All Jewelry
        </NavLink>
        {user ? <>
            <NavLink to="/myJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
                My Jewelry
            </NavLink>
            <NavLink to="/addJewelry" className={({ isActive }) => isActive ? "active" : "default"}>
                Add Jewelry
            </NavLink>
        </> : <></>}
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : "default"}>
            Blogs
        </NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg fixed z-50 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <div className="flex items-center">
                    <h2 className="text-2xl uppercase tracking-widest text-[#CCAF77] hover:text-black duration-1000">Sparkle
                    </h2>
                    <div className="h-8 md:h-12 w-9 flex items-center">
                        <img className="h-full w-full mx-1 -mt-1" src={logo} alt="" />
                        <span className="text-xl hidden sm:block md:text-2xl uppercase hover:text-[#CCAF77] duration-1000">Gems</span>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase md:ml-20 space-x-6">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="ml-5">
                    {user ? (
                        <>
                            <div className="flex justify-between items-center">
                                <div className="h-7 w-7 mr-3 tooltip tooltip-left tooltip-warning"
                                    data-tip={user.displayName}>
                                    <img
                                        className="h-full w-full rounded-full"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                </div>
                                <Link to="/login"> <button className=" rounded-md uppercase px-3 py-1 hover:bg-[#e7d8d8]" onClick={handleLogOut}>
                                    SIGN OUT
                                </button></Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="tracking-wider flex items-center rounded-md uppercase px-3 py-1 hover:bg-[#e7d8d8]"><BiUser className="text-xl mr-2"></BiUser> Login</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;