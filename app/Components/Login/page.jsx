"use client"
import { useState } from "react"
import Image from "next/image"
import loginimg from '../../images/Mobile login.png'
import { useRouter } from "next/navigation"
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Signup(){
    let route=useRouter()
    let [user,Setuser]=useState({
        email:"",
        password:""
    })
    const handlechg=(e)=>{
        Setuser({ ...user, [e.target.name]: e.target.value })
    }
   const login=()=>{
    console.log(user)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/Login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data :user
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user_log",true)
        localStorage.setItem("user_uid",response.data.uid)
        if(response.data.status){
            route.push("/")
            toast.success(response.data.msg)
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
        
  <div class=" w-full flex flex-col-2 m-5 justify-center py-8  md:h-screen  pr-8 lg:py-0">
    <div className="bg-blue-200">
        <Image style={{width:"100%",height:"600px"}} className=" hidden lg:block " src={loginimg} alt="" />

    </div>
   
      <div  class="w-full  bg-white-700  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
         
          <div  class="w-full  p-0 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome back
              </h1>
             
                  <div>
                      <label for="email" class="block mb-5 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
                      <input type="email" name="email" onChange={(e)=>handlechg(e)} class=" mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-5 text-sm font-medium text-gray-900 dark:text-white"> Enter Password</label>
                      <input type="text" name="password" onChange={(e)=>handlechg(e)}  placeholder="Enter password" class=" mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button onClick={()=>login()} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logn In</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <a onClick={()=>route.push("Signup")} class=" cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                  </p>
          </div>
      </div>
  </div>
        </div>    
        <ToastContainer/>
    </>
)
}
export default Signup