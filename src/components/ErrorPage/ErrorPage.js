import React from 'react';
import { FaBackspace, FaSadCry } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center w-50 mx-auto align-items-center '>
            <FaSadCry className='w-25 h-25 mt-5'></FaSadCry>
            <h1 className='display-1 fw-bold text-info'>404</h1>
            <h3 className='fw-bold mb-5'>Sorry, page not found.</h3>
            <Link to='/'><button className='btn btn-primary fw-bold'>Go Back <FaBackspace></FaBackspace></button></Link>
        </div>
    );
};

export default ErrorPage;