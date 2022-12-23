import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [regError, setRegError] = useState('')

    const bloodGroup = ["O+", "O-", "A+", "A-", "AB+", 'AB-', "B+", "B-"]

    const { createUser, loading, updateUser } = useContext(authContext)
    const navigate = useNavigate()
    const handleSignUp = data => {
        const name = data.name
        const email = data.email
        const dob = data.dob
        const gender = data.gender
        const bloodGroup = data.bloodGroup
        const contact = data.contact
        const lastdonation = data.lastdonation
        const city = data.city
        const details = { name, email, dob, gender, bloodGroup, contact, lastdonation, city }
        setRegError('')
        if (loading) {
            return <div>loading....</div>
        }
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    displayName: name
                }
                //data.name, data.email, data.dob, data.gender, data.bloodGroup, data.contact, data.lastdonation, data.city
                saveUser(details)
                updateUser(userInfo)
                    .then(() => {
                    })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/')
            })
            .catch(err => {
                setRegError(err.message)
                console.log(err);
            })
    }
    const saveUser = (donar) => {
        // const donar = { name, email, dob, gender, bloodGroup, contact, lastdonation, city }
        console.log(donar);
        fetch(`${process.env.REACT_APP_API_URI}/donars`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(donar)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section className="py-8 bg-slate-300">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit(handleSignUp)} className='flex  gap-6  rounded-md shadow-sm justify-center'>
                    <fieldset className=" bg-slate-600 p-6 text-[#eee] rounded">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor='name' className="label text-white">Name</label>
                                <input {...register('name', { required: true })} type="text" placeholder="your name" className="input w-full rounded-md text-gray-900" />
                                {errors.name && <p className='text-red-600 pt-2'> {errors.name?.message} </p>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor='email' className="label text-white">Email</label>
                                <input {...register('email', { required: true })} type="email" placeholder="your email" className="input w-full rounded-md text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label text-sm text-white">Date of Birth </label>
                                <input {...register('dob', { required: true })} type="date" placeholder="Date Of Birth" className="input w-full rounded-md  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className='label text-sm text-white'>Gender</label>
                                <select {...register("gender", { required: true })} className='select w-full text-gray-900'>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="bloodGroup" className="label text-sm text-white">Blood Group</label>
                                <select {...register('bloodGroup', { required: true })} className="select text-gray-900 w-full max-w-xs">
                                    <option disabled selected>Select Your Blood Group</option>
                                    {
                                        bloodGroup.map((group, i) => <option key={i} value={group}>{group}</option>)
                                    }
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label text-sm text-white">Contact No.</label>
                                <input {...register("contact", { required: true })} type="number" placeholder="Contact Number" className="input w-full rounded-md  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label text-sm text-white">Last Donation Date</label>
                                <input type="date" {...register('lastdonation', { required: true })} placeholder="Your last donation date" className="input w-full rounded-md  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label text-sm text-white">City</label>
                                <input type="text" {...register('city', { required: true })} placeholder="Your City" className="input w-full rounded-md  text-gray-900" />
                            </div>
                            <div className="col-span-full ">
                                <label className="label text-sm text-white">Password</label>
                                <input type="password" {...register('password', { required: 'password is required' })} placeholder="password" className="input w-full rounded-md  text-gray-900" />
                            </div>
                            {regError && <p className="py-3 text-primary">{regError}</p>}
                            <button type="submit" className='btn text-base-100'>Sign Up</button>
                            <div className="col-span-3">
                            </div>
                        </div>
                        <p className="text-center text-md capitalize text-secondary">already have an account ? <Link to='/signin' className='text-primary font-medium'>sign in</Link></p>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default SignUp;



// const e = () => {
//     <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col space-y-12 w-96 mx-auto p-6 bg-slate-400">
//         <div className="">
//             <h3 className="text-center font-bold text-xl capitalize text-base-100 pb-3">sign up</h3>
//             <div className="form-control mb-3">
//                 <label htmlFor='userName' className="label-text text-white mb-2">User Name</label>
//                 <input {...register('userName', { required: 'give username', pattern: /^(?=.*[0-9])[a-zA-Z0-9]{4,10}$/, message: 'Username must be 4-10 characters long' })} type="text" placeholder="Give your User userName" className="input w-full rounded-md" />
//                 {errors.userName && <p className='text-sm text-primary pt-2 capitalize'>{errors.userName?.message}</p>}
//             </div>
//             <div className="form-control mb-3">
//                 <label htmlFor='name' className="label-text text-white mb-2">Name</label>
//                 <input {...register('name')} type="text" placeholder="your name" className="input w-full rounded-md" />
//             </div>
//             <div className="form-control mb-3">
//                 <label htmlFor='email' className="label-text text-white mb-2">Email</label>
//                 <input {...register('email', { required: true })} type="email" placeholder="your email" className="input w-full rounded-md" />
//             </div>
//             <div className="form-control mb-3">
//                 <label htmlFor='password' className="label-text text-white mb-2">Password</label>
//                 <input {...register('password', { required: true })} type="password" placeholder="password" className="input w-full rounded-md" />
//             </div>
//             <div className="form-control mb-3">
//                 <label htmlFor='confirm password' className="label-text text-white mb-2">Confirm Password</label>
//                 <input {...register('confirm password', { required: true })} type="password" placeholder="confirm password" className="input w-full rounded-md" />
//             </div>
//             {regError && <p className="py-3">{regError}</p>}
//             <p className="text-center text-md capitalize text-secondary">already have an account ? <Link to='/signin' className='text-primary font-medium'>sign in</Link></p>
//         </div>
//         <button type="submit" className='btn text-base-100'>Sign Up</button>
//     </form>
// }