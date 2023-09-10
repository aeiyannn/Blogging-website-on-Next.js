"use client"
import { useEffect,useState } from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import axios from 'axios'


let useractive=localStorage.getItem("user_log")
function Seeblog(props){
    let [blog,setblog]=useState([])
    useEffect(()=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/updateproduct/'+props.params.Seeblog,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data.data));
        setblog(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

    },[])
    return(
        <>
    <Header useractive={useractive}/>
    {
      blog=!undefined?
      <>
   <h5 class=" font-sans  text-center mx-100 mt-14 mb-6   mx-80 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
   <div className="border-2 border-gray-200 w-1/2 m-auto rounded mb-2 ">
    <div className="flex">
   <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-12 w-12 mr-2 rounded-full" alt="" />
    <p className="text-black-700 text-md  ">Aeiyankhan <br /> <span className="text-gray-500">published in</span></p>
    
    </div>
   </div>
   <img className="w-1/2 h-96 m-auto  " src={blog.image} alt="" />
    <p class="  w-1/2 m-auto text-3xl font-medium text-gray-700 dark:text-gray-400 ">{blog.description}</p>
</>
:
<h1>Loading</h1>

    }
<Footer/>
   </>

    )
}
export default Seeblog