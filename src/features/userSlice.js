import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

const decodeToken = (token) => {
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp * 1000; // Tính theo miliseconds
    const currentTime = Date.now();
    return expirationTime - currentTime;
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signin: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            const timeUntilLogout = decodeToken(action.payload.token);

            setTimeout(() => {
                localStorage.removeItem("user");
                alert("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
                window.location.href = "/signin";
            }, timeUntilLogout);
        },
        signup(state, action) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
            const timeUntilLogout = decodeToken(action.payload.token);

            setTimeout(() => {
                localStorage.removeItem("user");
                alert("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
                window.location.href = "/signin";
            }, timeUntilLogout);
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const { signin, signup, logout } = userSlice.actions;

// Hàm để lấy dữ liệu từ redux store
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
