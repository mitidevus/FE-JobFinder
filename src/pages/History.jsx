/* eslint-disable react/jsx-no-comment-textnodes */

import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/avt_img.png"
import Dropdown from "../components/Dropdown"
import { data } from "../data/history_eg"

import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { cvData } from "../data/CV.js";
import { jobData } from "../data/JobDetail.js";
import formatDate from "../utils/formatDate.js";
import splitTextWithLineBreaks from "../utils/splitTextWithLineBreaks.js";

function History() {
    const content = data
    const [selectedCv, setSelectedCv] = useState(null);

    // form logic here

    const handleCvClick = (cv) => {
        setSelectedCv(cv);
    };

    const handleCvClose = () => {
        setSelectedCv(null);
    };
    return (
        <section class="pt-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div class="w-full lg:w-4/12 px-4 mx-auto ">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div class="px-6">
                        <div class="text-center mt-12">
                            <h2 className="text-2xl font-bold mb-4">Applicant List</h2>

                            {!selectedCv && (
                                <div className="overflow-y-auto w-full h-64">
                                    <div className="flex flex-col">
                                        {cvData.map((cv) => (
                                            <button
                                                className="flex justify-between hover:bg-[#98D8AA] px-2 py-4 rounded-sm"
                                                key={cv.id}
                                                onClick={() => handleCvClick(cv)}
                                            >
                                                <p className="font-bold">{cv.title}</p>
                                                <p className="text-sm">{cv.createdAt}</p>
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
                                            <p className="font-bold">{selectedCv.title}</p>
                                            <p className="text-sm">{selectedCv.createdAt}</p>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <div className="flex items-center">
                                                <p className="font-bold">Name:</p>
                                                <Link to={`/profile/${selectedCv.id}`} className="ml-2 text-blue-500">
                                                    <p className="ml-2">{selectedCv.username}</p>
                                                </Link>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Email:</p>
                                                <p className="ml-2">{selectedCv.email}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Phone:</p>
                                                <p className="ml-2">{selectedCv.phone}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-bold">Address:</p>
                                                <p className="ml-2">{selectedCv.address}</p>
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
                                                <p className="ml-2">{selectedCv.cv}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedCv && (
                                <button className="bg-[#222831] text-white px-4 py-2 rounded mr-4 mt-4 mb-4" onClick={handleCvClose}>
                                    Back
                                </button>
                            )}
                            <div class="py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4 mb-4">
                                        <button type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</button>
                                    </div>
                                    <div class="w-full lg:w-9/12 px-4">
                                        <a href="/profile" type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} export default History;
