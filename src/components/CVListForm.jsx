import React, { useEffect, useState } from "react";
import { formatDateTime } from "../utils/formatDate.js";
import { sendEmail } from "../api/email/email.api.js";
import { AiOutlineDownload } from "react-icons/ai";
import { getCVByPostId, inviteCV } from "../api/cv/cv.api.js";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";

function CVListForm({ jobId, onClose }) {
    const [CVList, setCVList] = useState([]);
    const [selectedCv, setSelectedCv] = useState(null);
    const [invite, setInvite] = useState(false);
    const [subjectEmail, setSubjectEmail] = useState("");
    const [timeEmail, setTimeEmail] = useState("");
    const [addressEmail, setAddressEmail] = useState();
    const [messageEmail, setMessageEmail] = useState("");
    const [isInvited, setIsInvited] = useState(false);
    const [filter, setFilter] = useState(1);

    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchCvData = async () => {
            try {
                const response = await getCVByPostId({ postId: jobId, authToken: user?.token });
                setCVList(response.data);
                setIsInvited(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (user) {
            fetchCvData();
        }
    }, [jobId, user, isInvited]);

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
            const emailPromise = sendEmail(data);
            const invitePromise = inviteCV({ id: selectedCv?._id, authToken: user?.token });

            await Promise.all([emailPromise, invitePromise]);

            alert("Emails sent successfully!");
            setInvite(false);
            setSelectedCv(null);
            setIsInvited(true);
        } catch (error) {
            alert("Email sent failed!");
            console.log(error);
        }
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
            <div className="w-[600px] bg-white rounded-lg p-8 max-w-[1100px]">
                <div className="relative flex justify-between items-center">
                    <div className="flex justify-between items-center mb-4 w-full">
                        <span className="text-2xl font-bold">Applicant List</span>
                        <select
                            className="border border-gray-400 text-black py-1 px-1 rounded-lg mr-10"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="1">Pending</option>
                            <option value="2">Rejected</option>
                            <option value="4">Invited</option>
                        </select>
                    </div>

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
                            {CVList &&
                                CVList.map((cv) => (
                                    <button
                                        className="flex justify-between hover:bg-[#98D8AA] px-2 py-4 rounded-sm"
                                        key={cv?._id}
                                        onClick={() => setSelectedCv(cv)}
                                    >
                                        <p className="font-bold">Truong Chi Hien</p>
                                        <p className="text-sm">{formatDateTime(cv?.createdAt)}</p>
                                    </button>
                                ))}

                            {CVList === null && (
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
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <p className="font-bold">Status:</p>
                                        {selectedCv?.status === 1 && (
                                            <p className="ml-2 font-semibold text-[#00ADB5]">Pending</p>
                                        )}
                                        {selectedCv?.status === 2 && (
                                            <p className="ml-2 font-semibold text-[#D14D72]">Rejected</p>
                                        )}
                                        {selectedCv?.status === 3 && (
                                            <p className="ml-2 font-semibold text-[#8F43EE]">Interested</p>
                                        )}
                                        {selectedCv?.status === 4 && (
                                            <p className="ml-2 font-semibold text-[#98D8AA]">Invited</p>
                                        )}
                                    </div>
                                    <div className="mr-2">
                                        <a href={selectedCv?.CVFileURL} target="_blank" rel="noopener noreferrer">
                                            <div className="flex items-center text-[#6DA9E4]">
                                                <AiOutlineDownload size={"20px"} />
                                                <span className="font-semibold ml-1">Download CV</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-2">
                                    <div className="w-5/12">
                                        <p className="font-bold">Name</p>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="border-2 border-gray-300 rounded-md p-2"
                                            // value={selectedCv?.username}
                                            value="Do Minh Tri"
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
                                            // value={selectedCv?.email}
                                            value="minhtri.2410@gmail.com"
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
                                            // value={selectedCv?.phone}
                                            value="0344043493"
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
                                            // value={selectedCv?.address}
                                            value="227 Nguyen Van Cu, District 5, Ho Chi Minh City"
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
                                        value={selectedCv?.description}
                                        rows={5}
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
                            <button
                                className="bg-[#B7B7B7] text-white px-4 py-2 rounded mr-4"
                                onClick={() => setSelectedCv(null)}
                            >
                                Back
                            </button>
                            {selectedCv?.status === 1 && (
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
                                onClick={() => setInvite(false)}
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

export default CVListForm;
