import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "../assets/logo.jpg";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";
import Dropdown from "./Dropdown";


function Navbar() {
    const [nav, setNav] = useState(false);
    let Acc = "123"
    const handleClick = () => {
        setNav(!nav);
    };
    function AccountHandle({ acc }) {
        if (!acc) {
            return (
                <li>
                    <Link to="/login" smooth={true} duration={500}>
                        Login
                    </Link>
                </li>
            );
        }
        else {
            return (
                <React.Fragment>
                    <li>
                        <Link to="profile" smooth={true} duration={500}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="profile" smooth={true} duration={500}>
                            Logout
                        </Link>
                    </li>
                    <li>
                        <Link to="notification" smooth={true} duration={500}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </Link>
                    </li>
 
                </React.Fragment>
            )
        }
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-[#00ADB5] z-20">
            <div>
                <Link to="home" smooth={true} duration={500}>
                    <img className="rounded" src={Logo} alt="Logo" style={{ width: "50px", cursor: "pointer" }} />
                </Link>
            </div>

            <div className="w-[700px]">
                <Search />
            </div>

            {/* Menu */}
            <ul className="font-bold hidden md:flex">
                {/* md:flex nghĩa là sẽ được hiển thị flexbox trên các thiết bị có độ rộng màn hình lớn hơn hoặc bằng 768px */}
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="notification" smooth={true} duration={500}>
                        Hot Jobs
                    </Link>
                </li>
                <li>
                    <Link to="myjobs" smooth={true} duration={500}>
                        My Jobs
                    </Link>
                </li>

                <AccountHandle acc={Acc}></AccountHandle>
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
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
