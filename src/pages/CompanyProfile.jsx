
/* eslint-disable react/jsx-no-comment-textnodes */
import React , {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import {getProfile} from "../api/user/user.api"
import { getJobsByUserId } from "../api/post/post.api"
function CompanyProfile() {
    const u = useSelector(selectUser);
    const [user,setUser] = useState(u)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        getProfile(u._id,u?.token).then((res) => {
            setUser(res.data);
        });
    }, []);
    useEffect(() => {
        getJobsByUserId(user._id).then((res) => {
            setJobs(res.data);
            console.log(setJobs(res.data))
        });
    }, []);
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
                        <p className="text-center text-sm text-gray-400 font-medium">{user.field}</p>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.email}</p>
                        <p className="text-center text-sm text-gray-400 font-medium">{user.phone}</p>
                        <p className="text-center text-sm text-gray-400 font-medium mb-10">{user.address}</p>

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