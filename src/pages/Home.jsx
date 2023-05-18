/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../api/post/post.api";
import Filter from "../components/Filter";
import { formatDateLeft } from "../utils/formatDate";
import { handleTitle } from "../utils/handleTitle";
import Pagination from "../components/Pagination";

function Home() {
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await getJobs({ page: currentPage, ...filter });
            setJobs(response.data.posts);
            setPageNumber(response.data.totalPages);
        };

        fetchJobs();
    }, [filter, currentPage]);

    const handleFilter = (filter) => {
        setFilter(filter);
        setCurrentPage(1);
    };

    return (
        <div name="home" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">Jobs</p>
                            <p className="py-4">Recently posted jobs</p>
                        </div>
                        <Filter onFilter={handleFilter} />
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
                    <div className="flex justify-center items-center w-full h-full py-60">
                        <p className="text-2xl font-bold">No jobs</p>
                    </div>
                )}

                <Pagination currentPage={currentPage} totalPages={pageNumber} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
}

export default Home;
