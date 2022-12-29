import React from 'react';
import { toast } from 'react-hot-toast';
import Typical from 'react-typical';

const DailyTask = () => {


    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const task = form.message.value;

        const tasks = {
            task
        }
        console.log(tasks)
        fetch('https://my-task-server-ebon.vercel.app/addTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                toast.success('Task Added Successfully')
            })

    }

    const steps = [
        "Daily Task Add",
        2000,
        "My Task Add",
        2000,
        "Completed Task Add",
        2000
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full mt-32 mb-56'>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold text-green-600'>Manage Daily Task</h2>
                <div className='text-2xl text-rose-700 my-5'>
                    <Typical wrapper="span" steps={steps} loop={Infinity} />
                </div>
            </div>
            <div>
                <form onSubmit={handleAdd}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Put Daily Task</span></label>
                        <input type="text" name='message' className="input input-bordered w-full max-w-xs" required />
                        {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-w-xs my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DailyTask;