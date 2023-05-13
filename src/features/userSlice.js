import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("accessToken", action.payload.token);
        },
        logout: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            state.user = null;
        },
        signup(state, action) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("accessToken", action.payload.token);
        },
    },
});

export const { login, logout, signup } = userSlice.actions;

// Hàm để lấy dữ liệu từ redux
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
