import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const MyTask = () => {
    // const [myTasks, setMyTasks] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/addTask')
    //         .then(res => res.json())
    //         .then(data => setMyTasks(data))
    // }, [])

    const { data: myTasks = [], isLoading, refetch } = useQuery({
        queryKey: ['myTasks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addTask');
            const data = await res.json();
            return data
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/addTask/${id}`, {
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

    const handleUbmitComplete = event => {
        
    }
    return (
        <div>
            <h2 className='text-3xl my-16 font-medium text-red-700 text-center'>My Tasks</h2>
            <div className='mx-20'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell className='text-rose-600'>
                            Task Description
                        </Table.HeadCell>
                        <Table.HeadCell className='text-rose-600'>
                            Update
                        </Table.HeadCell>
                        <Table.HeadCell className='text-rose-600'>
                            Delete
                        </Table.HeadCell>
                        <Table.HeadCell className='text-rose-600'>
                            Completed
                        </Table.HeadCell>
                        {/* <Table.HeadCell>
                            <span className="sr-only">
                                Edit
                            </span>
                        </Table.HeadCell> */}
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            myTasks.map(myTask => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {myTask?.task}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button size="sm" gradientMonochrome="success">Update</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => handleDelete(myTask?._id)} size="sm" gradientMonochrome="success">Delete</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button size="sm" gradientMonochrome="success">Completed</Button>
                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default MyTask;