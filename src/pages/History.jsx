/* eslint-disable react/jsx-no-comment-textnodes */

import { data } from "../data/history_eg";
import { AiOutlineDownload } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cvData } from "../data/CV.js";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { getCVByUserId } from "../api/cv/cv.api"
import { getJob } from "../api/post/post.api"
import {formatDate} from "../utils/formatDate"
function History() {
    const user = useSelector(selectUser);
    const [cv, setCV] = useState([]);
    const [selectedCv, setSelectedCv] = useState(null);


    React.useEffect(() => {
        getCVByUserId(user._id, user?.token).then((res) => {
            setCV(res.data);
        });

    }, []);
    // form logic here

    const handleCvClick = (cv) => {
        setSelectedCv(cv);
    };

    const handleCvClose = () => {
        setSelectedCv(null);
    };
    function getTitle(id) {
        return getJob(id)
    }
    return (
        <section className="pt-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div className="w-full lg:w-5/12 px-4 mx-auto ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="text-center mt-12">
                            <h2 className="text-2xl font-bold mb-4">CV</h2>

                            {!selectedCv && (
                                <div className="overflow-y-auto w-full h-64">
                                    <div className="flex flex-col">
                                        {cv.map((cv) => (
                                            <button
                                                className="flex justify-between hover:bg-[#98D8AA] px-2 py-4 rounded-sm"
                                                key={cv._id}
                                                onClick={() => handleCvClick(cv)}
                                            >
                                                <p className="font-bold">{cv.postId.title} - {cv.postId.userId.companyName}</p>
                                                {cv.status === 1 && (
                                                    <p>Pending</p>
                                                )}
                                                {cv.status === 2 && (
                                                    <p>Rejected</p>
                                                )}
                                                {cv.status === 3 && (
                                                    <p>Approved</p>
                                                )}
                                                {cv.status === 4 && (
                                                    <p>Invited</p>
                                                )}
                                                <p className="text-sm">{formatDate(`${cv.createdAt}`)}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Render CV detail */}
                            {selectedCv && (
                                <div className="overflow-y-auto w-full h-64">
                                    <div className="flex flex-col">
                                        <div className="flex justify-between px-2 py-4">
                                            <p className="font-bold">{selectedCv.postId.title}</p>
                                            <p className="text-sm">{formatDate(`${selectedCv.createdAt}`)}</p>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <div className="flex items-center">
                                                <p className="font-bold">Name:</p>
                                                <Link to={`/profile/${selectedCv.userId._id}`} className="ml-2 text-blue-500">
                                                    <p className="ml-2">{selectedCv.userId.name}</p>
                                                </Link>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Email:</p>
                                                <p className="ml-2">{selectedCv.userId.email}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Phone:</p>
                                                <p className="ml-2">{selectedCv.userId.phone}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Address:</p>
                                                <p className="ml-2">{selectedCv.userId.address}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="font-bold">Description:</p>
                                                <p className="ml-2">{selectedCv.description}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Status:</p>
                                                <p className="ml-2">{selectedCv.status}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">CV:</p>

                                                <div className="ml-2">
                                                    <a href={selectedCv?.CVFileURL} target="_blank" rel="noopener noreferrer">
                                                        <div className="flex items-center text-[#6DA9E4]">
                                                            <AiOutlineDownload size={"20px"} />
                                                            <span className="font-semibold ml-1">Download CV</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedCv && (
                                <button
                                    className="bg-[#222831] text-white px-4 py-2 rounded mr-4 mt-4 mb-4"
                                    onClick={handleCvClose}
                                >
                                    Back
                                </button>
                            )}
                            <div className="py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <a
                                            href={"/profile/" + user._id}
                                            type="submit"
                                            className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default History;
