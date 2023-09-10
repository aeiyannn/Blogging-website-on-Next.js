"use client"
import { useEffect,useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"


function Allblog(){
  let route=useRouter()
    let [blog,setblog]=useState()
    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/Product',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data.data);
            setblog(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });

    },[])
    return(
        <>
        {blog?
        <div>
        {
            blog.map((v,i)=>{
                return(
<a onClick={()=>route.push("Components/Viewblog/"+v._id)} class="flex cursor-pointer justify-between  max-w-full p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div>
    <div className="flex"> <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-6 w-6 mr-2 rounded-full" alt="" />
    <p className="text-gray-700 text-sm  ">Aeiyankhan</p></div>
   <h5 class=" line-clamp-2 font-mono   m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
    <p class=" hidden lg:block text-xl font-medium text-gray-700 dark:text-gray-400 ">{v.description.substring(0, 336)+"..."}</p>
    <p class="lg:hidden text-sm font-medium text-gray-700 dark:text-gray-400 ">{v.description.substring(0, 36)+"..."}</p>

   </div>     <img className=" lg:w-44 h-20 m-10 sm:h-40 mx-0 my-10  " src={v.image} alt="" />
   
   
</a>

)


}

)

        }
        </div>
        :
       <img className=" w-1/4 h-44 my-60 m-auto " src="https://media.tenor.com/0JK1fHxqYGEAAAAC/loading.gif" alt="" />

        }
        



        </>

    )
  
}
export default Allblog