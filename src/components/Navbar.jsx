import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { logout, selectUser } from "../features/userSlice";
import Search from "./Search";
import { getJobs } from "../api/post/post.api";

function Navbar() {
    const [keyword, setKeyword] = React.useState("");
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            dispatch(logout());
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        // Navigate to "/search/:keyword"
        navigate(`/search/${keyword}`);
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-[#00ADB5] z-20">
            <div>
                <Link to="home">
                    <img className="rounded" src={Logo} alt="Logo" style={{ width: "50px", cursor: "pointer" }} />
                </Link>
            </div>

            <div className="w-[700px] hidden md:block">
                <Search setKeyword={setKeyword} handleSearch={handleSearch} />
            </div>

            {/* Menu */}
            <ul className="font-bold hidden md:flex items-center">
                {/* md:flex nghĩa là sẽ được hiển thị flexbox trên các thiết bị có độ rộng màn hình lớn hơn hoặc bằng 768px */}
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="hotjobs">Hot Jobs</Link>
                </li>

                {!user && (
                    <>
                        <li>
                            <Link to="signin">Sign In</Link>
                        </li>
                        <li>
                            <Link to="signup">
                                <button className="bg-[#1B9C85] text-white py-2 px-3 rounded hover:opacity-90">
                                    Sign Up
                                </button>
                            </Link>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        {user?.userType === 1 && (
                            <li>
                                <Link to="approve">Approve</Link>
                            </li>
                        )}
                        {user?.userType === 3 && (
                            <>
                                <li>
                                    <Link to="myjobs">My Jobs</Link>
                                </li>
                                <li>
                                    <Link to="createjob">Create Job</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to="account">Account</Link>
                        </li>
                        <li>
                            <Link to="logout">
                                <button
                                    className="bg-[#1B9C85] text-white py-2 px-3 rounded hover:opacity-90"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
