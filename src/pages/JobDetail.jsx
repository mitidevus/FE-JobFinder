/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive, BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCVByPostId } from "../api/cv/cv.api.js";
import { getJob } from "../api/post/post.api.js";
import { selectUser } from "../features/userSlice.js";
import { formatDate, formatDateLeft, formatDateTime } from "../utils/formatDate.js";
import splitTextWithLineBreaks from "../utils/splitTextWithLineBreaks.js";
import { sendEmail } from "../api/email/email.api.js";

function FormModal({ cvData, onClose }) {
    const [selectedCv, setSelectedCv] = useState(null);
    const [invite, setInvite] = useState(false);
    const [subjectEmail, setSubjectEmail] = useState("");
    const [timeEmail, setTimeEmail] = useState("");
    const [addressEmail, setAddressEmail] = useState();
    const [messageEmail, setMessageEmail] = useState("");

    // form logic here
    const handleCvClick = (cv) => {
        setSelectedCv(cv);
    };

    const handleCvClose = () => {
        setSelectedCv(null);
    };

    const handleInviteClose = () => {
        setInvite(false);
    };

    const handleInvite = async (e) => {
        e.preventDefault();
        if (!subjectEmail || !messageEmail) {
            return alert("Please fill all fields!");
        }

        const data = {
            subject: subjectEmail,
            message: messageEmail,
            time: timeEmail,
            address: addressEmail,
            toEmail: selectedCv.email,
        };

        try {
            await sendEmail(data).then((res) => {
                alert("Email sent successfully!");
            });
        } catch (error) {
            alert("Email sent failed!");
            console.log(error);
        }
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
            <div className="w-[600px] bg-white rounded-lg p-8 max-w-[1100px]">
                <div className="relative flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Applicant List</h2>

                    <button
                        className="absolute top-[-16px] right-[-16px] bg-[#da4167] text-white px-3 py-1 font-bold rounded"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                {!selectedCv && (
                    <div className="overflow-y-auto w-full h-64 font-sans">
                        <div className="flex flex-col">
                            {cvData &&
                                cvData.map((cv) => (
                                    <button
                                        className="flex justify-between hover:bg-[#98D8AA] px-2 py-4 rounded-sm"
                                        key={cv._id}
                                        onClick={() => handleCvClick(cv)}
                                    >
                                        <p className="font-bold">{cv.title}</p>
                                        <p className="text-sm">{formatDateTime(cv.createdAt)}</p>
                                    </button>
                                ))}

                            {cvData === null && (
                                <div className="flex justify-center items-center h-64">
                                    <p className="text-2xl font-bold">No CVs</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Render CV detail */}
                {selectedCv && !invite && (
                    <div className="overflow-y-auto w-full h-64 font-sans">
                        <div className="flex flex-col">
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{selectedCv.title}</p>
                                <p className="text-sm">{formatDateTime(selectedCv.createdAt)}</p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center">
                                    <p className="font-bold">Status:</p>
                                    {selectedCv.status === 1 && (
                                        <p className="ml-2 font-semibold text-[#00ADB5]">Pending</p>
                                    )}
                                    {selectedCv.status === 2 && (
                                        <p className="ml-2 font-semibold text-[#D14D72]">Rejected</p>
                                    )}
                                    {selectedCv.status === 3 && (
                                        <p className="ml-2 font-semibold text-[#8F43EE]">Interested</p>
                                    )}
                                    {selectedCv.status === 4 && (
                                        <p className="ml-2 font-semibold text-[#98D8AA]">Invited</p>
                                    )}
                                </div>
                                <div className="flex flex-row mt-2">
                                    <div className="w-5/12">
                                        <p className="font-bold">Name</p>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="border-2 border-gray-300 rounded-md p-2"
                                            value={selectedCv.username}
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                    <div className="w-7/12">
                                        <p className="font-bold">Email</p>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                                            value={selectedCv.email}
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <div className="w-5/12">
                                        <p className="font-bold">Phone</p>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="border-2 border-gray-300 rounded-md p-2"
                                            value={selectedCv.phone}
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                    <div className="w-7/12">
                                        <p className="font-bold">Address</p>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                                            value={selectedCv.address}
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="font-bold">Description</p>
                                    <textarea
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                                        value={selectedCv.description}
                                        rows={5}
                                        readOnly
                                        disabled
                                    />
                                </div>

                                <div className="mt-2">
                                    <p className="font-bold">CV</p>
                                    <input
                                        type="text"
                                        name="cv"
                                        id="cv"
                                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                                        value={selectedCv.CVFileURL}
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedCv && invite && (
                    <div className="overflow-y-auto w-full h-64 font-sans">
                        <div className="flex flex-col">
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{selectedCv.title}</p>
                                <p className="text-sm">{formatDateTime(selectedCv.createdAt)}</p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    placeholder="Subject"
                                    required
                                    onChange={(e) => setSubjectEmail(e.target.value)}
                                />

                                <div className="flex justify-between items-center mt-4">
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="border-2 border-gray-300 rounded-md p-2 w-3/5 mr-3"
                                        placeholder="Address"
                                        required
                                        onChange={(e) => setAddressEmail(e.target.value)}
                                    />
                                    <input
                                        type="date"
                                        name="time"
                                        id="time"
                                        className="border-2 border-gray-300 rounded-md p-2 w-2/5"
                                        required
                                        onChange={(e) => setTimeEmail(e.target.value)}
                                    />
                                </div>

                                <textarea
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="border-2 border-gray-300 rounded-md p-2 mt-4"
                                    placeholder="Message"
                                    required
                                    rows={10}
                                    onChange={(e) => setMessageEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-end mt-8">
                    {selectedCv && !invite && (
                        <>
                            <button className="bg-[#B7B7B7] text-white px-4 py-2 rounded mr-4" onClick={handleCvClose}>
                                Back
                            </button>
                            {selectedCv.status === 1 && (
                                <button
                                    className="bg-[#A4D0A4] text-white px-4 py-2 rounded mr-4"
                                    onClick={() => setInvite(true)}
                                >
                                    Invite
                                </button>
                            )}
                        </>
                    )}
                    {selectedCv && invite && (
                        <>
                            <button
                                className="bg-[#B7B7B7] text-white px-4 py-2 rounded mr-4"
                                onClick={handleInviteClose}
                            >
                                Back
                            </button>
                            <button className="bg-[#00ADB5] text-white px-4 py-2 rounded mr-4" onClick={handleInvite}>
                                Send
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function ApplyForm({ jobId, onClose }) {
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleApply = () => {
        if (!description || !file) {
            return alert("Please fill all fields!");
        }

        const formData = new FormData();
        formData.append("description", description);
        formData.append("file", file);
        formData.append("postId", jobId);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
            <div className="w-[600px] bg-white rounded-lg p-8 max-w-[1100px]">
                <div className="relative flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Upload your CV</h2>

                    <button
                        className="absolute top-[-16px] right-[-16px] bg-[#da4167] text-white px-3 py-1 font-bold rounded"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <div className="overflow-y-auto w-full h-64 font-sans">
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-4">
                            <div className="mt-2">
                                {/* Attached File */}
                                <div className="flex justify-between items-center">
                                    <p className="font-bold">{file ? file.name : "No file"}</p>
                                    <label
                                        htmlFor="file"
                                        className="bg-[#00ADB5] text-white px-4 py-2 rounded cursor-pointer"
                                    >
                                        Choose File
                                    </label>
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        className="hidden"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="font-bold">Description</p>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                                    rows={5}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-8">
                    <button className="bg-[#A4D0A4] text-white px-4 py-2 rounded mr-4" onClick={handleApply}>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}

function JobDetail() {
    const params = useParams();
    const jobId = params.jobId;
    const [showModal, setShowModal] = useState(false);
    const [job, setJob] = useState({});
    const [cvData, setCvData] = useState([]);
    const [showApply, setShowApply] = useState(false);

    const user = useSelector(selectUser);

    useEffect(() => {
        getJob(jobId).then((res) => {
            setJob(res.data);
        });
    }, [jobId]);

    useEffect(() => {
        if (showApply || showModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showApply, showModal]);

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
                                    <button
                                        className="absolute top-0 right-[-600px] ml-4 p-2 bg-[#6DA9E4] text-white hover:opacity-90 rounded duration-200"
                                        onClick={() => setShowModal(true)}
                                    >
                                        <RiFolderUserLine size={"30px"} />
                                    </button>
                                )}
                            </div>
                            {showModal && <FormModal cvData={cvData} onClose={() => setShowModal(false)} />}
                        </div>
                    </div>
                    <div className="max-w-[1100px] w-full grid sm:grid-cols-2 gap-10 px-4 font-sans">
                        <div className="text-1xl px-3">
                            <div className="flex justify-center">
                                <img
                                    src={job.userId?.avatar}
                                    alt={job.userId?.__t}
                                    className="mt-3 w-60 h-60 rounded"
                                />
                            </div>
                            <div className="flex justify-center pt-4 pb-2">
                                <Link to={`/company_profile/${job?.userId?._id}`}>
                                    <p className="text-3xl text-center hover:text-[#00ADB5]">{job.userId?.__t}</p>
                                </Link>
                            </div>
                            <p>{job?.userId?.description}</p>
                        </div>
                        <div>
                            <div className="text-base">
                                <p className="text-4xl font-bold text-pink-500">{job.title}</p>
                                <p className="text-2xl pt-4 font-bold">Information</p>
                                <div className="flex items-center">
                                    <div title="Position">
                                        <BiUser />
                                    </div>
                                    <p className="ml-2">{job.position}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Address">
                                        <IoLocationOutline />
                                    </div>
                                    <p className="ml-2">{job.address}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Post Date">
                                        <MdOutlineCalendarMonth />
                                    </div>
                                    <p className="ml-2">{formatDate(new Date(job.createdAt))}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Deadline">
                                        <BiTimeFive />
                                    </div>
                                    <p className="ml-2">{formatDateLeft(new Date(job.expiredDate))}</p>
                                </div>
                                <div className="flex items-center">
                                    <div title="Salary">
                                        <TbMoneybag />
                                    </div>
                                    <p className="ml-2">{job.salary} $</p>
                                </div>

                                <p className="text-2xl pt-4 font-bold">Description</p>
                                <p className="">{splitTextWithLineBreaks(job.description)}</p>

                                <p className="text-2xl pt-4 font-bold">Requirements</p>
                                <p className="">{splitTextWithLineBreaks(job.jobRequirement)}</p>

                                <p className="text-2xl pt-4 font-bold">Contact</p>
                                <div className="flex items-center mt-1">
                                    <AiOutlineMail />
                                    <a className="ml-2 text-pink-600" href={`mailto:${job.userId?.email}`}>
                                        {/* {job.userId?.email} */}
                                        123@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center mt-1">
                                    <BsTelephone />
                                    {/* <p className="ml-2">{job.userId?.phone}</p> */}
                                    <p className="ml-2">0344043493</p>
                                </div>

                                <button
                                    className="mt-4 w-[150px] bg-[#1B9C85] text-white py-2 px-3 rounded hover:opacity-90"
                                    onClick={() => setShowApply(true)}
                                >
                                    Apply
                                </button>

                                {showApply && <ApplyForm jobId={job._id} onClose={() => setShowApply(false)} />}
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
