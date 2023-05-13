import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { GrCheckmark, GrClose, GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import { data } from "../data/Approve.js";
import { formatDateLeft } from "../utils/formatDate.js";
import splitTextWithLineBreaks from "../utils/splitTextWithLineBreaks.js";

function Approve() {
    const [jobs, setJobs] = useState(data);
    const [job, setJob] = useState(jobs[0] || {});

    // Click left button to change job
    const prevJob = () => {
        const index = jobs.findIndex((item) => item.id === job.id);
        if (index !== 0) {
            setJob(jobs[index - 1]);
        } else if (index === 0) {
            setJob(jobs[jobs.length - 1]);
        }
    };

    // Click right button to change job
    const nextJob = () => {
        const index = jobs.findIndex((item) => item.id === job.id);
        if (index !== jobs.length - 1) {
            setJob(jobs[index + 1]);
        } else if (index === jobs.length - 1) {
            setJob(jobs[0]);
        }
    };

    // Click approve button to approve job
    const handleApprove = () => {
        const index = jobs.findIndex((item) => item.id === job.id);
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
        setJob(newJobs[0] || "");
    };

    // Click reject button to reject job
    const handleReject = () => {
        const index = jobs.findIndex((item) => item.id === job.id);
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
        setJob(newJobs[0] || "");
    };

    return (
        <div name="jobdetail" className="w-full h-full bg-[#393E46] text-gray-300">
            <div className="py-[120px] flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4">
                        <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">Approve</p>
                    </div>
                </div>
                {job && (
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4 font-sans">
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
                            <div className="flex justify-center pt-6">
                                <button className="bg-[#FFF5E4] text-white mx-3 p-4 rounded-full" onClick={prevJob}>
                                    <GrFormPrevious size={"20px"} />
                                </button>

                                <button
                                    className="bg-[#7FB77E] text-white ml-10 mr-3 px-5 py-2 rounded-md"
                                    onClick={handleApprove}
                                >
                                    <GrCheckmark />
                                </button>

                                <button
                                    className="bg-[#da4167] text-white mr-10 ml-3 px-5 py-2 rounded-md"
                                    onClick={handleReject}
                                >
                                    <GrClose />
                                </button>

                                <button className="bg-[#FFF5E4] text-white mx-3 p-4 rounded-full" onClick={nextJob}>
                                    <GrFormNext size={"20px"} />
                                </button>
                            </div>
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
                                    <p className="ml-2">{formatDateLeft(new Date(job.deadline))}</p>
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
                )}

                {!job && (
                    <div className="flex justify-center items-center w-full h-full py-60">
                        <p className="text-3xl font-bold">No job to approve.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Approve;
