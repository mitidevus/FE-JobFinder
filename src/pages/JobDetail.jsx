/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { BiTimeFive, BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CgLockUnlock } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import { RxLockClosed } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { closeJobEmployer, deleteJob, getJob, openJobEmployer } from "../api/post/post.api.js";
import ApplyForm from "../components/ApplyForm.jsx";
import CVListForm from "../components/CVListForm.jsx";
import UpdateForm from "../components/UpdateForm.jsx";
import { selectUser } from "../features/userSlice.js";
import { formatDate, formatDateLeft } from "../utils/formatDate.js";
import { splitTextWithLineBreaks } from "../utils/splitTextWithLineBreaks.js";

function JobDetail() {
    const params = useParams();
    const jobId = params.jobId;
    const [job, setJob] = useState({});

    const [showCVList, setShowCVList] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showApply, setShowApply] = useState(false);

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    console.log(job)

    useEffect(() => {
        const fetchJob = async () => {
            const response = await getJob(jobId);
            setJob(response.data);
        };

        fetchJob();
    }, [jobId]);

    useEffect(() => {
        if (showCVList || showUpdate || showApply) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showCVList, showUpdate, showApply]);

    const handleClosePost = async () => {
        const confirm = window.confirm("Are you sure to close this job?");
        if (confirm) {
            try {
                await closeJobEmployer({ id: jobId, authToken: user?.token });
                alert("Close job successfully!");
                navigate("/myjobs");
            } catch (error) {
                console.log(error);
                alert("Failed to close job!");
            }
        }
    };

    const handleOpenPost = async () => {
        const confirm = window.confirm("Are you sure to open this job?");
        if (confirm) {
            try {
                await openJobEmployer({ id: jobId, authToken: user?.token });
                alert("Open job successfully!");
                navigate("/myjobs");
            } catch (error) {
                console.log(error);
                alert("Failed to open job!");
            }
        }
    };

    const handleDeletePost = async () => {
        const confirm = window.confirm("Are you sure to delete this job?");
        if (confirm) {
            try {
                await deleteJob({ id: jobId, authToken: user?.token });
                alert("Delete job successfully!");
                navigate("/myjobs");
            } catch (error) {
                console.log(error);
                alert("Failed to delete job!");
            }
        }
    };

    const handleApply = () => {
        if (!user) {
            alert("Please login to apply!");
            navigate("/signin");
        } else {
            setShowApply(true);
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
                                <div className="absolute top-0 right-[-600px]">
                                    {user?._id === job?.userId?._id && job?.status === 3 && job?.status !== 4 && (
                                        <button
                                            className="mr-2 p-2 bg-[#6DA9E4] text-white hover:opacity-90 rounded duration-200"
                                            onClick={() => setShowCVList(true)}
                                        >
                                            <RiFolderUserLine size={"30px"} />
                                        </button>
                                    )}
                                    {user?._id === job?.userId?._id && job?.status !== 1 && (
                                        <button
                                            className="mr-2 p-2 bg-[#F7D060] text-white hover:opacity-90 rounded duration-200"
                                            onClick={() => setShowUpdate(true)}
                                        >
                                            <HiPencil size={"30px"} />
                                        </button>
                                    )}
                                    {user?._id === job?.userId?._id && job?.status === 3 && (
                                        <button
                                            className="mr-2 p-2 bg-[#6D5D6E] text-white hover:opacity-90 rounded duration-200"
                                            onClick={handleClosePost}
                                        >
                                            <RxLockClosed size={"30px"} />
                                        </button>
                                    )}
                                    {user?._id === job?.userId?._id && job?.status === 4 && (
                                        <button
                                            className="mr-2 p-2 bg-[#00ADB5] text-white hover:opacity-90 rounded duration-200"
                                            onClick={handleOpenPost}
                                        >
                                            <CgLockUnlock size={"30px"} />
                                        </button>
                                    )}
                                    {user?._id === job?.userId?._id && (
                                        <button
                                            className="p-2 bg-[#da4167] text-white hover:opacity-90 rounded duration-200"
                                            onClick={handleDeletePost}
                                        >
                                            <AiOutlineDelete size={"30px"} />
                                        </button>
                                    )}
                                </div>
                            </div>
                            {showCVList && <CVListForm jobId={jobId} onClose={() => setShowCVList(false)} />}
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
                                    alt={job?.userId?.companyName}
                                    className="mt-3 w-60 h-60 rounded"
                                />
                            </div>
                            <div className="flex justify-center pt-4 pb-2">
                                <Link to={`/company_profile/${job?.userId?._id}`}>
                                    <p className="text-3xl text-center hover:text-[#00ADB5]">
                                        {job?.userId?.companyName}
                                    </p>
                                </Link>
                            </div>
                            <p>{job?.userId?.description}</p>
                        </div>
                        <div>
                            <div className="text-base">
                                {job?.status === 4 && (
                                    <div className="flex mb-2">
                                        <p className="text-2xl font-semibold">Status:</p>
                                        <p className="text-2xl first-letter:ml-2 font-semibold text-[#F7D060]">
                                            Closed
                                        </p>
                                    </div>
                                )}
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
                                <p className="">{splitTextWithLineBreaks(job?.jobRequirement?.[0])}</p>

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

                                {job?.status !== 4 && job?.userId?._id !== user?._id && user?.userType !== 1 && (
                                    <button
                                        className="mt-4 w-[150px] bg-[#1B9C85] text-white py-2 px-3 rounded hover:opacity-90"
                                        onClick={handleApply}
                                    >
                                        Apply
                                    </button>
                                )}

                                {job?.status !== 4 &&
                                    job?.userId?._id !== user?._id &&
                                    user?.userType !== 1 &&
                                    showApply && (
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
