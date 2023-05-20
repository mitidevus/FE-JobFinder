import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPostsByEmployer } from "../api/post/post.api";
import Jobs from "../components/Jobs";
import { selectUser } from "../features/userSlice";

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

                <Jobs jobs={jobs} currentPage={currentPage} pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default MyJobs;
