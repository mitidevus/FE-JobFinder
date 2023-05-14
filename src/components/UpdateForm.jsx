import React, { useState } from "react";
import { formatDateISO, formatDateYMD } from "../utils/formatDate";
import { useNavigate } from "react-router";
import { updateJob } from "../api/post/post.api";

function UpdateForm({ job, authToken, onClose }) {
    const [updatedJob, setUpdatedJob] = useState(job);
    const [expiredDate, setExpiredDate] = useState(formatDateYMD(job.expiredDate));

    const navigate = useNavigate();

    const handleUpdate = () => {
        const data = {
            ...updatedJob,
            expiredDate: formatDateISO(expiredDate),
        };
        console.log(data);

        // If updatedJob === job

        // If updatedJob !== job
        updateJob(job?._id, data, authToken)
            .then((res) => {
                console.log(res.data);
                navigate(`/`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-black bg-opacity-75 flex justify-center items-center">
            <div className="w-[800px] bg-white rounded-lg p-8 max-w-[1100px]">
                <div className="relative flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Update Job</h2>

                    <button
                        className="absolute top-[-16px] right-[-16px] bg-[#da4167] text-white px-3 py-1 font-bold rounded"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <div className="overflow-y-auto w-full h-64 font-sans">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="w-6/12">
                                <p className="font-bold">Title</p>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="border-2 border-gray-400 rounded-md p-2 w-11/12"
                                    value={updatedJob?.title}
                                    onChange={(e) => setUpdatedJob({ ...updatedJob, title: e.target.value })}
                                />
                            </div>

                            <div className="w-6/12">
                                <p className="font-bold">Position</p>
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    className="border-2 border-gray-400 rounded-md p-2 w-full"
                                    value={updatedJob?.position}
                                    onChange={(e) => setUpdatedJob({ ...updatedJob, position: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="w-6/12">
                                <p className="font-bold">Address</p>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="border-2 border-gray-400 rounded-md p-2 w-11/12"
                                    value={updatedJob?.address}
                                    onChange={(e) => setUpdatedJob({ ...updatedJob, address: e.target.value })}
                                />
                            </div>

                            <div className="w-3/12">
                                <p className="font-bold">Salary</p>
                                <input
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    className="border-2 border-gray-400 rounded-md p-2 w-11/12"
                                    value={updatedJob?.salary}
                                    onChange={(e) => setUpdatedJob({ ...updatedJob, salary: e.target.value })}
                                />
                            </div>

                            <div className="w-3/12">
                                <p className="font-bold">Deadline</p>
                                <input
                                    type="date"
                                    name="deadline"
                                    id="deadline"
                                    className="border-2 border-gray-400 rounded-md p-2 w-full"
                                    value={expiredDate}
                                    onChange={(e) => setExpiredDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="font-bold">Description</p>
                            <textarea
                                name="description"
                                id="description"
                                className="border-2 border-gray-400 rounded-md p-2 w-full"
                                rows={5}
                                value={updatedJob?.description}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, description: e.target.value })}
                            />
                        </div>

                        <div className="mt-4">
                            <p className="font-bold">Requirements</p>
                            <textarea
                                name="requirements"
                                id="requirements"
                                className="border-2 border-gray-400 rounded-md p-2 w-full"
                                rows={5}
                                value={updatedJob?.jobRequirement}
                                onChange={(e) => setUpdatedJob({ ...updatedJob, jobRequirement: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-8">
                        <button className="bg-[#A4D0A4] text-white px-4 py-2 rounded mr-4" onClick={handleUpdate}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;
