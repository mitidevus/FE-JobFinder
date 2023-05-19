
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { getProfile } from "../api/user/user.api"
import { getJobsByUserId } from "../api/post/post.api"
import { formatDate } from "../utils/formatDate";
import {formatDateLeft } from "../utils/formatDate";
function CompanyProfile() {
    const u = useSelector(selectUser);
    const params = useParams();
    const id = params.companyId;
    // const [searchParams, setSearchParams] = useSearchParams();
    // setSearchParams("companyId")
    // searchParams.get("__firebase_request_key")
    // console.log("asd", searchParams)
    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        getProfile(id, u?.token).then((res) => {
            setUser(res.data);
        });
        getJobsByUserId(id).then((res) => {
            setJobs(res.data.posts);
            console.log(res.data)

        });
    }, [jobs]);
    return (
        <div className="bg-[#393E46] antialiasedr">
            {user && (
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
                                        <div className="grid sm:grid-cols-5 md:grid-cols-1 gap-5">
                                            <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                Post
                                            </h3>
                                            {/* Grid Items */}
                                            {jobs.map((job, index) => (
                                                <div
                                                    key={index}
                                                    className="shadow-sm shadow-[#040c16] rounded-md flex justify-center items-center text-center mx-auto bg-[#FAE3D9]"
                                                >
                                                    <div
                                                        style={{ backgroundImage: `url(${job?.userId?.avatar})` }}
                                                        className="group container rounded-t flex justify-center items-center text-center mx-auto content-div"
                                                    >
                                                        {/* Hover Effects */}
                                                        <div className="overlay rounded-t group-hover:opacity-60"></div>
                                                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                                                            <span className="pt-2">
                                                                {formatDateLeft(new Date(job?.expiredDate))}
                                                            </span>
                                                            <div className="text-center pt-4">
                                                                <Link to={`/job/${job._id}`}>
                                                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px] ">
                                                                        <span className="flex items-center">
                                                                            Detail
                                                                        </span>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-2 text-black px-3 py-4">
                                                        <span className="text-2xl font-bold">{job.company}</span>
                                                        <p className="pt-1">{job.title}</p>
                                                        <p className="pt-1">{job.address}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                    {u._id === id && (
                                        <div className="py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <a href="/company_profile/edit" type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
export default CompanyProfile;