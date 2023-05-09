/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/avt_img.png"

function changeText(target, text){
    return (
        <div class="changeText">
            <input name={target}></input>
        </div>
    )
}
function Profile() {
    const but = ["python", "C++", "Java", "Java", "Java", "Java", "Java"]
    return (
        <section class="pt-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div class="w-full lg:w-4/12 px-4 mx-auto ">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4 flex justify-center">
                                <div class="relative">
                                    <img alt="..." src={avt} class="shadow-xl rounded-full object-scale-down h-48 w-96 align-middle border-none -m-16 -ml-20 lg:-ml-0 max-w-150-px" />
                                </div>
                            </div>
                            <div class="w-full px-4 text-center mt-20">

                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                'Name'
                            </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                'abc@gmail.com'
                            </div>
                            <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Address :</span> abc
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Phone number :</span> abc
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Date of birth :</span> abc
                            </div>
                        </div>
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Education:</span> abc
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Experience :</span> abc
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Skill:</span>
                            </div>
                            <div class="mb-2 text-blueGray-600 grid md:grid-cols-4 gap-2">
                                {but.map((but, index) => (
                                    <button key={index} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow ml-1 mr-1">
                                        {but}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div class="py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        <span class="font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Description: </span>
                                        I'm student at HCMUS
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4 mb-4">
                                    <button type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit Profile</button>
                                </div>
                                <div class="w-full lg:w-9/12 px-4">
                                    <a href="/profile/history" type="submit" class="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">History CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} export default Profile;
