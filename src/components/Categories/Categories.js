import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect( () => {
        fetch('https://basic-it-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='my-5 border border-2 py-3 rounded bg-info shadow-lg'>
            {
                categories.map(category => <p 
                    key={category.id}>
                        <Link to={`/category/${category.id}`}>
                        <button  className='w-100 mx-auto my-2 btn btn-outline-dark fw-bold'>
                            {category.name}
                        </button>
                        </Link>
                    </p>)
            }
        </div>
    );
};

export default Categories;