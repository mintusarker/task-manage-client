import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='my-16'>
            <Card className='mx-auto w-96 h-full'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data?.detail}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>

        </div>
    );
};

export default Details;