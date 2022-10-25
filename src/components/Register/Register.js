import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import registerImg from '../../assets/register.png'
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate('/');
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.warn('Please verify your email address.');
            console.log(user);
        })
        .cathe( error => setError(error.message));
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then( () => { })
        .catch(error => setError(error.message))
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then( () => { })
        .catch(error => setError(error.message))

    }
    return (
        <Container className='container mx-auto my-5'>
            <Row>
            <Col lg="6" className='my-5 me-4'>
                <Image
                    rounded
                    style={{height: "100%", width: "100%"}}
                    src={registerImg}
                ></Image>
            </Col>

            <Col lg="5" className='bg-light border border-2 p-5 my-5 rounded shado'>
                    <h3 className='text-center text-gray'>Please Register Now</h3>
                        <p className='text-danger text-bold'> {error} </p>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>photoURL</Form.Label>
                            <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setIsDisabled(!isDisabled)} className='me-2' type="checkbox" required />
                            accetp <Link to='/terms' className='ms-2'> terms & conditions</Link>
                        </Form.Group>
                        <Button disabled={isDisabled} className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
            </Col>
            </Row>

        </Container>
    );
};

export default Register;