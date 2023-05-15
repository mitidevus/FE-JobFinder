import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive, BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { GrCheckmark, GrClose, GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatDate, formatDateLeft } from "../utils/formatDate.js";
import splitTextWithLineBreaks from "../utils/splitTextWithLineBreaks.js";
import { getUnApprovedJobs } from "../api/post/post.api.js";
import { selectUser } from "../features/userSlice.js";
import { useSelector } from "react-redux";
import { TbMoneybag } from "react-icons/tb";
import { approvePost } from "../api/post/post.api.js";
import { rejectPost } from "../api/post/post.api.js";

function Approve() {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState(jobs[0] || {});

    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await getUnApprovedJobs({ authToken: user?.token });
                console.log(res.data.posts);
                setJobs(res.data.posts);
                setJob(res.data.posts[0] || {});
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, []);

    // Click left button to change job
    const prevJob = () => {
        const index = jobs.findIndex((item) => item?._id === job?._id);
        if (index !== 0) {
            setJob(jobs[index - 1]);
        } else if (index === 0) {
            setJob(jobs[jobs.length - 1]);
        }
    };

    // Click right button to change job
    const nextJob = () => {
        const index = jobs.findIndex((item) => item?._id === job?._id);
        if (index !== jobs.length - 1) {
            setJob(jobs[index + 1]);
        } else if (index === jobs.length - 1) {
            setJob(jobs[0]);
        }
    };

    // Click approve button to approve job
    const handleApprove = async () => {
        try {
            await approvePost({ id: job?._id, authToken: user?.token });
            console.log("Job approved successfully.");

            const index = jobs.findIndex((item) => item?._id === job?._id);
            const newJobs = [...jobs];
            newJobs.splice(index, 1);
            setJobs(newJobs);
            setJob(newJobs[0] || "");
        } catch (error) {
            console.error("Failed to approve job:", error);
        }
    };

    // Click reject button to reject job
    const handleReject = async () => {
        try {
            await rejectPost({ id: job?._id, authToken: user?.token });
            console.log("Job rejected successfully.");

            const index = jobs.findIndex((item) => item?._id === job?._id);
            const newJobs = [...jobs];
            newJobs.splice(index, 1);
            setJobs(newJobs);
            setJob(newJobs[0] || "");
        } catch (error) {
            console.error("Failed to approve job:", error);
        }
    };

    return (
        <div name="jobdetail" className="w-full h-full bg-[#393E46] text-gray-300">
            <div className="py-[120px] flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="flex items-center justify-between pb-8 pl-4">
                        <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">Approve</p>

                        <select
                            className="font-bold border border-gray-400 text-black py-2 px-2 rounded-lg mr-10"
                            // value={filter}
                            // onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="1">Pending</option>
                            <option value="2">Rejected</option>
                            <option value="3">Approved</option>
                        </select>
                    </div>
                </div>
                {job && (
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4 font-sans">
                        <div className="text-1xl px-3">
                            <div className="flex justify-center">
                                <img
                                    src={job?.userId?.avatar}
                                    alt={job?.userId?.companyName}
                                    className="mt-3 w-60 h-60 rounded"
                                />
                            </div>
                            <div className="flex justify-center pt-4 pb-2">
                                <Link to={`/company_profile/${job?.userId?._id}`}>
                                    <p className="text-3xl">{job?.userId?.companyName}</p>
                                </Link>
                            </div>
                            <p>{job?.userId?.description}</p>
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
                                <p className="text-4xl font-bold text-pink-500">{job?.title}</p>
                                <p className="text-2xl pt-4 font-bold">Information</p>
                                <div className="flex items-center">
                                    <div title="Position">
                                        <BiUser />
                                    </div>
                                    <p className="ml-2">{job?.position}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Address">
                                        <IoLocationOutline />
                                    </div>
                                    <p className="ml-2">{job?.address}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Post Date">
                                        <MdOutlineCalendarMonth />
                                    </div>
                                    <p className="ml-2">{formatDate(new Date(job?.createdAt))}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Deadline">
                                        <BiTimeFive />
                                    </div>
                                    <p className="ml-2">{formatDateLeft(new Date(job?.expiredDate))}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Salary">
                                        <TbMoneybag />
                                    </div>
                                    <p className="ml-2">{job?.salary} $</p>
                                </div>

                                <p className="text-2xl pt-4 font-bold">Description</p>
                                <p className="">{splitTextWithLineBreaks(job?.description)}</p>

                                <p className="text-2xl pt-4 font-bold">Requirements</p>
                                <p className="">{splitTextWithLineBreaks(job?.jobRequirement)}</p>

                                <p className="text-2xl pt-4 font-bold">Contact</p>
                                <div className="flex items-center mt-1">
                                    <AiOutlineMail />
                                    <a className="ml-2 text-pink-600" href={`mailto:${job?.userId?.email}`}>
                                        {job?.userId?.email}
                                    </a>
                                </div>
                                <div className="flex items-center mt-1">
                                    <BsTelephone />
                                    <p className="ml-2">{job?.userId?.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!job && (
                    <div className="flex justify-center items-center w-full h-full py-60">
                        <p className="text-2xl font-bold">No jobs to approve</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Approve;
