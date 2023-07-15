import React from 'react';
import backgroundImage from '../../images/background-2.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='background overflow-hidden'> 
         <img src={backgroundImage} alt="backgroundImage"/>  
        </div>
    );
};

export default Home;