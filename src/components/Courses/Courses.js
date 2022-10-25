import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Courses = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>Courses</h1>
        </div>
    );
};

export default Courses;