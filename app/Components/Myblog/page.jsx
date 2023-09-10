"use client"
import { useEffect,useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import DeleteBlog from './DeleteBlog'


function Allblog(){
    let route=useRouter()
    let useruid=localStorage.getItem("user_uid")
    let [blog,setblog]=useState([])
    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/Product/'+useruid,
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
        <h1 className="text-center text-2xl">My Blog</h1>
        {
            blog?.map((v,i)=>{
                return(
                  <div className="max-w-full p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                  
                  <a href="#" class="flex justify-between">
                  <div>
                   <div className="flex"> <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-6 w-6 mr-2 rounded-full" alt="" />
                   <p className="text-gray-700 text-sm  ">Aeiyankhan</p></div>
                  <h5 class=" line-clamp-2 font-mono   m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
                   <p class=" text-lg font-medium text-gray-700 dark:text-gray-400">{v.description.substring(0, 466)+"..."}</p>
               
                  </div>     <img className="w-40 h-40 m-10 " src={v.image} alt="" />
                  
               </a>
               <button onClick={()=>route.push("Myblog/"+v._id)} className="bg-green-600 text-white p-2 rounded m-2" >Edit</button>
              <DeleteBlog id={v._id}/>
               </div>
)
            })
        }



        </>

    )
}
export default Allblog