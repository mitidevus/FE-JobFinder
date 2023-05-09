// import AboutPage from '~/pages/AboutPage';
// import AccountPage from '~/pages/AccountPage';
// import ApprovePage from '~/pages/ApprovePage';
// import ContactPage from '~/pages/ContactPage';
// import HotelPage from '~/pages/HotelPage';
// import ResetPasswordPage from '~/pages/ResetPasswordPage';
// import RoomPage from '~/pages/RoomPage';
// import LoginPage from '~/pages/LoginPage';
// import PostPage from '~/pages/PostPage';
// import SignUpPage from '~/pages/SignUpPage';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CompanyProfile from '../pages/CompanyProfile';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import ForgetPassword from '../pages/login/ForgetPassword';
import History from '../pages/History';
import AboutUs from '../pages/AboutUs';
import MyJob from '../pages/MyJob';
import Notification from '../pages/Notification';
import Notification_details from '../pages/Noti_details';
import JobDetail from '../pages/JobDetail';
import EditProfile from '../pages/EditProfile';
import EditCompanyProfile from '../pages/EditCompanyProfile';

import Test from '../pages/Test';
// Public Routes
const publicRoutes = [
    { path: '/test', component: Test },
    { path: '/', component: Home },
    { path: '/job/:jobId', component: JobDetail },
    { path: '/myjobs', component: MyJob },
    { path: '/about', component: AboutUs },
    { path: '/notification', component: Notification },
    { path: '/notification/details', component: Notification_details },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgetPassword', component: ForgetPassword },
    { path: '/profile', component: Profile },
    { path: '/profile/history', component: History },
    { path: '/company_profile', component: CompanyProfile },
    { path: '/company_profile/edit', component: EditCompanyProfile },
    { path: '/profile/edit', component: EditProfile },
    
    // { path: '/post', component: PostPage },
    // { path: '/about', component: AboutPage },
    // { path: '/hotel/:hotelId', component: HotelPage },
    // { path: '/room/:roomId', component: RoomPage },
    // { path: '/contact', component: ContactPage },
    // { path: '/login', component: LoginPage },
    // { path: '/signup', component: SignUpPage },
    // { path: '/resetpassword', component: ResetPasswordPage },
];

// const privateRoutes = [{ path: '/account', component: AccountPage }];

// const hotelOwnerRoutes = [{ path: '/myhotel', component: HotelPage }];

// const adminRoutes = [{ path: '/approve', component: ApprovePage }];

// export { publicRoutes, privateRoutes, hotelOwnerRoutes, adminRoutes };

export { publicRoutes };