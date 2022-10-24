import React from 'react';
import { FaSadCry } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className='text-center w-50 mx-auto align-items-center '>
            <FaSadCry className='w-25 h-25 mt-5'></FaSadCry>
            <h1 className='display-1 fw-bold text-info'>404</h1>
            <h3 className='fw-bold'>Sorry, page not found.</h3>
        </div>
    );
};

export default ErrorPage;