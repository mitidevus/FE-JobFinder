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

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
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