import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddBlood = () => {
    const bloodGroup = ["O+", "O-", "A+", "A-", "AB+", 'AB-', "B+", "B-"]
    const { register, handleSubmit } = useForm()
    const handleAddBlood = data => {
        const group = data.bloodGroup
        const collectDate = data.collectDate
        const expiryDate = data.expiryDate
        const BloodCollections = { group, expiryDate, collectDate }
        const saveUser = (bCollections) => {
            console.log(bCollections);
            fetch(`${process.env.REACT_APP_API_URI}/bloodSample`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(bCollections)
            }).then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Blood Adding Successful.', {
                            style: {
                                border: '1px solid #DD5236',
                                padding: '16px',
                                color: '#DD5236',
                            },
                            iconTheme: {
                                primary: '#DD5236',
                                secondary: '#FFFAEE',
                            },
                        });
                    }
                })
        }
        saveUser(BloodCollections)
    }
    return (
        <div>
            <h3 className="text-4xl font-bold capitalize">Blood bank </h3>
            <form onSubmit={handleSubmit(handleAddBlood)} className='lg:w-2/3 mt-4'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 capitalize">
                    <div className="form-control">
                        <label htmlFor="bloodGroup" className="label">Blood Group</label>
                        <select {...register('bloodGroup', { required: true })} className="select text-gray-900 w-full">
                            <option disabled selected>Select Your Blood Group</option>
                            {
                                bloodGroup.map((group, i) => <option key={i} value={group} className=''>{group}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="collectDate" className="label">date of collection</label>
                        <input {...register('collectDate', { required: true })} type="date" placeholder='' className="input" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="expiryDate" className="label">expiry date</label>
                        <input {...register('expiryDate', { required: true })} type="date" placeholder='' className="input" />
                    </div>
                </div>
                <div className='mt-4'>
                    <input type="submit" value="Add Blood" className='btn btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default AddBlood;