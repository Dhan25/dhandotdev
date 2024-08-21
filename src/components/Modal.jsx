import React from 'react'
import { IoClose } from "react-icons/io5";


const Modal = ({ open, onClose, children }) => {
    return (

        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>

            <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 transform 
            ${open ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"}`}>
                <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-full cursor-pointer text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    <IoClose className='h-6 w-6' />
                </button>
                {children}
            </div>
        </div>
        
    )
}

export default Modal