import { axiosPrivate } from "../api";

export const signIn = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/auth/signin", data);
    } catch (error) {
        throw error;
    }
};

export const signUp = async (data) => {
    console.log(data);
    try {
        return await axiosPrivate.post("/api/v1/auth/signup", data);
    } catch (error) {
        throw error;
    }
};

export const forgotPassword = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/auth/forgotPassword", data);
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (data) => {
    try {
        return await axiosPrivate.post("/api/v1/auth/resetPassword", data);
    } catch (error) {
        throw error;
    }
};