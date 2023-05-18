import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import JobDetail from "../pages/JobDetail";
import Approve from "../pages/Approve";
import CreateJob from "../pages/CreateJob";
import HotJob from "../pages/HotJob";
import Profile from '../pages/Profile';
import CompanyProfile from '../pages/CompanyProfile';
import ForgetPassword from '../pages/ForgetPassword';
import History from '../pages/History';
import AboutUs from '../pages/AboutUs';
import MyJob from '../pages/MyJob';
import Notification from '../pages/Notification';
import Notification_details from '../pages/Noti_details';
import EditProfile from '../pages/EditProfile';
import EditCompanyProfile from '../pages/EditCompanyProfile';
import Test from '../pages/Test';

// Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/job/:jobId", component: JobDetail },
    { path: "/approve", component: Approve },
    { path: "/createjob", component: CreateJob },
    { path: "/hotjobs", component: HotJob },
    { path: '/test', component: Test },
    { path: '/myjobs', component: MyJob },
    { path: '/about', component: AboutUs },
    { path: '/notification', component: Notification },
    { path: '/notification/details', component: Notification_details },
    { path: '/forgetPassword', component: ForgetPassword },
    { path: '/profile/:id', component: Profile },
    { path: '/profile/history', component: History },
    { path: '/company_profile/:companyId', component: CompanyProfile },
    { path: '/company_profile/edit', component: EditCompanyProfile },
    { path: '/profile/edit', component: EditProfile },
];

// const privateRoutes = [{ path: '/account', component: AccountPage }];

// const hotelOwnerRoutes = [{ path: '/myhotel', component: HotelPage }];

// const adminRoutes = [{ path: '/approve', component: ApprovePage }];

// export { publicRoutes, privateRoutes, hotelOwnerRoutes, adminRoutes };

export { publicRoutes };
