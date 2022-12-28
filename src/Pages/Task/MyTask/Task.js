import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Task = ({ myTask, refetch, handleDelete }) => {
    const { task } = myTask;
    const navigate = useNavigate()

    const handleComplete = event => {
          const complete = {
            task
          }
        //   console.log(complete)
          fetch('http://localhost:5000/completeTask',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(complete)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            navigate('/completetask')
          })
    }
    return (
        <div className="max-w-sm">
            <Card>
                <h5 className="text-xl font-semibold dark:text-white">
                   Task Details: 
                </h5>
                <p>{task}</p>
                <div className='flex gap-2 mx-auto'>
                <Button onClick={handleComplete} gradientDuoTone="greenToBlue" size="sm">Completed</Button>
                <Button gradientDuoTone="purpleToPink" size="sm">Update</Button>
                <Button onClick={() => handleDelete(myTask?._id)} size="sm" gradientDuoTone="pinkToOrange">Delete</Button>
                </div>
            </Card>
        </div>
    );
};

export default Task;