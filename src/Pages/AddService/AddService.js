import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url=`http://localhost:5000/service/`
        fetch(url,{
            method:"post",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>add add service</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name",{ required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description", { pattern: /^[A-Za-z]+$/i })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { min: 18, max: 99 })} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img", { min: 18, max: 99 })} />
                <input type="submit" value="Add User"/>
            </form>
        </div>
    );
};

export default AddService;