import React from 'react';
import { FaSadCry } from 'react-icons/fa';

const PandingModal = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="chat-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h4 className="font-bold text-lg capitalize text-primary border-b pb-3">work in  progress...</h4>
                    <p className="py-4 capitalize font-mono font-semibold text-xl">sorry for the temporary inconvenience. thanks for being with us!</p>
                    <p className=' text-center'> <FaSadCry size={28} className='inline text-primary' /> </p>
                    <div className="modal-action">
                        <label htmlFor="chat-modal" className="btn">close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PandingModal;