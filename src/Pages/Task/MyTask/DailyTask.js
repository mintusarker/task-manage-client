import React from 'react';
import { toast } from 'react-hot-toast';

const DailyTask = () => {


    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const task = form.message.value;

        const tasks = {
            task
        } 
        console.log(tasks)
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
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
    
    return (
        <form onSubmit={handleAdd}>
            <div className="form-control w-full my-16 mx-auto max-w-xs">
            <label className="label"><span className="label-text">Add your Task</span></label>
            <input type="text" name='message' className="input input-bordered w-full max-w-xs"  required/>
            {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-w-xs my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button> */}
        </div>
        </form>
    );
};

export default DailyTask;