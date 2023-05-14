/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function CreateJob() {
    const [title, setTitle] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [deadline, setDeadline] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [requirements, setRequirements] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            position,
            description,
            salary,
            deadline: new Date(deadline),
            address,
            requirements,
        };

        console.log(data);
    };

    return (
        <div name="home" className="w-full h-full text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">Create Job</p>
                    <p className="py-4">Fill the details about your job and submit.</p>
                </div>

                {/* Create Job Form */}
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col w-full font-sans">
                            <div className="flex">
                                <div className="w-3/12">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        placeholder="Title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="w-3/12">
                                    <input
                                        type="text"
                                        name="position"
                                        id="position"
                                        className="border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        placeholder="Position"
                                        onChange={(e) => setPosition(e.target.value)}
                                    />
                                </div>

                                <div className="w-3/12">
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        placeholder="Address"
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <div className="w-2/12">
                                    <input
                                        type="text"
                                        name="salary"
                                        id="salary"
                                        className="border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        placeholder="Salary"
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>

                                <div className="w-2/12">
                                    <input
                                        type="date"
                                        name="deadline"
                                        id="deadline"
                                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                                        onChange={(e) => setDeadline(e.target.value)}
                                    />
                                </div>
                            </div>

                            <textarea
                                name="description"
                                id="description"
                                className="border-2 border-gray-300 rounded-md p-2 mt-4"
                                placeholder="Description"
                                rows={5}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <textarea
                                name="requirements"
                                id="requirements"
                                className="border-2 border-gray-300 rounded-md p-2 mt-4"
                                placeholder="Requirements"
                                rows={5}
                                onChange={(e) => setRequirements(e.target.value)}
                            />
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
