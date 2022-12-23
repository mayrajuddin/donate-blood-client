import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const AddUserData = () => {
    const { user } = useContext(authContext)
    const [selectedBlood, setSelectedBlood] = useState()

    const navigate = useNavigate()
    const donarEmail = user.email

    const handleChange = e => {
        return setSelectedBlood(e.target.value)
    }
    const handleInfo = e => {
        e.preventDefault()
        const form = e.target
        const dob = form.dob.value
        const gender = form.gender.value
        const contact = form.contact.value
        const donationDate = form.lastdonation.value
        const city = form.city.value
        const personData = {
            donarEmail, dob, gender, bloodGroup: selectedBlood, donationDate, contact, city
        }
        console.log(personData);
        fetch(`${process.env.REACT_APP_API_URI}/donars`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(personData)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/')
                    toast.success('details added succesfull')
                }
            })

    }
    const bloodGroup = ["O+", "O-", "A+", "A-", "AB+", 'AB-', "B+", "B-"]
    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <form onSubmit={handleInfo} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="flex row-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 justify-center">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">Date of Birth </label>
                            <input name='dob' type="date" placeholder="Date Of Birth" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className='label text-sm'>Gender</label>
                            <div className="flex gap-6 bg-white p-1 rounded">
                                <div className="form-control ">
                                    <label className="label cursor-pointer ">
                                        <span className="label-text mr-3 ">Male</span>
                                        <input type="radio" name='gender' className="radio checked:bg-red-500" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3  ">Female</span>
                                        <input type="radio" name='gender' className="radio checked:bg-red-500" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3 ">Others</span>
                                        <input type="radio" name='gender' className="radio checked:bg-red-500" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="label text-sm">Blood Group</label>
                            <select value={selectedBlood} onChange={handleChange} className="select select-ghost w-full max-w-xs">
                                <option disabled selected>Select Your Blood Group</option>
                                {
                                    bloodGroup.map((group, i) => <option key={i} name="bloodGp" value={group}>{group}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">Contact No.</label>
                            <input name="contact" type="number" placeholder="Contact Number" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">Last Donation Date</label>
                            <input type="date" name='lastdonation' placeholder="Your last donation date" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">City</label>
                            <input type="text" name='city' placeholder="Your City" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <button type='submit' className='btn'>Submit</button>
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default AddUserData;