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
        console.error(err.response.data);
        throw new Error(err);
    }
};

export const getProfile = async (id, accessToken) => {
    try {
        const config = {
            headers: {
                "auth-token": accessToken,
            },
        };
        const response = await axiosPrivate.get(`/api/v1/users/${id}`, config);
        return response;
    } catch (error) {
        console.error(error.response.data);
        throw new Error(error);
    }
};
