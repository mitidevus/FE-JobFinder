/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

import { data } from "../data/index.js";

function AboutUs() {
    const works = data;

    return (
        <section className="pt-20 bg-blueGray-50 text-black bg-[#393E46] h-screen">
            <div className="w-full lg:w-4/12 px-4 mx-auto ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 min-h-100">
                    <div className="px-6">
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                About Us
                            </h3>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">This website is create by 4 people:</span>
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Đỗ Minh Trí</span> - 20127651
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Trương Chí Hiển</span> - 20127494
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Hồ Quang Khải</span> - 20127521
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Trần Trọng Tín</span> - 20127683
                            </div>

                        </div>
                        <div className="py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        <span className="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Thank you for using our website </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>

    );
}
export default AboutUs;
