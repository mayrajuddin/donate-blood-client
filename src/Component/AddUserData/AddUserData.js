import React from 'react';

const AddUserData = () => {
    const handleInfo = e => {
        e.preventDefault()
        const form = e.target
        const dob = form.dob.value
        const gender = form.gender.value
        const bGroup = form.bloodGp.value
        const contact = form.contact.value
        const city = form.city.value
        const personData = {
            dob, gender, bGroup, contact, city
        }
        console.log(personData);
    }
    const bloodGroup = ["O+", "O-", "A+", "A-", "AB+", "B+", "B-"]
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleInfo} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="flex row-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 justify-center">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">Date of Birth </label>
                            <input name='dob' type="date" placeholder="Date Of Birth" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className='label text-sm'>Gender</label>
                            <div className="flex gap-6">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3">Male</span>
                                        <input type="radio" name='gender' className="radio checked:bg-red-500" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3 ">Female</span>
                                        <input type="radio" name='gender' className="radio checked:bg-blue-500" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mr-3">Others</span>
                                        <input type="radio" name='gender' className="radio checked:bg-blue-500" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="email" className="label text-sm">Blood Group</label>
                            <select className="select select-ghost w-full max-w-xs">
                                <option disabled selected>Select Your Blood Group</option>
                                {
                                    bloodGroup.map((group, i) => <option key={i} name="bloodGp">{group}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="label text-sm">Contact No.</label>
                            <input name="contact" type="number" placeholder="Contact Number" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label className="label text-sm">City</label>
                            <input type="text" placeholder="Your City" className="input w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>

                        <button type='submit' className='btn'>Submit</button>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Website</label>
                            <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Bio</label>
                            <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddUserData;