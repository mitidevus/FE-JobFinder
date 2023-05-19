import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsByEmployer } from "../api/post/post.api";
import Pagination from "../components/Pagination";
import { selectUser } from "../features/userSlice";
import { formatDateLeft } from "../utils/formatDate";
import { handleTitle } from "../utils/handleTitle";

function MyJobs() {
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState(3);

    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await getPostsByEmployer({ status, page: currentPage, authToken: user?.token });
                setJobs(response.data.posts);
                setPageNumber(response.data.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, [status, currentPage, user]);

    return (
        <div name="hotjobs" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                                My Jobs
                            </p>
                            <p className="py-4">Posts posted by your company</p>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold mb-1">Status</label>
                            <select
                                className="border border-gray-400 text-black py-2 px-2 rounded-lg"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="3">Open</option>
                                <option value="4">Closed</option>
                                <option value="1">Pending</option>
                                <option value="2">Rejected</option>
                            </select>
                        </div>
                    </div>
                </div>

                {jobs && jobs.length > 0 && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {jobs.map((job) => (
                            <div
                                key={job?._id}
                                className="shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-start items-center text-center mx-auto bg-[#FAE3D9] font-sans"
                            >
                                <div
                                    style={{ backgroundImage: `url(${job?.userId?.avatar})` }}
                                    className="group container rounded-t flex flex-col justify-center items-center text-center mx-auto content-div"
                                >
                                    <div className="overlay rounded-t group-hover:opacity-60"></div>
                                    <div className="opacity-0 z-10 group-hover:opacity-100 ">
                                        <span className="pt-2">{formatDateLeft(new Date(job?.expiredDate))}</span>
                                        <div className="text-center pt-4">
                                            <Link to={`/job/${job?._id}`}>
                                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px] ">
                                                    <span className="flex items-center">Detail</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 text-black px-3 py-4">
                                    <span className="text-xl font-semibold">{handleTitle(job?.title)}</span>
                                    <p className="text-lg font-semibold pt-1">{job?.userId?.companyName}</p>
                                    <p className="pt-1">{job?.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {jobs && jobs.length === 0 && (
                    <div className="flex justify-center items-center w-full h-full py-40">
                        <p className="text-2xl font-bold">No jobs</p>
                    </div>
                )}

                <Pagination currentPage={currentPage} totalPages={pageNumber} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
}

export default MyJobs;
