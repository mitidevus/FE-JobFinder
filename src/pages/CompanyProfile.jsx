import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getJobs } from "../api/post/post.api";
import { getProfile } from "../api/user/user.api";
import Jobs from "../components/Jobs";
import { selectUser } from "../features/userSlice";

function CompanyProfile() {
    const user = useSelector(selectUser);
    const params = useParams();
    const id = params.companyId;
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profileResponse, jobsResponse] = await Promise.all([
                    getProfile(id),
                    getJobs({ userId: id, page: currentPage }),
                ]);

                setCompany(profileResponse.data);
                setJobs(jobsResponse.data.posts);
                setPageNumber(jobsResponse.data.totalPages);
                console.log(jobsResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id, currentPage]);

    return (
        <div className="bg-[#393E46] antialiasedr font-sans">
            {company && (
                <div className="container mx-auto mt-[180px] mb-[30px]">
                    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                        <div className="flex justify-center">
                            <img
                                src={company?.avatar}
                                alt=""
                                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                            />
                        </div>

                        <div className="mt-16">
                            <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                {company?.companyName}
                            </h3>
                            <p className="text-center text-sm text-gray-400 font-medium">{company?.field}</p>
                            <p className="text-center text-sm text-gray-400 font-medium">{company?.email}</p>
                            <p className="text-center text-sm text-gray-400 font-medium">{company?.phone}</p>
                            <p className="text-center text-sm text-gray-400 font-medium mb-10">{company?.address}</p>

                            <div className="w-full">
                                <div className="px-6">
                                    <div className="py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    <span className="font-semibold leading-normal mb-2 text-blueGray-700">
                                                        Description:{" "}
                                                    </span>
                                                    {company?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {user?._id === id && (
                                        <div className="py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <Link
                                                        to="/company_profile/edit"
                                                        className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    >
                                                        Edit Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                        <div className="pb-4">
                            <div className="py-4 flex justify-between">
                                <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                                    Jobs
                                </p>
                            </div>
                        </div>

                        <div className="text-white">
                            <Jobs
                                jobs={jobs}
                                currentPage={currentPage}
                                pageNumber={pageNumber}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            )}

            {!company && (
                <div className="flex justify-center items-center w-full h-screen">
                    <p className="text-2xl font-bold text-white">No company</p>
                </div>
            )}
        </div>
    );
}

export default CompanyProfile;
