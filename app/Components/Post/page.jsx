"use client"
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function Postblog(){
    const route=useRouter()
    let useruid=localStorage.getItem("user_uid")
    let[product,setproduct]=useState({
        title:"",
        description:"",
        image:"",
        username:"",
        uid:useruid
        })
    const handlechg=(e)=>{
        setproduct({...product,[e.target.name]:e.target.value})
    }
    const Addblog=()=>{
        console.log(product)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/Product',
            headers: { 
              'Content-Type': 'application/json'
            },
            data :product
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            alert(response.data.msg)
            if (response.data.status){
                route.push("/")
            }

          })
          .catch((error) => {
            console.log(error);
          });
    }
    return(
        <>
        <div className="border-2 border-black m-2 rounded-lg p-4">
            <div className="text-center">Add Blog</div>
           
  
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input onChange={(e)=>handlechg(e)} name="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg:5 step to code" required/>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea onChange={(e)=>handlechg(e)} name="description" cols={15} rows={15} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required/>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Image</label>
            <input onChange={(e)=>handlechg(e)} name="image" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Image link" required/>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
        <input onChange={(e)=>handlechg(e)} name="username" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required/>
    <button onClick={()=>Addblog()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Blog</button>
    </div>


        </>
    )




}
export default Postblog