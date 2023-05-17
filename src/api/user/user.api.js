import { axiosPrivate } from "../api";

export const updateProfile= async (id, data, authToken) => {
    try {
        return await axiosPrivate.patch(`/api/v1/user/${id}`, {data,headers: {"auth-token": authToken,
        },});
    } catch (err) {
        throw new Error(err);
    }
};