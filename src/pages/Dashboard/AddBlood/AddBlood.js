import React from 'react';

const AddBlood = () => {
    const handleAddBlood = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h3 className="text-4xl font-bold capitalize">Blood bank </h3>
            <form onSubmit={handleAddBlood}>
                <div className="flex row-span-3 gap-6">
                    <div className="form-control">
                        <label htmlFor="bloodGroup" className="label">Blood Group</label>
                        <input type="text" placeholder='Blood Group' className="input" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="bloodGroup" className="label">Blood Group</label>
                        <input type="text" placeholder='Blood Group' className="input" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="bloodGroup" className="label">Blood Group</label>
                        <input type="text" placeholder='Blood Group' className="input" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBlood;