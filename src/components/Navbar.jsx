import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Search from "./Search";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
        console.log(nav);
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-[#00ADB5] z-20">
            <div>
                <Link to="home">
                    <img className="rounded" src={Logo} alt="Logo" style={{ width: "50px", cursor: "pointer" }} />
                </Link>
            </div>

            <div className="w-[700px] hidden md:block">
                <Search />
            </div>

            {/* Menu */}
            <ul className="font-bold hidden md:flex">
                {/* md:flex nghĩa là sẽ được hiển thị flexbox trên các thiết bị có độ rộng màn hình lớn hơn hoặc bằng 768px */}
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="hotjob">Hot Jobs</Link>
                </li>
                <li>
                    <Link to="myjobs">My Jobs</Link>
                </li>
                <li>
                    <Link to="account">Account</Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {/* md:hidden nghĩa là sẽ ẩn trên các thiết bị có độ rộng màn hình nhỏ hơn 768px*/}
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    nav
                        ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center font-bold"
                        : "hidden"
                }
            >
                {/* h-screen là height: 100vh */}
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home">
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about">
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills">
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects">
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
