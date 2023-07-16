import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './NavBar.css';
import Loading from '../../components/Loading/Loading';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const item = document.getElementById('toogle');
    const side = document.getElementById('sidebar');

    const bgChange = () => {

        item.classList.toggle('active');
        side.classList.toggle('active');
    }

    const buttonRemove = (e) => {
        if (e.target.id !== 'toogle' && e.target.id !== 'sidebar') {
            item.classList.remove('active')
            side.classList.remove('active')
        }

    }


    const logOutUser = () => {
        logOut()
            .then(() => { })
            .catch()
    }

    console.log(user);



    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courseofferlist'>Advising Archive</Link></li>
        <li><Link to='/'>Faculty Predictor</Link></li>
        <li><Link to='/'>CGPA Calculator</Link></li>
        <li><Link to='/'>Contact </Link></li>


        {
            user?.uid ? <>

                <li><Link onClick={logOutUser}> Sign Out </Link></li>
                <li><p className="text-sm text-blue-500 bg-gray-300">{user.displayName}</p></li>
            </> : <>
                <li><Link to='/signup'>Sign Up </Link></li>
                <li><Link to='/login'> Login </Link></li>
            </>
        }
    </>

   
    return (

        <div className="bg-base-100">
            <div className="md:hidden nav-md">
                <div className=''>
                    <div id="toogle" onClick={bgChange} className='bishal' ></div>

                    <div id="sidebar">
                        <ul onClick={buttonRemove}>
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Koncept NSU App</Link>
                </div>
            </div>

            {/* Large and medium */}

            <div className="nav-lg">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Koncept NSU App</Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Navbar;