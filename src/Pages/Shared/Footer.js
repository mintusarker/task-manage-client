import React from 'react';

const Footer = () => {
    return (
        <div className='mt-28 lg:mb-0'>
            <footer class="p-4  bg-gray-300 md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex px-5 sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" class="mr-3 h-8" alt=""/>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Task-Daily™</a>. All Rights Reserved.
                </span>
            </footer>

        </div>
    );
};

export default Footer;