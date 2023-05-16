import { axiosPrivate } from "../api";

export const createJob = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/posts", data);
    } catch (err) {
        throw new Error(err);
    }
};

export const getJobs = async (pageNum) => {
    const page = pageNum || 2;
    try {
        return await axiosPrivate.get(`/api/v1/posts?page=${page}`);
    } catch (err) {
        throw new Error(err);
    }
};

export const getJob = async (id) => {
    try {
        return await axiosPrivate.get(`/api/v1/posts/${id}`);
    } catch (err) {
        throw new Error(err);
    }
};

export const updateJob = async (id, data) => {
    try {
        return await axiosPrivate.put(`/api/v1/posts/${id}`, data);
    } catch (err) {
        throw new Error(err);
    }
};

export const deleteJob = async (id) => {
    try {
        return await axiosPrivate.delete(`/api/v1/posts/${id}`);
    } catch (err) {
        throw new Error(err);
    }
};

export const getHotJobs = async () => {
    try {
        return await axiosPrivate.get("/api/v1/posts/hot-jobs");
    } catch (err) {
        throw new Error(err);
    }
};

export const searchJobs = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/posts/search", data);
    } catch (err) {
        throw new Error(err);
    }
};
export const getJobsByUserId = async (id) => {
    try {
        return await axiosPrivate.get(`/api/v1/posts?userId=${id}`);
    } catch (err) {
        throw new Error(err);
    }
};