import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
// import UserNameValidation from '../../Component/UserNameValidation/UserNameValidation';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [regError, setRegError] = useState('')
    // const [userName, error, handleChange] = UserNameValidation()

    const { createUser, loading, updateUser } = useContext(authContext)
    const navigate = useNavigate()
    const handleSignUp = data => {
        setRegError('')
        if (loading) {
            return <div>loading.........</div>
        }
        console.log(data.userName);
        createUser(data.email, data.password)
            .then(result => {
                saveUser(data.email, data.name, data.userName)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/info')
            })
            .catch(err => {
                setRegError(err.message)
                console.log(err);
            })
    }
    const saveUser = (email, name, userName) => {
        const user = { email, name, userName }
        fetch(`${process.env.REACT_APP_API_URI}/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section className="py-8 bg-slate-300">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col space-y-12 w-96 mx-auto p-6 bg-slate-700">
                    <div className="">
                        <h3 className="text-center font-bold text-xl capitalize text-base-100 pb-3">sign up</h3>
                        <div className="form-control mb-3">
                            <label htmlFor='userName' className="label-text text-white mb-2">User Name</label>
                            <input {...register('userName', { required: 'give username', pattern: /^(?=.*[0-9])[a-zA-Z0-9]{4,10}$/, message: 'Username must be 4-10 characters long' })} type="text" placeholder="Give your User userName" className="input w-full rounded-md" />
                            {errors.userName && <p className='text-sm text-primary pt-2 capitalize'>{errors.userName?.message}</p>}
                        </div>
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
                        <p className="text-center text-md capitalize text-secondary">already have an account ? <Link to='/signin' className='text-primary font-medium'>sign in</Link></p>
                    </div>
                    <button type="submit" className='btn text-base-100'>Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;