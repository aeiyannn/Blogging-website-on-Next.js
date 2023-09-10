"use client"
import {useState} from 'react'
import Image from "next/image"
import axios from 'axios'
import signimg from '../../images/signuppic.png'
import { useRouter} from 'next/navigation'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Signup(){
    const route=useRouter()
    const [user,Setuser]=useState({
        name:"",
        email:"",
        password:"",
        number:"",
        
    })
    const handlechg=(e)=>{
        Setuser({ ...user, [e.target.name]: e.target.value })
    }
   const Signup=()=>{
    console.log(user)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/Signup',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : user
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data));

        
        if(response.data.status){
          toast.success(response.data.msg)
            route.push("/Components/Login")
        }
        else{
          toast.error(response.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
      });
   }
return(
    <>
    <div>
        
  <div class=" w-full flex flex-col-2 m-5 justify-center  py-8  md:h-screen  pr-8 lg:py-0 p-6">
    <div className="bg-green-200">
        <Image style={{width:"100%",height:"600px"}} className=" hidden lg:block " src={signimg} alt="" />

    </div>
   
         <div  className="w-full  lg:w-4/6 ">
          <div  class="w-full  p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create account
              </h1>
              <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Name </label>
                      <input type="text" name="name" onChange={(e)=>handlechg(e)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="data"/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
                      <input type="email" name="email" onChange={(e)=>handlechg(e)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="data"/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Enter Password</label>
                      <input type="text" name="password" onChange={(e)=>handlechg(e)} id="password" placeholder="min 6 letter" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="data"/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Number</label>
                      <input type="number" name="number" onChange={(e)=>handlechg(e)} id="confirm-password" placeholder="Enter Number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="data"/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button onClick={()=>Signup()} className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a onClick={()=>route.push("Login")} class=" cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
          </div>
      </div>
  </div> 
  </div>  
  <ToastContainer />
    </>
)
}
export default Signup