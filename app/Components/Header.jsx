"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {BsChevronDown,BsSearch} from 'react-icons/bs'
function Header(props){
    let route =useRouter()
    let [show,setshow]=useState(true)
    const [dropdownOpen, setdropdownOpen] = useState(false);
      const [useractive,Setuseractive]=useState(props.useractive)
      const [Search,setSearch]=useState()
    const menu=()=>{
      setshow(!show)
    }
    const logout=()=>{
      localStorage.removeItem("user_log");
     Setuseractive(false)
    }
        return(
        <>

<nav class="bg-white dark:bg-gray-900 sticky w-full z-20   top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
      <img src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo.png" class=" m-0 h-20 w-50 mr-3" alt=" Logo"/>
  <div>
    <div className="hidden lg:block border-2 rounded-full border-gray-300 outline-none p-2 bg-gray-100" >
    <input  value={Search} className=" bg-gray-100 outline-none "  type="text" placeholder="search blog " onChange={(e)=>setSearch(e.target.value)}  />
    <button onClick={()=>route.push("Components/Search/")}><BsSearch/></button>
    </div>
     <div className="lg:hidden sm:block">
    <button  onClick={()=>route.push("Components/Search")}><BsSearch/></button>
    </div>
    
  </div>
  <div class="flex md:order-2">
    {
      useractive?
      <>
      <p onClick={()=>{route.push("Components/Post")}} class= " cursor-pointer  text-black hover:text-blue-800  px-4 py-2 text-center mr-3 md:mr-0 ">Write a blog</p>
      <img  className="h-10 w-10 hidden lg:block" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
      <div  onClick={()=>{setdropdownOpen(!dropdownOpen)}}>
      <i className=" hidden lg:block  h-10 w-10">< BsChevronDown/></i>
      <div
                            class={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute right-0 z-40  w-1/4 rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
                            <a
                              onClick={()=>route.push("Components/Myaccount")}
                                class=" text-center block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                            >
                              User info
                            </a>
                            <a
                               onClick={()=>route.push("Components/Myblog")}
                                class=" text-center block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                            >
                                My ads
                            </a>
                            <a
                                href="javascript:void(0)"
                                class="block  text-center py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                            >
                              Setting
                            </a>
                            <a
                               onClick={()=>logout()}
                                class=" text-center block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
                            >
                                Logout
                            </a>
                        </div>
      </div>
      <img  className="h-10 w-10  sm:block lg:hidden" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
      <div  onClick={()=>menu()} >
      <i className=" sm:block lg:hidden  h-10 w-10">< BsChevronDown/></i>
    </div>
   </>
    :
    <>
     <p onClick={()=>{route.push("Components/Login")}} class= " cursor-pointer sm:w-full text-black hover:text-blue-800  px-4 py-2 text-center mr-3 md:mr-0 ">Login</p>
    <button onClick={()=>{route.push("Components/Login")}} class= "lg:w-52 sm:w-full text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
   </>

    }
 
  </div>
  {
    !show?
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-orange-600 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Ads</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">User info</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Setting</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
      </li>
    </ul>
  </div>:
  <div className="hidden" />
  }
  
  </div>
</nav>

        </>
    )
}
export default Header