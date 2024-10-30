import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

function HomePage(props) {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    return (
        <div className='w-100 text-bg-light d-flex flex-column align-items-center justify-content-center'
            style={{ height: "80vh" }}
        >
            {user && user?.email
                ? <h1>This is HomePage. Welcome, { user?.username}!</h1>
                : <h1>This is HomePage. You haven't registered yet!</h1>
            }
            

            <div className='d-flex w-100 justify-content-center align-items-center gap-3 my-2'>
                <Button variant='success' onClick={() => navigate("/register")}>Go to Register</Button>
                <Button variant='primary' onClick={() => navigate("/login")}>Go to Login</Button>
            </div>
        </div>
    );
}

export default HomePage;