// import AboutPage from '~/pages/AboutPage';
// import AccountPage from '~/pages/AccountPage';
// import ApprovePage from '~/pages/ApprovePage';
// import ContactPage from '~/pages/ContactPage';
// import HotelPage from '~/pages/HotelPage';
// import ResetPasswordPage from '~/pages/ResetPasswordPage';
// import RoomPage from '~/pages/RoomPage';
// import PostPage from '~/pages/PostPage';
// import SignUpPage from '~/pages/SignUpPage';

import Home from "../pages/Home";
import Login from "../pages/Login";
import JobDetail from "../pages/JobDetail";
import Approve from "../pages/Approve";
import CreateJob from "../pages/CreateJob";
import HotJob from "../pages/HotJob";

// Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/job/:jobId", component: JobDetail },
    { path: "/approve", component: Approve },
    { path: "/createjob", component: CreateJob },
    { path: "/hotjob", component: HotJob },
    // { path: '/post', component: PostPage },
    // { path: '/about', component: AboutPage },
    // { path: '/hotel/:hotelId', component: HotelPage },
    // { path: '/contact', component: ContactPage },
    // { path: '/signup', component: SignUpPage },
    // { path: '/resetpassword', component: ResetPasswordPage },
];

// const privateRoutes = [{ path: '/account', component: AccountPage }];

// const hotelOwnerRoutes = [{ path: '/myhotel', component: HotelPage }];

// const adminRoutes = [{ path: '/approve', component: ApprovePage }];

// export { publicRoutes, privateRoutes, hotelOwnerRoutes, adminRoutes };

export { publicRoutes };
