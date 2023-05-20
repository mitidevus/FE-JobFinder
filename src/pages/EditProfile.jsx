/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/avt_img.png";

import { updateProfile } from "../api/user/user.api"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { getProfile } from "../api/user/user.api"

let sk = []
function EditProfile() {
    const u = useSelector(selectUser);

    const [user, setUser] = useState(null)

    useEffect(() => {
        getProfile(u._id, u?.token).then((res) => {
            setUser(res.data);
            console.log(res.data)
        });
    }, []);
    const navigate = useNavigate();
    const skill = ["C++", "C#", "Python", "Java", "JavaScript", "HTML", "CSS", "Ruby"]
    const [name, setName] = useState("")
    const [avt, setAvt] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [education, setEducation] = useState("")
    const [experience, setExperience] = useState("")
    const [description, setDescription] = useState("")
    const handleCheckBoxs = (check, e) => {
        console.log(check)
        if (check === true & !sk.includes(e)) {
            sk.push(e)
        }
        if (check === false & sk.includes(e)) {
            sk.splice(sk.indexOf(e), 1)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            avatar: avt,
            address,
            phone,
            academicLevel: education,
            experience,
            skills: sk,
            description
        }

        if (sk.length === 0) {
            delete data.skills
        }


        console.log("user = ", user)

        try {
            updateProfile(user._id, data, u?.token);
            //navigate("/");
            alert("Update successful");
            navigate("/profile/" + user._id)
        } catch (err) {
            throw new Error(err);
        }
        //updateProfile(user._id, data, user.token)
    }
    return (
        <>
            {!u &&
                <section className="pt-20 bg-blueGray-50 text-black bg-[#393E46] h-screen">
                    <div className="w-full lg:w-4/12 px-4 mx-auto ">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 h-screen">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center text-lg ">
                                        You need to sign in before doing this action
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {u && user &&
                <section className="pt-20 bg-blueGray-50 text-black bg-[#393E46]">

                    <div className="w-full lg:w-4/12 px-4 mx-auto ">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center ">
                                        <div className="relative pt-5 pb-5">
                                            <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                                            <input type="text" value={user.avatar} onChange={(e) => setAvt(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> 
                                        </div>
                                    </div>
                                </div>

                                <div className="py-10 border-t border-blueGray-200 text-center">
                                    <form method="patch">
                                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input type="text" id="name" name="name" value={user.name} onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>

                                            <div>
                                                <label htmlFor="address" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                <input type="text" id="address" value={user.address} onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                                <input type="tel" id="phone" value={user.phone} onChange={(e) => setPhone(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>

                                        </div>
                                        <div className="py-5 border-t border-blueGray-200">
                                            <div class="mb-6">
                                                <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                                                <textarea type="text" value={user.education} onChange={(e) => setEducation(e.target.value)} name="University" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>


                                            <div class="mb-6">
                                                <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                                <textarea type="text" name="experience" value={user.experience} onChange={(e) => setExperience(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div class="mb-6">
                                                <label class="text-start block mb-3 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                                                <div class="mb-6 grid md:grid-cols-4 gap-2 text-justify">
                                                    {skill.map((skill, index) => (
                                                        <div key={index}>
                                                            <input id="default-checkbox" type="checkbox" value={skill} onChange={(e) => handleCheckBoxs(e.target.checked, e.target.value)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{skill}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-5 border-t border-blueGray-200">
                                            <div class="mb-6">
                                                <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea type="text" value={user.description} onChange={(e) => setDescription(e.target.value)} name="experience" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                        </div>

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
                                            <a href={"/profile/" + user._id} type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>

    );
} export default EditProfile;
