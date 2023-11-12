import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

const Register = () => {
    const {creatUser, loginWithGoogle} = useContext(authContext)
    const [errorMessage, setErrorMessage] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        setErrorMessage('')

        if (password.length < 6) {
            return setErrorMessage('Please give more than 6 character password.')
        } else if (! /[A-Z]/.test(password)) {
            return setErrorMessage('Please add any capital letter.')
        } else if (! /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            return setErrorMessage('Please add any speacial character.')
        }

        creatUser(email, password)
        .then(result => {
            console.log(result.user)

            updateProfile(result.user, {
                displayName: name,
            })
            swal('Register successfull',"Please login","success")
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    const handleGoogleSignup = () =>{
        loginWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    
    return (
        <div className="text-center">
            <Helmet>
                <title>RoomRover | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                {/* <div className="hero-content flex-col"> */}
                <div className="card md:w-1/3 lg:w-1/3 ">
                    <h2 className="text-4xl font-bold">Sign in or register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <button onClick={handleGoogleSignup} className="btn bg-blue-500 text-white"><FcGoogle className="text-2xl bg-white rounded-lg"></FcGoogle>Sign in with Google</button>
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
                        {
                            errorMessage && <p className="text-red-500">*{errorMessage}</p>
                        }
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