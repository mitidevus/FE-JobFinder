import { axiosPrivate } from "../api";

export const updateProfile = async (params) => {
    const { data, authToken } = params || {};
    try {
        return await axiosPrivate.patch(`/api/v1/user/${id}`,
            { ...data },
            {
                headers: {
                    "auth-token": `${authToken}`,
                },
            });
    } catch (err) {
        throw new Error(err);
    }
};
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
