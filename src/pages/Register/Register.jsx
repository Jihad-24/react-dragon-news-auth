import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="mb-16">
            <NavBar></NavBar>
            <div className="">
                <h1 className="text-4xl mt-10 font-bold text-center">Register your account!</h1>
                <form
                    onSubmit={handleRegister}
                    className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter Photo URL"
                            className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center text-[#706F6F] font-medium">Already Have An Account ?
                    <Link to={"/login"} className="text-[#F75B5F] font-bold">  Login Now!</Link> </p>

            </div>
        </div>
    );
};

export default Register;