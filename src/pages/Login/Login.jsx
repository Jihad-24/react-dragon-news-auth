import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login location',location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // login user
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error.message);
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <h1 className="text-4xl mt-10 font-bold text-center">Login your account!</h1>
                <form
                    onSubmit={handleLogin}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover">
                                Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">

                        <button className="btn btn-primary">Login</button>

                    </div>
                </form>
                <p className="text-center text-[#706F6F] font-medium">Don’t Have An Account ?
                    <Link to={"/register"} className="text-[#F75B5F] font-bold"> Register</Link> </p>

            </div>
        </div>
    );
};

export default Login;