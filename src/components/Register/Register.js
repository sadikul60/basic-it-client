import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import registerImg from '../../assets/register.png'
import { toast } from 'react-toastify';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const { createUser, updateUserProfile, verifyEmail, providerGoogleLogin, providerGithubLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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

     // Login With Google
     const handleSignInWithGoogle = () => {
        providerGoogleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            if(user.emailVerified){
                navigate(from, {replace: true});
                toast.success("Login successfully.");
            }
            else{
                toast.warn('Your email is not verified. Please verify your email address');
            }
        })
        .catch(error => toast.error('Error: ', error.message));
    }

    // Login with GitHub
    const handleSignInWithGithub = () => {
        providerGithubLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user.uid){
                navigate(from, {replace: true});
                toast.success("Login successfully.");
            }
            else{
                toast.warn('Your email is not verified. Please verify your email address');
            }
        })
        .catch(error => console.error("Error", error))
    }

    return (
        <Container className='container mx-auto my-2'>
            <Row>
            <Col lg="6" className='container mx-auto my-5 me-4'>
                <Image
                    rounded
                    style={{height: "100%", width: "100%"}}
                    src={registerImg}
                ></Image>
            </Col>

            <Col lg="5" className='container mx-auto bg-light border border-2 px-5 py-3 my-5 rounded shado'>
                    <h3 className='text-center text-gray'>Please Register Now</h3>
                        <p className='text-danger text-bold'> {error} </p>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>photoURL</Form.Label>
                            <Form.Control type="text" name="photoURL" placeholder="Enter photoURL" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-2 d-flex align-items-center" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setIsDisabled(!isDisabled)} className='me-2' type="checkbox" required />
                            accetp <Link to='/terms' className='ms-2'> terms & conditions</Link>
                        </Form.Group>
                        <p>Already have an account? Please! <Link to='/login'>Login Now</Link> </p>
                        <Button disabled={isDisabled} className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                        <div className='d-flex container w-100 mx-auto  bg-light  mb-3 mt-3 py-3 align-items-center'>
                            <button onClick={handleSignInWithGoogle}  className='btn btn-outline-primary w-50 mx-auto me-2 fw-bold'> <FaGoogle /> Sign In</button>
                            <button onClick={handleSignInWithGithub} className='btn btn-outline-dark w-50 mx-auto fw-bold'> <FaGithub /> Sign In</button>
                        </div>
                    </Form>
            </Col>
            </Row>

        </Container>
    );
};

export default Register;