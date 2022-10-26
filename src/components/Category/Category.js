import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import {  Link, useLoaderData  } from 'react-router-dom';
import Categories from '../Categories/Categories';
import { FaStar } from 'react-icons/fa';




const Category = () => {
    const categoryAll = useLoaderData();
    const {_id, image_url, title, details, rating, total_view} = categoryAll;
   


    return (
        <Container className='my-5'>
            <Row>
                <Col lg="4">
                    <Categories></Categories>
                </Col>
                <Col lg="7" className='mt-4'>
                    <Card className='bg-dark'>
                        <Image 
                            src={image_url} 
                            style={{ height: "330px", padding: "5px", borderRadius: "5px"}}  
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
                        <h6 className='text-white mb-3 text-end'><span className='text-light'>Views:</span> {total_view}</h6>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className='mb-2'>
                            <Link ><button className='btn btn-outline-primary fw-bold w-100 mx-auto'>Get Primium Access</button></Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;