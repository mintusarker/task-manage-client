import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)
    
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const task = {
                        name: data.name,
                        price: data.price,
                        condition: data.condition,
                        phone: data.phone,
                        location: data.location,
                        category: data.category,
                        detail: data.detail,
                        time: data.time,
                        image: imgData.data.url
                    }

                    // save product information to database
                    // fetch('https://used-products-resale-server-alpha.vercel.app/products', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(product)
                    // })
                    //     .then(res => res.json())
                    //     .then(result => {
                    //         console.log(result);
                    //         toast.success('Product added successfully');
                    //         navigate('/dashboard/myproduct');
                    //     })

                }
            })
    };
    return (
        <div>
            <h2 className='text-2xl text-center my-8 text-red-600'>Add Task</h2>
            <div className='mt-10 w-96 mx-auto'>
                <form onKeyDown={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Task Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: "name is required"
                        })} />
                        {errors.price && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Time Duration</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("time", {
                            required: "time is required"
                        })} />
                        {errors.price && <p className='text-red-600'>{errors.time.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Task Detail</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("detail", {
                            required: "Description is required"
                        })} />
                        {errors.detail && <p className='text-red-600'>{errors.detail.message}</p>}
                    </div>

                    {/* <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Year of Purchase</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("time", {
                        required: "Time is required"
                    })} />
                    {errors.time && <p className='text-red-600'>{errors.time.message}</p>}
                </div> */}


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                            required: "Photo is required"
                        })} />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full max-w-xs my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>

                    {/* <input className='btn' value='Add Product' type="submit" /> */}
                </form>
            </div>
        </div>
    );
};

export default AddTask;