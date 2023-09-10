"use client"
import { useEffect,useState } from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
function Updateblog(params){
  let route=useRouter()
  const [title,Settitle]=useState()
    const [Pic,Setpic]=useState()
    const[description,Setdescription]=useState()
    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/updateproduct/'+params.params.updateblog,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data.data);
            Settitle(response.data.data.title)
            Setpic(response.data.data.image)
            Setdescription(response.data.data.description)
          })
          .catch((error) => {
            console.log(error);
          });

    },[])
    const Update=()=>{
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/Product/'+params.params.updateblog,
        headers: { 
          'Content-Type': 'application/json'
        },
        data :{
          title:title,
          image:Pic,
          description:description
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data);
        if(response.data.status){
          toast.success("Blog Update")
          route.push("/")
        }
        else{
          toast.error("Something went Wrong")
        }
       
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    return(
        <>
        <h1 className="text-center text-2xl">Edit Blog</h1>
<div  className=" max-w-full p-6 m-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h1 className="text-center text-2xl ">Title</h1>
   <input value={title} className=" outline-double block m-auto  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onChange={(e)=>Settitle(e.target.value)} ></input>
  <h1 className="text-center text-2xl ">Change picture</h1>
  <input value={Pic} className=" outline-double block m-auto  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onChange={(e)=>Setpic(e.target.value)}></input>
   <img  className="m-auto" src={Pic} alt="Not Image Found" />
   <h1 className="text-center text-2xl ">Description</h1>
    <textarea cols={20} rows={20} value={description} className=" outline-4 w-full font-normal text-gray-700 dark:text-gray-400" onChange={(e)=>Setdescription(e.target.value)} ></textarea>
    
    <button onClick={()=>Update()} className="text-white block  bg-blue-800 p-2 rounded mx-auto  w-1/3">Update</button>
</div>
<ToastContainer/>
</>

    )
} 
export default Updateblog