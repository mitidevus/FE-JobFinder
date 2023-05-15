import { axiosPrivate } from "../api";

export const createCV = async (data, authToken) => {
    try {
        return await axiosPrivate.post("/api/v1/cvs", {
            headers: {
                "auth-token": `${authToken}`,
            },
            body: data,
        });
    } catch (error) {
        throw error;
    }
};

export const getCVByPostId = async (params) => {
    const { status, sortOption, userId, postId, authToken } = params || {};
    try {
        return await axiosPrivate.get("/api/v1/cvs", {
            params: { status, sortOption, userId, postId },
            headers: { "auth-token": authToken },
        });
    } catch (error) {
        throw error;
    }
};

export const updateCV = async (id, data) => {
    try {
        return await axiosPrivate.put(`/api/v1/cvs/${id}`, data);
    } catch (error) {
        throw error;
    }
};

export const deleteCV = async (id) => {
    try {
        return await axiosPrivate.delete(`/api/v1/cvs/${id}`);
    } catch (error) {
        throw error;
    }
};

// export const inviteCV = async (params) => {
//     const { id, authToken } = params || {};
//     try {
//         return await axiosPrivate.put(`/api/v1/cvs/${id}`, {
//             body: {
//                 status: 4,
//             },
//             headers: {
//                 "auth-token": `${authToken}`,
//             },
//         });
//     } catch (error) {
//         throw error;
//     }
// };

export const inviteCV = async (params) => {
    const { id, authToken } = params || {};
    try {
        return await axiosPrivate.put(
            `/api/v1/cvs/${id}`,
            {
                status: 4,
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
