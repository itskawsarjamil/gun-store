import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = ({ gun, handleCount }) => {
    const { name, action,img } = gun;
    const [modalData, setModalData] = useState({});
    const shadow = {
        boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset',
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl" style={shadow}>
                <figure><img className='h-52' src={img} alt="gun" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{action}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start mt-3  w-full">
                        <div onClick={handleCount} className="badge badge-outline btn btn-accent btn-sm">Add To Card</div>

                        <label onClick={()=>setModalData(gun)} htmlFor="my-modal-3" className="badge badge-outline btn btn-warning btn-sm">Details</label>
                    </div>
                </div>
            </div>
            {
                modalData && (<Modal modalData={modalData} setModalData={setModalData}></Modal>)
            }
        </div>
    );
};

export default SingleGun;