import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import Search from "./Search";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };

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
                <li>
                    <Link to="account" smooth={true} duration={500}>
                        Account
                    </Link>
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
