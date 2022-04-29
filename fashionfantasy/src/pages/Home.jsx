import React, { Fragment } from 'react';
import { isAuth } from '../services/services';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const navigate = useNavigate();
    if(!isAuth()) {
        navigate('/');
        return;
    }
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        return;
    }
return (
<Fragment>
    <p>Welcome to Home Page</p>
    <button onClick={handleLogout}>Log out</button>
</Fragment>
);
    
}

export default Home;