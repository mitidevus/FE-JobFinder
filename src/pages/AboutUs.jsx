/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

import { data } from "../data/index.js";

function AboutUs() {
    const works = data;

    return (
        <section class="pt-20 bg-blueGray-50 text-black bg-[#393E46] h-screen">
            <div class="w-full lg:w-4/12 px-4 mx-auto ">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 min-h-100">
                    <div class="px-6">
                        <div class="text-center mt-12">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                About Us
                            </h3>
                        </div>
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">This website is create by 4 people:</span>
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Education:</span>
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Experience :</span> abc
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Skill:</span>
                            </div>

                        </div>
                        <div class="py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Thank you for using our website </span>
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
