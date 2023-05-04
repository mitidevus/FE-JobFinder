/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import { Link } from "react-router-dom";
import { data } from "../data/Home.js";

function formatDate(date) {
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert difference to days

    if (diffDays <= 0) {
        return "Expired";
    } else if (diffDays === 1) {
        return "1 day left";
    } else {
        return `${diffDays} days left`;
    }
}

function CreateJob() {
    const jobs = data;

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
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-lg font-bold">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="border-2 border-gray-300 rounded-md p-2"
                            />

                            <label htmlFor="address" className="text-lg font-bold mt-4">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="border-2 border-gray-300 rounded-md p-2"
                            />

                            <label htmlFor="salary" className="text-lg font-bold mt-4">
                                Salary
                            </label>
                            <input
                                type="text"
                                name="salary"
                                id="salary"
                                className="border-2 border-gray-300 rounded-md p-2"
                            />

                            <label htmlFor="deadline" className="text-lg font-bold mt-4">
                                Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                id="deadline"
                                className="border-2 border-gray-300 rounded-md w-200 p-2"
                            />

                            <label htmlFor="description" className="text-lg font-bold mt-4">
                                Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                className="border-2 border-gray-300 rounded-md p-2"
                            />

                            <label htmlFor="description" className="text-lg font-bold mt-4">
                                Requirements
                            </label>
                            <textarea
                                name="requirements"
                                id="requirements"
                                className="border-2 border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-[#00ADB5] text-white font-bold py-2 px-4 rounded-md mt-4 md:mt-0"
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
