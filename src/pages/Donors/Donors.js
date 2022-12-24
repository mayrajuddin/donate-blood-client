import React from 'react';
import { useContext } from 'react';
import { DonarsContext } from '../../AuthContext/DonarsInfoProvider/DonarsInfoProvider';
import Spinner from '../../Component/Spinner/Spinner';

const Donors = () => {
    const { donars, isLoading, refetch } = useContext(DonarsContext)
    if (isLoading) {
        return <Spinner />
    }
    refetch()
    return (
        <div className='bg-sky-50 py-8'>
            <div className="container mx-auto">
                <h3 className="text-2xl capitalize py-4">all donors</h3>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>contact</th>
                                    <th>blood Group</th>
                                    <th>last donation</th>
                                    <th>city</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donars.map((donar, i) =>
                                        <tr key={donar._id}>
                                            <th>{i + 1}</th>
                                            <td>{donar.name}</td>
                                            <td><a href={`tel:${donar.contact}`}>{donar.contact}</a> </td>
                                            <td>{donar.bloodGroup} </td>
                                            <td>{donar.lastdonation} </td>
                                            <td>{donar.city} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donors;