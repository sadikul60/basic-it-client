import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {_id, image_url, title, rating} = course;
    console.log(course)
    return (
        <Col lg="4" className='mt-4'>
                <Card className='bg-dark'>
                    <Image 
                        src={image_url} 
                        style={{ height: "230px", padding: "5px", borderRadius: "5px"}}  
                        />
                    <Card.Body  className='text-white'>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between mt-4'>
                        <p>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                            <FaStar className='text-warning'></FaStar>
                        </p>
                        <p>{rating?.number}</p>
                    </div>
                    </Card.Body>
                    <Card.Footer className='mb-2'>
                        <Link to={`/courses/${_id}`}><button className='btn btn-outline-primary fw-bold w-100 mx-auto'>Course Details</button></Link>
                    </Card.Footer>
                </Card>
        </Col>
    );
};

export default Course;