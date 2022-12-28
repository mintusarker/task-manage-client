import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='px-5'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="">
                    <span className="self-center text-green-500 text-3xl whitespace-nowrap font-semibold dark:text-white">
                        Task Management
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link to='/'><Button className='my-2' color='light'>Home</Button></Link>
                    <Link to='/addtask'><Button className='my-2' color='light'>Add Task</Button></Link>
                    <Link to='/mytask'><Button className='my-2' color='light'>My Task</Button></Link>
                    <Link to='/completetask'><Button className='my-2' color='light'>Complete Task</Button></Link>
                    <Link to='/media'><Button className='my-2' color='light'>Media Route</Button></Link>
                   {
                    user?.email? <>
                     <Link><Button onClick={handleLogOut} className='my-2' color='light'>Log Out</Button></Link>
                    </> : 
                    <>
                    <Link to='/login'><Button className='my-2' color='light'>Login</Button></Link>
                    <Link to='/signup'><Button className='my-2' color='light'>Sign Up</Button></Link>
                    </>
                   }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navber;