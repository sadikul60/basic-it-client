import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = ({_id}) => {
    const [categories, setCategories] = useState([]);
    
    useEffect( () => {
        fetch('https://basic-it-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='my-5 border border-2 py-3 rounded bg-info'>
            {
                categories.map(category => <Category 
                    key={category.id}
                    category = {category}
                    _id = {_id}
                ></Category>)
            }
        </div>
    );
};

export default Categories;