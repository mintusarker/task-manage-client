import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('User created successfully')
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }


    return (
        <div className='sm:w-1/2 md:w-1/2 mx-auto rounded-sm my-24 p-5 lg:w-1/3 shadow-lg shadow-slate-500'>
            <h2 className='text-center text-3xl font-semibold my-5'>Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        placeholder="password"
                        required={true}
                    />
                </div>
                <Button type="submit">
                    Sign Up
                </Button>
                {error}
                <p>Already have an account please <Link to='/login'><button className='text-red-600 text-lg'>Login</button></Link></p>
            </form>
        </div>
    );
};

export default SignUp;