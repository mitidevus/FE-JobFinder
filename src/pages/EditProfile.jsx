/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import avt from "../assets/avt_img.png";
import Datepicker from "tailwind-datepicker-react"


function EditProfile() {
    const options = {
        title: "Demo Title",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date("2022-01-01"),
        language: "en",
    }
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [education, setEducation] = useState("")
    const [experience, setExperience] = useState("")
    const [skills, setSkills] = useState([])
    const [description, setDescription] = useState("")
    const handleCheckBoxs = (e, arr) => {
        arr.append(e)
        return arr
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            address,
            phone,
            date: new Date(),
            email,
            education,
            experience,
            skills,
            description,
        }
        console.log(data)
    }

    const skill = ["C++", "C#", "Python", "Java", "JavaScript", "HTML", "CSS"]


    const handleChange = (selectedDate = Date) => {
        const month = selectedDate.getMonth() + 1
        console.log(selectedDate.getFullYear() + "-" + month + "-" + selectedDate.getDate())
        return selectedDate.getFullYear() + "-" + month + "-" + selectedDate.getDate()
    }
    const handleClose = (state = Boolean) => {
        setShow(state)
    }
    const [title, setTitle] = useState("");
    console.log(title)
    return (
        <section className="pt-20 bg-blueGray-50 text-black bg-[#393E46]">
            <div className="w-full lg:w-4/12 px-4 mx-auto ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center ">
                                <div className="relative pt-5">
                                    <img alt="..." src={avt} className="rounded-full border h-48 w-48" />
                                    {/* {selectedImage && (
                                        <div>
                                            <img
                                                alt="not found"
                                                width={"250px"}
                                                src={URL.createObjectURL(selectedImage)}
                                                className="rounded-full border h-48 w-48"
                                            />
                                            <br />
                                        </div>
                                    )}

                                    <br />
                                    <br />

                                    <input
                                        type="file"
                                        name="myImage"
                                        onChange={(event) => {
                                            console.log(event.target.files[0]);
                                            console.log(selectedImage);
                                            setSelectedImage(event.target.files[0]);
                                        }}
                                    /> */}

                                </div>
                            </div>
                        </div>

                        <div className="py-10 border-t border-blueGray-200 text-center">
                            <form method="post">
                                <div class="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>

                                    <div>
                                        <label htmlFor="address" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                        <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                        <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>

                                </div>
                                <div class="mb-6">
                                    <label htmlFor="email" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
                                    <Datepicker options={options} onChange={(e) => setDate(e.target.value)} show={show} setShow={handleClose} />
                                </div>
                                <div class="mb-6">
                                    <label htmlFor="email" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="py-5 border-t border-blueGray-200">
                                    <p class="text-start block mb-2 text-base font-medium text-gray-900 dark:text-white">Education</p>
                                    <div class="mb-6">
                                        <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
                                        <textarea type="text" onChange={(e) => setEducation(e.target.value)} name="University" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>
                                <div className="py-5 border-t border-blueGray-200">
                                    <div class="mb-6">
                                        <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                        <textarea type="text" name="experience" onChange={(e) => setExperience(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div class="mb-6">
                                        <label class="text-start block mb-3 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                                        <div class="mb-6 grid md:grid-cols-4 gap-2 text-justify">
                                            {skill.map((skill, index) => (
                                                <div key={index}>
                                                    <input id="default-checkbox" type="checkbox" value={skill} onClick={(e) => setSkills(e.target.value)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{skill}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="py-5 border-t border-blueGray-200">
                                    <div class="mb-6">
                                        <label class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <textarea type="text" onChange={(e) => setDescription(e.target.value)} name="experience" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                            <button type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Change</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div className="py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <a href="/profile" type="submit" className="w-full text-white bg-[#222831] hover:bg-[#00ADB5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} export default EditProfile;
