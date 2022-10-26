import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    
    // const [photoURL, setPhotoURL] = useState(user.photoURL);
    const photURLRef = useRef(user.photoURL);
    const nameRef = useRef(user.displayName);
    const navigate = useNavigate()

    const handleUpdateProfile = (event) => {

        event.preventDefault();
        const name = nameRef.current.value;
        const photoURL = photURLRef.current.value;

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then( () => { })
        .catch( error => console.error( 'Error', error))
        console.log(user)
        navigate('/update_profile');
        toast.success('Updated Your Profile');
    }
    return (
        <div className='text-center border border-4 w-75 mx-auto rounded my-5'>
            <h3 className='bg-info p-2'>Update Profile</h3>

            <Form onSubmit={handleUpdateProfile} className='text-start p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user.email} type="email" name="email" placeholder="Enter email"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update Name</Form.Label>
                    <Form.Control ref={nameRef} defaultValue={user.displayName} type="text" name="name" placeholder="Enter name"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update photoURL</Form.Label>
                    <Form.Control ref={photURLRef} defaultValue={user.photoURL} type="text" name="photoURL" placeholder="Enter photoURL" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateProfile;