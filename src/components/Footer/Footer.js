import React from 'react';
import logo from '../../assets/logo2.png'

const Footer = () => {
    return (
        <div className='bg-dark mb-0 pb-0'>
            <div className='text-center text-light py-4'>
                <img className='rounded-circle' style={{width: '70px', height: '70px'}} src={logo} alt="" />
                <h1 className=''>Basic IT</h1>
                <hr />
            </div>
            <div className='text-light text-center pb-4'>
                <h6>Copyright all Reserved by Basic IT, 2022</h6>
            </div>
        </div>
    );
};

export default Footer;