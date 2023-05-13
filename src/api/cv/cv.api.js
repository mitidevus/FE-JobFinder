import { axiosPrivate } from "../api";

export const createCV = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/cvs", data);
    } catch (err) {
        throw new Error(err);
    }
};

export const getCVs = async () => {
    try {
        return await axiosPrivate.get("/api/v1/cvs//jobseeker?status=1&sortOption=desc");
    } catch (err) {
        throw new Error(err);
    }
};

export const getCV = async (id) => {
    try {
        return await axiosPrivate.get(`/api/v1/cvs/${id}`);
    } catch (err) {
        throw new Error(err);
    }
};

export const getCVByPostId = async ({ status, sortOption, userId, postId, authToken }) => {
    try {
        return await axiosPrivate.get(`/api/v1/cvs`, {
            params: {
                status,
                sortOption,
                userId,
                postId,
            },
            headers: {
                Authorization: `Bearer ${authToken}`,
                "auth-token": `${authToken}`,
            },
        });
        // return await axiosPrivate.get(`/api/v1/cvs?postId=${postId}`);
    } catch (err) {
        throw err;
    }
};

export const updateCV = async (id, data) => {
    try {
        return await axiosPrivate.put(`/api/v1/cvs/${id}`, data);
    } catch (err) {
        throw new Error(err);
    }
};

export const deleteCV = async (id) => {
    try {
        return await axiosPrivate.delete(`/api/v1/cvs/${id}`);
    } catch (err) {
        throw new Error(err);
    }
};
