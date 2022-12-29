import React from 'react';

const Footer = () => {
    return (
        <div className='mt-44 lg:mb-0'>
            <footer className="p-4 bg-gray-300 md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex px-5 sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" className="mr-3 h-8" alt=""/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Task-Daily™</a>. All Rights Reserved.
                </span>
            </footer>

        </div>
    );
};

export default Footer;