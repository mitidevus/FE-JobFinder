import '../assets/css/nucleo-icons.css'
import '../assets/css/nucleo-svg.css'
import '../assets/css/material-dashboard.css?v=3.0.4'
import bg_img from '../assets/img/bg/bg_img.avif'
import React from 'react';
//import '../assets/js/material-dashboard.js'
// import '../assets/js/core/popper.min.js'
// import '../assets/js/core/bootstrap.min.js'
// import '../assets/js/plugins/perfect-scrollbar.min.js'
// import '../assets/js/plugins/smooth-scrollbar.min.js'
// import '../assets/js/material-dashboard.min.js?v=3.0.4'


function ForgetPassword() {
    
    
    return (
        <React.Fragment>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        
                        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="../pages/dashboard.html">
                                    Material Dashboard 2
                                </a>

                                <div className="collapse navbar-collapse justify-content-center" id="navigation">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                                <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/profile.html">
                                                <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-up.html">
                                                <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-in.html">
                                                <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </nav>
                        
                    </div>
                </div>
            </div>
            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100" style={{backgroundImage: `url(${bg_img})`}}>
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">ForgetPassword</h4>
                                            <div className="row mt-3">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" name ="email"/>
                                            </div>


                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Send</button>
                                            </div>
                                            <p className="mt-4 text-sm text-center">
                                                Don't have an account?
                                                <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Sign up</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer position-absolute bottom-2 py-2 w-100">
                        
                    </footer>
                </div>
            </main>
        </React.Fragment>
    );
}
export default ForgetPassword;