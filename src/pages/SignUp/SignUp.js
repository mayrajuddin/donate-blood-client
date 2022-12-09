import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const [regError, setRegError] = useState('')

    const { createUser, loading, updateUser } = useContext(authContext)

    const navigate = useNavigate()
    const handleSignUp = data => {
        setRegError('')
        if (loading) {
            return <div>loading.........</div>
        }
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/')
                console.log(user);
            })
            .catch(err => {
                setRegError(err.message)
                console.log(err);
            })
    }
    return (
        <section className="py-8 bg-slate-300">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col space-y-12 w-96 mx-auto p-6 bg-slate-700">
                    <div className="">
                        <h3 className="text-center font-bold text-xl capitalize text-base-100 pb-3">sign up</h3>
                        <div className="form-control mb-3">
                            <label htmlFor='name' className="label-text text-white mb-2">Name</label>
                            <input {...register('name')} type="text" placeholder="your name" className="input w-full rounded-md" />
                        </div>
                        <div className="form-control mb-3">
                            <label htmlFor='email' className="label-text text-white mb-2">Email</label>
                            <input {...register('email', { required: true })} type="email" placeholder="your email" className="input w-full rounded-md" />
                        </div>
                        <div className="form-control mb-3">
                            <label htmlFor='password' className="label-text text-white mb-2">Password</label>
                            <input {...register('password', { required: true })} type="password" placeholder="password" className="input w-full rounded-md" />
                        </div>
                        <div className="form-control mb-3">
                            <label htmlFor='confirm password' className="label-text text-white mb-2">Confirm Password</label>
                            <input {...register('confirm password', { required: true })} type="password" placeholder="confirm password" className="input w-full rounded-md" />
                        </div>
                        {regError && <p className="py-3">{regError}</p>}
                        <p className="text-center text-lg capitalize text-secondary">already have an account ? <Link to='/signin'>sign in</Link></p>
                    </div>
                    <button type="button" className='btn text-base-100'>Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;