import '../assets/css/nucleo-icons.css'
import '../assets/css/nucleo-svg.css'
import '../assets/css/material-dashboard.css?v=3.0.4'
import bg_img from '../assets/img/illustrations/illustration-signup.jpg'
function Register() {
    return (
        <div>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                      
                        <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                                    Material Dashboard 2
                                </a>
                                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
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
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{backgroundImage: `url(${bg_img})`, backgroundSize: 'cover'}}>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                    <div className="card card-plain">
                                        <div className="card-header">
                                            <h4 className="font-weight-bolder">Sign Up</h4>
                                            <p className="mb-0">Enter your email and password to register</p>
                                        </div>
                                        <div className="card-body">
                                            <form >
                                                <div className="input-group input-group-outline mb-3">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                                <div className="form-check form-check-info text-start ps-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I agree the <strong>Terms and Conditions</strong>
                                                        </label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-2 text-sm mx-auto">
                                                Already have an account?
                                                <a href="../pages/sign-in.html" className="text-primary text-gradient font-weight-bold">Sign in</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Register;