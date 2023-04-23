/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

import { data } from "../data/index.js";

function Home() {
    const works = data;

    return (
        <div name="home" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[110px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 text-[#00ADB5] border-pink-600">Works</p>
                    <p className="py-4">Recently posted jobs</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {/* Grid Items */}
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center text-center mx-auto bg-[#FAE3D9]"
                        >
                            <div
                                style={{ backgroundImage: `url(${work.image})` }}
                                className="group container rounded-t flex flex-col justify-center items-center text-center mx-auto content-div"
                            >
                                {/* Hover Effects */}
                                <div className="overlay rounded-t group-hover:opacity-60"></div>
                                <div className="opacity-0 z-10 group-hover:opacity-100 ">
                                    <span className="pt-2">{work.time}</span>
                                    <div className="text-center pt-4">
                                        <a href="localhost:3000/job/1" target="_blank" rel="noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px] ">
                                                <span className="flex items-center">Detail</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 text-black px-3 py-4">
                                <span className="text-2xl font-bold">{work.name}</span>
                                <p className="pt-1">{work.position}</p>
                                <p className="pt-1">{work.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home;
