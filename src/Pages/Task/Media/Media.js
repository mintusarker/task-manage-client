import { useQuery } from '@tanstack/react-query';
import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Media = () => {

  // const [tasks, setTasks] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:5000/myTask')
  //     .then(res => res.json())
  //     .then(data => setTasks(data))
  // }, [])

  const { data: tasks = [], isLoading, refetch } = useQuery({
    queryKey: ['myTasks'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/myTask');
        const data = await res.json();
        return data
    }
})

  const handleDeleteProduct = id => {
    fetch(`http://localhost:5000/myTask/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch();
          toast.success('deleted successfully');
        }
      })
  };

  return (
    <div>
      <h2 className='text-3xl text-center my-10 text-red-600'>Media Route</h2>

      <div className='gap-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          tasks?.map(task => <div className="max-w-sm">
            <Card className='h-full' imgSrc={task?.image}>
              <h5 className="text-2xl font-semibold tracking-tight dark:text-white">
                Task Name : {task?.name}
              </h5>
              <h5 className="text-xl font-semibold tracking-tight dark:text-white">
                Duration Time : {task?.time}
              </h5>
              <div className='flex mx-auto gap-5'>
                <Link to={`/myTask/${task?._id}`}><Button className='w-32' gradientDuoTone="purpleToBlue">
                  Detail
                </Button></Link>
                <Button onClick={()=>handleDeleteProduct(task?._id)} className='w-32' gradientDuoTone="cyanToBlue">
                  Delete
                </Button>

              </div>
              {/* <Link to={`/task/${task?._id}`}><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-w-xs my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</button></Link> */}

            </Card>
          </div>)
        }
      </div>
    </div>
  );
};

export default Media;