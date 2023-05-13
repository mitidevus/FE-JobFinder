import { axiosPrivate } from "../api";

export const signIn = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/auth/signin", data);
    } catch (error) {
        throw error;
    }
};

export const signUp = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/auth/signup", data);
    } catch (error) {
        throw error;
    }
};

export const getCompany = async (id, accessToken) => {
    try {
        const config = {
            headers: {
                "auth-token": accessToken,
            },
        };
        const response = await axiosPrivate.get(`/api/v1/users/${id}`, config);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
