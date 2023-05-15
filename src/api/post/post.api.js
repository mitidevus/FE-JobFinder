import { axiosPrivate } from "../api";

export const createJob = async (params) => {
    const { data, authToken } = params || {};
    try {
        return await axiosPrivate.post(
            "/api/v1/posts",
            {
                ...data,
            },
            {
                headers: {
                    "auth-token": `${authToken}`,
                },
            }
        );
    } catch (error) {
        throw error;
    }
};

export const getJobs = async (params) => {
    const { page, search, minSalary, maxSalary, address } = params || {};
    try {
        return await axiosPrivate.get(`/api/v1/posts`, {
            params: {
                page,
                search,
                minSalary,
                maxSalary,
                address,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const getJob = async (id) => {
    try {
        return await axiosPrivate.get(`/api/v1/posts/${id}`);
    } catch (error) {
        throw error;
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
    } catch (error) {
        throw error;
    }
};

export const deleteJob = async (id, authToken) => {
    try {
        return await axiosPrivate.delete(`/api/v1/posts/${id}`, {
            headers: {
                "auth-token": `${authToken}`,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const closeJob = async (id, authToken) => {
    try {
        return await axiosPrivate.put(`/api/v1/posts/close/${id}`, {
            headers: {
                "auth-token": `${authToken}`,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const getHotJobs = async () => {
    try {
        return await axiosPrivate.get("/api/v1/posts/hot-jobs");
    } catch (error) {
        throw error;
    }
};

export const getUnApprovedJobs = async (params) => {
    const { authToken } = params || {};
    try {
        return await axiosPrivate.get("/api/v1/posts/admin", {
            params: {
                status: 1,
            },
            headers: {
                "auth-token": `${authToken}`,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const rejectPost = async (params) => {
    const { id, authToken } = params || {};
    try {
        return await axiosPrivate.put(
            `/api/v1/posts/${id}`,
            {
                status: 2,
            },
            {
                headers: {
                    "auth-token": `${authToken}`,
                },
            }
        );
    } catch (error) {
        throw error;
    }
};

export const approvePost = async (params) => {
    const { id, authToken } = params || {};
    try {
        return await axiosPrivate.put(
            `/api/v1/posts/${id}`,
            {
                status: 3,
            },
            {
                headers: {
                    "auth-token": `${authToken}`,
                },
            }
        );
    } catch (error) {
        throw error;
    }
};
