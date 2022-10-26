import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {user} =useContext(AuthContext);

    const handleSubmit = () => {
        toast.success('Submited Successfully.')
    }
   
    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='fw-bold mt-5 border border-2'>Welcome, {user?.displayName}</h3>

            <div className='w-100 mx-auto border bg-light border-2 p-3 mt-5 mb-3 rounded'>
                <Form>
                    <div className='mb-2'>
                        <p className='p-0 m-0'>Full Name</p>
                        <Form.Control type="text" defaultValue={user.displayName} name="" id="" placeholder='Type Your Name.' />
                    </div>
                    <div className='mb-2'>
                        <p className='p-0 m-0'>Email</p>
                        <Form.Control type="email" readOnly defaultValue={user.email} name="" id="" placeholder='Type Your Email.' />
                    </div>
                    <div className='mb-3'>
                        <p className='p-0 m-0'>Full Address</p>
                        <Form.Control type="text" name="" id="" placeholder='Type Your Name.' />
                    </div>
                    <div className='mb-5'>
                        <select name="option" id="" required>
                            <option value="">MS Office</option>
                            <option value="">Graphics Design</option>
                            <option value="">Web Design</option>
                            <option value="">Game Development</option>
                            <option value="">Web Development</option>
                            <option value="">Mobile Development</option>
                        </select>
                    </div>
                    <Button onClick={handleSubmit} className='w-100' variant="primary">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;