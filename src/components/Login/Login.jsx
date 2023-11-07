import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../Provider/AuthProvider";

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(authContext)
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        loginUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
            setErrorMessage(error.message)
        })
    }

    const handleGoogleSignup = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="text-center">
            <div className="hero min-h-screen bg-base-200">
                {/* <div className="hero-content flex-col"> */}
                <div className="card md:w-1/3 lg:w-1/3 ">
                    <h2 className="text-4xl font-bold">Sign in or Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <button onClick={handleGoogleSignup} className="btn bg-blue-500 text-white"><FcGoogle className="text-2xl bg-white rounded-lg"></FcGoogle>Sign in with Google</button>
                        <p>or</p>
                        <div className="form-control">
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {
                            errorMessage && <p className="text-red-500">*{errorMessage}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Login</button>
                        </div>
                    </form>
                    <p>You have not an acount? Please <Link to="/register" className="font-bold">Register</Link></p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Login;