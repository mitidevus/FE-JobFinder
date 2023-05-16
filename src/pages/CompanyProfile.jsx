
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
function CompanyProfile() {
    const user = useSelector(selectUser);
    if(!user || user.userType!==3){
        return alert("You need to sign in an account for company")
    }
    return (
        <div className="bg-[#393E46] antialiasedr">
            <div className="container mx-auto my-60">


                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={user.avatar} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="mt-16">
                        <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            {user.companyName}
                        </h3>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.email}</p>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.phone}</p>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.address}</p>
                        <div className="my-5 px-6">
                            <a href="/" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Go to <span className="font-bold">"Trang chu cua cong ty"</span></a>
                        </div>
                        <div className="flex justify-between items-center my-5 px-6">
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                        </div>

                        <div className="w-full">
                            <div className="px-6">
                               
                                <div className="py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Description: </span>
                                                {user.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <a href="/company_profile/edit" type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default CompanyProfile;