/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createJob } from "../api/post/post.api";
import { selectUser } from "../features/userSlice";

function CreateJob() {
    const [title, setTitle] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [expiredDate, setExpiredDate] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [jobRequirement, setJobRequirement] = React.useState();
    const [error, setError] = React.useState("");
    const nowDate = new Date();

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !position || !description || !salary || !expiredDate || !address || !jobRequirement) {
            return setError("Please fill all fields!");
        }

        if (new Date(expiredDate) < nowDate) {
            return setError("Expired date must be greater than today!");
        }

        setError("");

        const data = {
            title,
            position,
            description,
            salary,
            expiredDate,
            address,
            jobRequirement,
        };

        try {
            await createJob({ data, authToken: user?.token });
            navigate("/");
            alert("Create job successfully. Please wait for admin to approve your job!");
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "Failed to create job");
        }
    };

    return (
        <div name="home" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">Create Job</p>
                    <p className="py-4">Fill the details about your job and submit</p>
                </div>

                {error && (
                    <p className="bg-[#D14D72] text-sm text-white font-bold py-4 px-4 rounded mb-8 w-4/12">{error}</p>
                )}

                {/* Create Job Form */}
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col w-full font-sans">
                            <div className="flex">
                                <div className="w-6/12">
                                    <p className="font-semibold mb-1">Title</p>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="w-6/12">
                                    <p className="font-semibold mb-1">Position</p>
                                    <input
                                        type="text"
                                        name="position"
                                        id="position"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-full"
                                        onChange={(e) => setPosition(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="w-6/12">
                                    <p className="font-semibold mb-1">Address</p>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <div className="w-3/12">
                                    <p className="font-semibold mb-1">Salary</p>
                                    <input
                                        type="text"
                                        name="salary"
                                        id="salary"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>

                                <div className="w-3/12">
                                    <p className="font-semibold mb-1">Expired Date</p>
                                    <input
                                        type="date"
                                        name="expiredDate"
                                        id="expiredDate"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-full"
                                        onChange={(e) => setExpiredDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="font-semibold mb-1">Description</p>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="text-black border-2 border-gray-300 rounded-md p-2 w-full "
                                    rows={5}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="mt-4">
                                <p className="font-semibold mb-1">Requirements</p>
                                <textarea
                                    name="requirements"
                                    id="requirements"
                                    className="text-black border-2 border-gray-300 rounded-md p-2 w-full "
                                    rows={5}
                                    onChange={(e) => setJobRequirement(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-[#00ADB5] text-white font-bold py-2 px-4 rounded-md mt-4 md:mt-0"
                            onClick={handleSubmit}
                        >
                            Create Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateJob;
