import React from 'react';
import UseServices from '../../Hooks/Hools';

const ManageServices = () => {
    const [services,setServices]=UseServices();

    const handleDeletebtn=id=>{
        const procede=window.confirm('Ary you sure?');
        if(procede){
          const url=`http://localhost:5000/service/${id}`;
          fetch(url,{
              method:"DELETE",

          })
          .then(res=>res.json())
          .then(data=>{console.log(data)
            const remaing=services.filter(service=> service._id !==id)
            setServices(remaing)
        })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>manage services</h1>
            {
                services.map(service=><div key={service._id}>
                    <h1>{service.name}<button onClick={()=>handleDeletebtn(service._id)}>X</button></h1>
                </div>)
            }
        </div>
    );
};

export default ManageServices;