import { axiosPrivate } from "../api";

export const updateProfile = async (id, data, authToken) => {
    try {
        return await axiosPrivate
            .patch(`/api/v1/users/${id}`, data, {
                headers: {
                    "auth-token": `${authToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);
            });
    } catch (err) {
        throw err;
    }
};

export const getProfile = async (id) => {
    try {
        return await axiosPrivate.get(`/api/v1/users/${id}`);
    } catch (error) {
        throw error;
    }
};
