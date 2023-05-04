/* eslint-disable react/jsx-no-comment-textnodes */
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

// function FormModal({ onClose }) {
//     // form logic here

//     return (
//         <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
//             <div className="w-[600px] bg-white rounded-lg p-8 max-w-[1100px]">
//                 <h2 className="text-2xl font-bold mb-4">Applicant List</h2>
//                 {/* Render CV list */}
//                 <div className="overflow-y-auto w-full h-64">
//                     <div className="flex flex-col">
//                         {cvData.map((cv) => (
//                             <button
//                                 className="flex justify-between hover:bg-[#98D8AA] px-2 py-4 rounded-sm"
//                                 key={cv.id}
//                             >
//                                 <p className="font-bold">{cv.title}</p>
//                                 <p className="text-sm">{cv.createdAt}</p>
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex justify-end mt-8">
//                     <button className="bg-[#da4167] text-white px-4 py-2 rounded" onClick={onClose}>
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

function FormModal({ onClose }) {
    const [selectedCv, setSelectedCv] = useState(null);

    // form logic here

    const handleCvClick = (cv) => {
        setSelectedCv(cv);
    };

    const handleCvClose = () => {
        setSelectedCv(null);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
            <div className="w-[600px] bg-white rounded-lg p-8 max-w-[1100px]">
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

                <div className="flex justify-end mt-8">
                    {selectedCv && (
                        <button className="bg-[#da4167] text-white px-4 py-2 rounded mr-4" onClick={handleCvClose}>
                            Back
                        </button>
                    )}
                    <button className="bg-[#da4167] text-white px-4 py-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

function JobDetail() {
    const params = useParams();
    const jobId = params.jobId;
    const jobs = jobData;
    const job = jobs.find((job) => job.id === Number(jobId));
    const [showModal, setShowModal] = useState(false);

    return (
        <div name="jobdetail" className="w-full h-full bg-[#393E46] text-gray-300">
            <div className="pt-[120px] pb-[50px] flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4">
                        <div className="flex items-center">
                            <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                                Job Detail
                            </p>
                            <button
                                className="ml-4 text-white p-2 hover:bg-[#6DA9E4] hover:text-[#F6BA6F] rounded-full duration-200"
                                onClick={() => setShowModal(true)}
                            >
                                <RiFolderUserLine size={"30px"} />
                            </button>
                        </div>
                        {showModal && <FormModal onClose={() => setShowModal(false)} />}
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4">
                    <div className="text-1xl px-3">
                        <div className="flex justify-center">
                            <img src={job.image} alt={job.company} className="mt-3 w-60 h-60 rounded" />
                        </div>
                        <div className="flex justify-center pt-4 pb-2">
                            <Link to={`/company/${job.companyId}`}>
                                <p className="text-3xl">{job.company}</p>
                            </Link>
                        </div>
                        <p>Agile, Innovative & Excellent Global Technology Company with deep roots in Vietnam</p>
                    </div>
                    <div>
                        <div className="text-base">
                            <p className="text-4xl font-bold text-pink-500">{job.title}</p>
                            <div className="flex items-center">
                                <IoLocationOutline />
                                <p className="ml-2">{job.address}</p>
                            </div>
                            <div className="flex items-center">
                                <MdOutlineCalendarMonth />
                                <p className="ml-2">{job.createdAt}</p>
                            </div>
                            <div className="flex items-center">
                                <BiTimeFive />
                                <p className="ml-2">{formatDate(new Date(job.deadline))}</p>
                            </div>

                            <p className="text-2xl pt-4 font-bold">Description</p>
                            <p className="">{splitTextWithLineBreaks(job.description)}</p>
                            <p className="font-bold">Salary: {job.salary} $</p>

                            <p className="text-2xl pt-4 font-bold">Requirements</p>
                            <p className="">{splitTextWithLineBreaks(job.requirements)}</p>

                            <p className="text-2xl pt-4 font-bold">Contact</p>
                            <div className="flex items-center">
                                <AiOutlineMail />
                                <p className=""></p>
                                <a className="ml-2 text-pink-600" href={`mailto:${job.contactEmail}`}>
                                    {job.contactEmail}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <BsTelephone />
                                <p className="ml-2">{job.contactPhone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetail;
