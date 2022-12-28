import { useQuery } from '@tanstack/react-query';
import { Button, Card } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CompleteTask = () => {

    const { data: completes = [], isLoading, refetch } = useQuery({
        queryKey: ['completeTask'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/completeTask');
            const data = await res.json();
            return data
        }
    })

    const handleTaskDelete = id => {
        fetch(`http://localhost:5000/completeTask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Task deleted successfully')
                }
            })
    };
    return (
        <div>
            <h1 className='text-2xl text-center text-rose-600 my-8'>Complete Task</h1>
            <div className='gap-6 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    completes.map(complete => <div className="max-w-sm">
                        <Card>
                            <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                               Task Details:
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                               {complete?.task}
                            </p>
                            <div className="flex gap-2 mx-auto">
                                <div>
                                    <Button onClick={()=>handleTaskDelete(complete?._id)} gradientDuoTone="greenToBlue">
                                        Delete
                                    </Button>
                                </div>
                                <div>
                                   <Link to='/mytask'><Button gradientDuoTone="purpleToPink">
                                        Not Completed
                                    </Button></Link>
                                </div>
                            </div>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;