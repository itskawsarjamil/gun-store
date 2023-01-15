import React from 'react';

const Modal = ({modalData,setModalData}) => {
    const {name, action, bullet, img}=modalData;
    console.log(modalData);
    const clearData=()=>{
        setModalData(null);
        console.log(modalData);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={clearData} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h4>Bullet: {bullet}</h4>
                    <p>Action: {action}</p>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quae.</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;