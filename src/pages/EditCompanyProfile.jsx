/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../api/user/user.api";
import { selectUser } from "../features/userSlice";

function EditCompanyProfile() {
    const user = useSelector(selectUser);
    const [userAuth, setUserAuth] = useState(null);

    const navigate = useNavigate();
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProfile(user?._id);
                setUserAuth(response.data);
                setAvatar(response.data.avatar);
                setName(response.data.companyName);
                setField(response.data.field);
                setAddress(response.data.address);
                setPhone(response.data.phone);
                setDescription(response.data.description);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                setError(error.response?.data?.message || "Failed to fetch profile");
            }
        };

        fetchData();
    }, [user?._id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            avatar,
            companyName: name,
            field,
            address,
            phone,
            description,
        };

        if (!data.avatar || !data.companyName || !data.address || !data.phone || !data.description) {
            return setError("Please fill all fields!");
        }

        setError("");

        try {
            await updateProfile({ id: user?._id, data, authToken: user?.token });
            alert("Update profile successfully!");
            navigate(`/company_profile/${user?._id}`);
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "Failed to update profile");
        }
    };

    return (
        <div name="editCompanyProfile" className="w-full h-screen text-gray-300 bg-[#393E46]">
            <div className="pt-[120px] pb-[50px] max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline text-[#00ADB5] border-b-4 border-pink-600">
                        Update Profile
                    </p>
                </div>

                {error && (
                    <p className="bg-[#D14D72] text-sm text-white font-bold py-4 px-4 rounded mb-8 w-4/12">{error}</p>
                )}

                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col w-full font-sans">
                            <div className="flex">
                                <div className="w-4/12">
                                    <p className="font-semibold mb-1">Company Name</p>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="w-4/12">
                                    <p className="font-semibold mb-1">Address</p>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <div className="w-4/12">
                                    <p className="font-semibold mb-1">Phone</p>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-full"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex mt-4">
                            <div className="w-4/12">
                                    <p className="font-semibold mb-1">Field</p>
                                    <input
                                        type="text"
                                        name="field"
                                        id="field"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-11/12"
                                        value={field}
                                        onChange={(e) => setField(e.target.value)}
                                    />
                                </div>

                                <div className="w-8/12">
                                    <p className="font-semibold mb-1">Avatar</p>
                                    <input
                                        type="text"
                                        name="avatar"
                                        id="avatar"
                                        className="text-black border-2 border-gray-300 rounded-md p-2 w-full"
                                        value={avatar}
                                        onChange={(e) => setAvatar(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="font-semibold mb-1">Description</p>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="text-black border-2 border-gray-300 rounded-md p-2 w-full"
                                    value={description}
                                    rows={5}
                                    onChange={(e) => setDescription(e.target.value)}
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
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditCompanyProfile;
