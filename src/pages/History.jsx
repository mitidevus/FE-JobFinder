/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/avt_img.png"
import Dropdown from "../components/Dropdown"
import {data} from "../data/history_eg"

function History() {
    const content = data
    return (
        <section class="pt-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div class="w-full lg:w-4/12 px-4 mx-auto ">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div class="px-6">
                        <div class="text-center mt-12">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                History
                            </h3>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center grid md:grid-cols-1 gap-5">
                                {content.map((content,index) => (
                                    <Dropdown key={index} content={content.CV} title={content.company}/>
                                ))}

                            </div>
                            <div class="py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4 mb-4">
                                        <button type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</button>
                                    </div>
                                    <div class="w-full lg:w-9/12 px-4">
                                        <a href="/profile" type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} export default History;
