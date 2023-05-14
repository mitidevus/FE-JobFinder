/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { BiTimeFive, BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCVByPostId } from "../api/cv/cv.api.js";
import { closeJob, getJob } from "../api/post/post.api.js";
import { selectUser } from "../features/userSlice.js";
import { formatDate, formatDateLeft } from "../utils/formatDate.js";
import splitTextWithLineBreaks from "../utils/splitTextWithLineBreaks.js";
import ApplyForm from "../components/ApplyForm.jsx";
import CVListForm from "../components/CVListForm.jsx";
import { HiPencil } from "react-icons/hi";
import { RxLockClosed } from "react-icons/rx";
import UpdateForm from "../components/UpdateForm.jsx";
import { deleteJob } from "../api/post/post.api.js";

function JobDetail() {
    const params = useParams();
    const jobId = params.jobId;
    const [job, setJob] = useState({});
    const [cvData, setCvData] = useState([]);

    const [showCVList, setShowCVList] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showApply, setShowApply] = useState(false);

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        getJob(jobId).then((res) => {
            setJob(res.data);
        });
    }, [jobId]);

    useEffect(() => {
        if (showCVList || showUpdate || showApply) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showCVList, showUpdate, showApply]);

    // useEffect(() => {
    //     if (!user) return;
    //     try {
    //         getCVByPostId({ postId: jobId, authToken: user?.token }).then((res) => {
    //             setCvData(res.data);
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [jobId]);

    const handleClosePost = () => {
        const confirm = window.confirm("Are you sure to close this job?");
        if (confirm) {
            closeJob(jobId, user?.token)
                .then((res) => {
                    console.log(res.data);
                    navigate(`/`);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleDeletePost = () => {
        const confirm = window.confirm("Are you sure to delete this job?");
        if (confirm) {
            deleteJob(jobId, user?.token)
                .then((res) => {
                    console.log(res.data);
                    navigate(`/`);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    if (job) {
        return (
            <div name="jobdetail" className="w-full h-full bg-[#393E46] text-gray-300 overflow-hidden">
                <div className="pt-[120px] pb-[50px] flex flex-col justify-center items-center w-full h-full">
                    <div className="max-w-[1100px] w-full grid grid-cols-2 gap-8">
                        <div className="pb-8 pl-4">
                            <div className="relative flex justify-between items-center">
                                <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                                    Job Detail
                                </p>
                                {user?._id === job?.userId?._id && (
                                    <div className="absolute top-0 right-[-600px]">
                                        <button
                                            className="mr-2 p-2 bg-[#6DA9E4] text-white hover:opacity-90 rounded duration-200"
                                            onClick={() => setShowCVList(true)}
                                        >
                                            <RiFolderUserLine size={"30px"} />
                                        </button>

                                        <button
                                            className="mr-2 p-2 bg-[#F7D060] text-white hover:opacity-90 rounded duration-200"
                                            onClick={() => setShowUpdate(true)}
                                        >
                                            <HiPencil size={"30px"} />
                                        </button>

                                        <button
                                            className="mr-2 p-2 bg-[#6D5D6E] text-white hover:opacity-90 rounded duration-200"
                                            onClick={handleClosePost}
                                        >
                                            <RxLockClosed size={"30px"} />
                                        </button>

                                        <button
                                            className="p-2 bg-[#da4167] text-white hover:opacity-90 rounded duration-200"
                                            onClick={handleDeletePost}
                                        >
                                            <AiOutlineDelete size={"30px"} />
                                        </button>
                                    </div>
                                )}
                            </div>
                            {showCVList && <CVListForm cvData={cvData} onClose={() => setShowCVList(false)} />}
                            {showUpdate && (
                                <UpdateForm job={job} authToken={user?.token} onClose={() => setShowUpdate(false)} />
                            )}
                        </div>
                    </div>
                    <div className="max-w-[1100px] w-full grid sm:grid-cols-2 gap-10 px-4 font-sans">
                        <div className="text-1xl px-3">
                            <div className="flex justify-center">
                                <img
                                    src={job?.userId?.avatar}
                                    alt={job?.userId?.__t}
                                    className="mt-3 w-60 h-60 rounded"
                                />
                            </div>
                            <div className="flex justify-center pt-4 pb-2">
                                <Link to={`/company_profile/${job?.userId?._id}`}>
                                    <p className="text-3xl text-center hover:text-[#00ADB5]">{job?.userId?.__t}</p>
                                </Link>
                            </div>
                            <p>{job?.userId?.description}</p>
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

                                <button
                                    className="mt-4 w-[150px] bg-[#1B9C85] text-white py-2 px-3 rounded hover:opacity-90"
                                    onClick={() => setShowApply(true)}
                                >
                                    Apply
                                </button>

                                {showApply && (
                                    <ApplyForm
                                        jobId={job?._id}
                                        authToken={user?.token}
                                        onClose={() => setShowApply(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        <div>
            <p>Loading...</p>
        </div>;
    }
}

export default JobDetail;
