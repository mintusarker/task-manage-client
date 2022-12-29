import { useQuery } from '@tanstack/react-query';
import { Button, Card, Spinner } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Media = () => {

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

  if(isLoading){
    return <div className='w-40 mx-auto'> <Button outline={true}>
    <div className="mr-3">
      <Spinner
        size="sm"
        light={true}
      />
    </div>
    Loading ...
  </Button></div>
  }

  return (
    <div className='px-16'>
      <h2 className='text-3xl text-center my-10 text-red-600'>Media Route</h2>

      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
            </Card>
          </div>)
        }
      </div>
    </div>
  );
};

export default Media;