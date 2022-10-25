import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState();
    const {signIn, providerGoogleLogin, providerGithubLogin, setLoading} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // login with Email & Password
    const handlerSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset()
            setError('');
            
            if(user.emailVerified){
                navigate(from, {replace: true});
                toast.success("login successfully.");
            }
            else{
                toast.warn('Your email is not verified. Please verify your email address');
            }
            console.log(user);
        })
        .catch(error => setError(error.message))
        .finally( () => setLoading(false))
    }


    // Login With Google
    const handleSignInWithGoogle = () => {
        providerGoogleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error("Error", error));
    }

    // Login with GitHub
    const handleSignInWithGithub = () => {
        providerGithubLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error("Error", error))
    }
    return (
        <div>
            <div className='w-50 mx-auto border bg-light border-2 p-3 mt-5 mb-3 rounded'>
                <Form onSubmit={handlerSignIn}>
                    <h3 className='text-center text-gray mb-3'>Please Login Now</h3>
                        <p className='text-danger text-bold'>{error}</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div className='d-flex align-items-center'>
                <hr className='w-25 mx-auto my-3' />
                <span className='text-center h1'>OR</span>
                <hr className='w-25 mx-auto my-3' />
            </div>
            <div className='container w-50 mx-auto border border-2 bg-light rounded mb-5 mt-3'>
                <button onClick={handleSignInWithGoogle} className='btn btn-outline-primary w-100 mx-auto mb-3 py-2 fw-bold'> <FaGoogle /> Sign In With Google</button>
                <button onClick={handleSignInWithGithub} className='btn btn-outline-dark w-100 mx-auto mb-3 py-2 fw-bold'> <FaGithub /> Sign In With GitHub</button>
                <button className='btn btn-outline-primary w-100 mx-auto mb-3 py-2 fw-bold'> <FaFacebook /> Sign In With Facebook</button>
            </div>
        </div>
    );
};

export default Login;