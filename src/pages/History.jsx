import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCVByUserId } from "../api/cv/cv.api";
import { selectUser } from "../features/userSlice";
import { formatDateTime } from "../utils/formatDate.js";
import { handleTitle } from "../utils/handleTitle.js";

function History() {
    const user = useSelector(selectUser);
    const [CVList, setCVList] = useState([]);
    const [selectedCv, setSelectedCv] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCVByUserId(user?._id, user?.token);
                setCVList(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [user?._id, user?.token]);

    return (
        <section className="py-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div className="w-full max-w-[600px] px-4 mx-auto ">
                <div className="relative flex flex-col bg-white w-full shadow-xl rounded-lg mt-16  mb-6">
                    <div className="px-6 my-8">
                        <h2 className="text-2xl font-bold mb-4">Your submitted CV</h2>

                        {/* Render CV List */}
                        {!selectedCv && (
                            <div className="overflow-y-auto w-full h-64 font-sans">
                                <div className="flex flex-col">
                                    {CVList &&
                                        CVList.map((cv) => (
                                            <button
                                                className="flex justify-between hover:bg-[#B4E4FF] px-2 py-4 rounded-sm"
                                                key={cv?._id}
                                                onClick={() => setSelectedCv(cv)}
                                            >
                                                <div className="flex flex-col items-start">
                                                    <Link to={`/job/${cv?.postId?._id}`}>
                                                        <p className="font-bold hover:text-[#00ADB5]">
                                                            {handleTitle(cv?.postId?.title, 30)}
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        to={`/company_profile/${cv?.postId?.userId?._id}`}
                                                        className="flex items-center hover:text-[#00ADB5]"
                                                    >
                                                        <BiUser />
                                                        <p className="ml-2 font-bold">
                                                            {cv?.postId?.userId?.companyName}
                                                        </p>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    {cv?.status === 1 && (
                                                        <p className="ml-2 font-semibold text-[#00ADB5]">Pending</p>
                                                    )}
                                                    {cv?.status === 2 && (
                                                        <p className="ml-2 font-semibold text-[#D14D72]">Rejected</p>
                                                    )}
                                                    {cv?.status === 3 && (
                                                        <p className="ml-2 font-semibold text-[#8F43EE]">Approved</p>
                                                    )}
                                                    {cv?.status === 4 && (
                                                        <p className="ml-2 font-semibold text-[#98D8AA]">Invited</p>
                                                    )}
                                                    <p className="text-sm">{formatDateTime(cv?.createdAt)}</p>
                                                </div>
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
                        {selectedCv && (
                            <div className="w-full h-full font-sans">
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
                                                    <p className="ml-2 font-semibold text-[#8F43EE]">Approved</p>
                                                )}
                                                {selectedCv?.status === 4 && (
                                                    <p className="ml-2 font-semibold text-[#98D8AA]">Invited</p>
                                                )}
                                            </div>
                                            <div className="mr-2">
                                                <a
                                                    href={selectedCv?.CVFileURL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
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
                                                    value={selectedCv?.userId?.name}
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
                                                    value={selectedCv?.userId?.email}
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
                                                    value={selectedCv?.userId?.phone}
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
                                                    value={selectedCv?.userId?.address}
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

                        <div className="flex justify-end mt-8">
                            {/* Button in CV Detail Form */}
                            {selectedCv && (
                                <>
                                    <button
                                        className="bg-[#B7B7B7] text-white px-4 py-2 rounded mr-4"
                                        onClick={() => setSelectedCv(null)}
                                    >
                                        Back
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default History;
