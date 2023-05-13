import { axiosPrivate } from "../api";

export const updateJobSeekerProfile = async (id, data) => {
    try {
        return await axiosPrivate.put(`/api/v1/profile/JobSeeker/${id}`, data);
    } catch (err) {
        throw new Error(err)
    }
}

export const updateEmpProfile = async (id, data) => {
    try {
        return await axiosPrivate.put(`/api/v1/profile/Employer/${id}`, data);
    } catch (err) {
        throw new Error(err)
    }
}