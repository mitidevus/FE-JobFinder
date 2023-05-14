import { axiosPrivate } from "../api";

export const createJob = async (data, authToken) => {
    try {
        return await axiosPrivate.post("/api/v1/posts", {
            headers: {
                "auth-token": `${authToken}`,
            },
            body: data,
        });
    } catch (err) {
        throw new Error(err);
    }
};

export const getJobs = async (params) => {
    const { page, search } = params || {};
    try {
        return await axiosPrivate.get(`/api/v1/posts`, {
            params: {
                page,
                search,
            },
        });
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

export const updateJob = async (id, data, authToken) => {
    try {
        return await axiosPrivate.patch(`/api/v1/posts/${id}`, {
            headers: {
                "auth-token": `${authToken}`,
            },
            body: data,
        });
    } catch (err) {
        throw err;
    }
};

export const deleteJob = async (id, authToken) => {
    try {
        return await axiosPrivate.delete(`/api/v1/posts/${id}`, {
            headers: {
                "auth-token": `${authToken}`,
            },
        });
    } catch (err) {
        throw err;
    }
};

export const closeJob = async (id, authToken) => {
    try {
        return await axiosPrivate.put(`/api/v1/posts/close/${id}`, {
            headers: {
                "auth-token": `${authToken}`,
            },
        });
    } catch (err) {
        throw err;
    }
};

export const getHotJobs = async () => {
    try {
        return await axiosPrivate.get("/api/v1/posts/hot-jobs");
    } catch (err) {
        throw new Error(err);
    }
};
