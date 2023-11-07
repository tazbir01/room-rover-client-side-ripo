import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

    }
    return (
        <div className="text-center">
            <div className="hero min-h-screen bg-base-200">
                {/* <div className="hero-content flex-col"> */}
                <div className="card md:w-1/3 lg:w-1/3 ">
                    <h2 className="text-4xl font-bold">Sign in or register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <button className="btn bg-blue-500 text-white"><FcGoogle className="text-2xl bg-white rounded-lg"></FcGoogle>Sign in with Google</button>
                        <p>or</p>
                        <div className="form-control">
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Register</button>
                        </div>
                    </form>
                    <p>Already have an acount? Please <Link to="/login" className="font-bold">Login</Link></p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Register;