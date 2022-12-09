import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import { FaGoogle } from "react-icons/fa";
const SignIn = () => {
    const { register, handleSubmit } = useForm()
    const { loginUser, googleLogin } = useContext(authContext)


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGoogleLogin = () => [
        googleLogin()
            .then(result => {
                navigate(from, { replace: true })
            })
    ]
    return (
        <section className="py-8 bg-slate-300">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col space-y-6 w-96 mx-auto p-6 bg-slate-700 rounded-md">
                    <div className="">
                        <h3 className="text-center font-bold text-xl capitalize text-base-100 pb-3">Sign In</h3>
                        <div className="form-control mb-3">
                            <label htmlFor='email' className="label-text text-white mb-2">Email</label>
                            <input {...register('email', { required: true })} type="email" placeholder="your email" className="input w-full rounded-md" />
                        </div>
                        <div className="form-control mb-3">
                            <label htmlFor='password' className="label-text text-white mb-2">Password</label>
                            <input {...register('password', { required: true })} type="password" placeholder="password" className="input w-full rounded-md" />
                        </div>
                    </div>
                    <p className="text-center text-lg capitalize text-white">new to donate blood ? <Link className='font-semibold text-primary' to='/signup'>sign up</Link></p>
                    <div className="text-gray-300 text-center">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-36 mx-auto text-lg"> <FaGoogle className='mr-4 ' size={17} /> Google</button>
                    <input type="submit" value="Sign in" className='capitalize text-lg btn text-base-100' />
                </form>
            </div>
        </section>
    );
};

export default SignIn;