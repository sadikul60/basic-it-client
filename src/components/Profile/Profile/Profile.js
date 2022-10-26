import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className=' text-center border border-4 w-75 mx-auto rounded my-5'>
            <h3 className='bg-info p-3'>{user?.displayName}</h3>
            <Image
                src={user?.photoURL}
                style={{height: "90px", width: "90px"}}
                roundedCircle
            ></Image>
            <h3 className='text-uppercase pt-2'>{user?.displayName}</h3>
            <p className='p-0'>{user?.email}</p>
            <p>ID: {user?.metadata?.createdAt}</p>
            <Link to='/update_profile'><button className='btn btn-info mb-5 mt-3'>Update Profile</button></Link> 
        </div>
    );
};

export default Profile;