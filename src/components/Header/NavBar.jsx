import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-5 shadow">
                        <NavLink><span className="md:btn">Home</span></NavLink>
                        <NavLink><span className="md:btn">Listed Books</span></NavLink>
                        <NavLink><span className="md:btn">Pages to Read</span></NavLink>
                        <NavLink><span className="md:btn">About</span></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl md:text-4xl">Boi Poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    <NavLink to='/'><span className="md:btn">Home</span></NavLink>
                    <NavLink to='/readList'><span className="md:btn">Listed Books</span></NavLink>
                    <NavLink><span className="md:btn">Pages to Read</span></NavLink>
                    <NavLink to='/about'><span className="md:btn">About</span></NavLink>
                </ul>
            </div>
            <div className="navbar-end md:flex md:gap-2">
                <button className="btn bg-green-400 text-white">Sign In</button>
                <button className="btn bg-[#59c6d2] text-white">Sign Up</button>
            </div>
        </div>
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <a className="btn btn-ghost text-xl">Boi Poka</a>
        //     </div>
        //     <div className="navbar-center hidden md:flex md:items-center md:justify-center md:gap-5">
        //         <NavLink><span className="btn">Home</span></NavLink>
        //         <NavLink><span className="btn">Listed Books</span></NavLink>
        //         <NavLink><span className="btn">Pages to Read</span></NavLink>
        //     </div>
        //     <div className="navbar-end md:flex md:gap-4">
        //         <button className="btn">Sign In</button>
        //         <button className="btn">Sign Up</button>
        //     </div>
        // </div>
    );
};

export default NavBar;