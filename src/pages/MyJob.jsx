/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import Dropdown from "../components/Dropdown"
import { Link } from "react-router-dom";
import { data } from "../data/Home.js";
import ReactPaginate from 'react-paginate';
import formatDate from "../utils/formatDate";

function MyJob() {
    const jobs = data
    const pageCount = 10
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        console.log(event.selected + 1)
    };
    return (
        <div className="bg-[#393E46] antialiasedr">
            <div className="container mx-auto my-60">
                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={avt} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="mt-16">
                        <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Nha tuyen dung A
                        </h3>
                        <div className="my-5 px-6">
                            <a href="/" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Go to <span className="font-bold">"Trang chu cua cong ty"</span></a>
                        </div>
                        <div className="flex justify-between items-center my-5 px-6">
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                            <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                        </div>

                        <div className="w-full">
                            <div className="px-6">
                                <h3 className="text-center text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    History
                                </h3>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">

                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4">
                                            <div className="grid sm:grid-cols-5 md:grid-cols-1 gap-5">
                                                {/* Grid Items */}
                                                {jobs.map((job, index) => (
                                                    <div
                                                        key={index}
                                                        className="shadow-sm shadow-[#040c16] rounded-md flex justify-center items-center text-center mx-auto bg-[#FAE3D9]"
                                                    >
                                                        <div
                                                            style={{ backgroundImage: `url(${job.image})` }}
                                                            className="group container rounded-t flex justify-center items-center text-center mx-auto content-div"
                                                        >
                                                            {/* Hover Effects */}
                                                            <div className="overlay rounded-t group-hover:opacity-60"></div>
                                                            <div className="opacity-0 z-10 group-hover:opacity-100 ">
                                                                <span className="pt-2">{formatDate(new Date(job.deadline))}</span>
                                                                <div className="text-center pt-4">
                                                                    <Link to={`/job/${job.id}`}>
                                                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px] ">
                                                                            <span className="flex items-center">Detail</span>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pt-2 text-black px-3 py-4">
                                                            <span className="text-2xl font-bold">{job.company}</span>
                                                            <p className="pt-1">{job.title}</p>
                                                            <p className="pt-1">{job.address}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 inline-flex">
                                        <ReactPaginate
                                            breakLabel="..."
                                            nextLabel="next >"
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={3}
                                            pageCount={pageCount}
                                            previousLabel="< previous"
                                            renderOnZeroPageCount={null}
                                            className={"inline-flex -space-x-px"}
                                            pageClassName={"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                                            previousClassName={"px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                                            nextClassName={"px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                                            activeLinkClassName={"text-blue-600"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
} export default MyJob;
