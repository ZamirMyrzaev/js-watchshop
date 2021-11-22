import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css'

const Modal = () => {
    return (
        <div className="modalMainBlock">
             <div className="modalChildBlock">
                 <Link to="/">
                     <button>x</button>
                 </Link>
                 <span>Успешно оплачено!</span>
             </div>
        </div>
    );
};

export default Modal;