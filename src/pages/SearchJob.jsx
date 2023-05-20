/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../api/post/post.api";
import Filter from "../components/Filter";
import Jobs from "../components/Jobs";

function SearchJob() {
    const params = useParams();
    const search = params.keyword;
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        const fetchJobs = async () => {
            console.log({ ...filter, page: currentPage, search });
            const res = await getJobs({ ...filter, page: currentPage, search });
            setJobs(res.data.posts);
            setPageNumber(res.data.totalPages);
        };

        fetchJobs();
    }, [search, filter, currentPage]);

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
                            <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                                Search Jobs
                            </p>
                            <p className="py-4">
                                See result about: <span className="font-bold">{search}</span>
                            </p>
                        </div>
                        <Filter filter={filter} onFilter={handleFilter} />
                    </div>
                </div>

                <Jobs jobs={jobs} currentPage={currentPage} pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default SearchJob;
