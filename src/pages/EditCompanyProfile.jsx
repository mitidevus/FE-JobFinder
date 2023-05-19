
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/company_avt.jfif"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/user/user.api"

function EditCompanyProfile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            companyName: name,
            address,
            phone,
            description
        }
        if (name === "") {
            delete data.companyName
        }
        if (address === "") {
            delete data.address
        }
        if (phone === "") {
            delete data.phone
        }
        if (description === "") {
            delete data.description
        }

        console.log("data = ", data)
        try {
            updateProfile(user._id, data, user?.token);
            //navigate("/");
            alert("Create job successfully!");
            navigate("/profile/" + user._id)
        } catch (err) {
            throw new Error(err);
        }
        //updateProfile(user._id, data, user.token)
    }


    return (

        <div className="bg-[#393E46] antialiasedr">
            <div className="container mx-auto my-60">


                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={avt} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="mt-16">

                        <div className="w-full">
                            <div className="px-6">

                                <div className="py-10 border-t border-blueGray-200 text-center">
                                    <form>
                                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input type="text" id="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>

                                            <div>
                                                <label htmlFor="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                                <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>

                                        </div>

                                        <div className="py-5 border-t border-blueGray-200">
                                            <div class="mb-6">
                                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea type="text" onChange={(e) => setDescription(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                        </div>
                                        {/* <div class="mb-6">
                                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                                </div>
                                <div class="mb-6">
                                    <label htmlFor="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                                </div> */}
                                        <div className="pt-10 border-t border-blueGray-200 ">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <button type="submit" onClick={handleSubmit} className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Change</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <a href={"/company_profile/" + user._id} type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default EditCompanyProfile;