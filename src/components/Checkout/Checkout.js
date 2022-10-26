import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='fw-bold mt-5 border border-2'>Welcome, {user?.displayName}</h3>
        </div>
    );
};

export default Checkout;