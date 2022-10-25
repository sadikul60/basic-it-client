import React from 'react';
import { Link  } from 'react-router-dom';

const Category = ({category, _id}) => {
    

    return (
        <div className='w-100 mx-auto px-5'>
            <Link to={`/courses/${_id}`}><button className='w-100 mx-auto my-2 btn btn-outline-dark fw-bold'>{category?.name}</button></Link>
        </div>
    );
};

export default Category;