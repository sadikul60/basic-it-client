import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import {  Link, useLoaderData  } from 'react-router-dom';
import Categories from '../Categories/Categories';
import { FaDownload, FaStar } from 'react-icons/fa';
import Pdf from 'react-to-pdf';


const ref = React.createRef();

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
                    <Card className='bg-light'>
                        <div className='d-flex justify-content-between fw-bold align-items-center px-3 py-2'>
                            <h5>Download This page in pdf file </h5>
                            <Pdf targetRef={ref} filename="Download.pdf">
                                {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                            </Pdf>
                        </div>
                        <div ref={ref}>
                            <Image 
                                src={image_url} 
                                style={{ height: "330px", width: "100%", padding: "5px", borderRadius: "5px"}}  
                                />
                            <Card.Body>
                            
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
                            <h6 className='mb-3 text-end'><span className='text-light'>Views:</span> {total_view}</h6>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            </Card.Body>
                        </div>
                            <Link className='mb-3 mt-5 mx-3 shadow-lg ' to={`/checkout/${_id}`}><button className='btn btn-outline-primary fw-bold w-100 mx-auto'>Get Primium Access</button></Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;