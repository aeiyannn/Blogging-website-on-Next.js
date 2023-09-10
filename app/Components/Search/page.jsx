"use client"
import { useState} from "react"
import { useRouter } from "next/navigation"
import {BsChevronDown,BsSearch} from 'react-icons/bs'
import axios from "axios"
function Search(){
  let route=useRouter()
    let [Search,setSearch]=useState("")
    let[data,setdata]=useState([])
    let[Error,setError]=useState()
const getdata=()=>{
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/Searchproduct',
        headers: { 
          'Content-Type': 'application/json'
        },
        data :Search
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data));
          setdata(response.data.data)
          setError(response.data.message)
        
       
      })
      .catch((error) => {
        console.log(error);
      });
      
}
        return(
        <>

<nav class="bg-white dark:bg-gray-900 sticky w-full z-20   top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center  mx-auto ">
      <img src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo.png" class=" m-0 h-20 w-50 mr-3" alt=" Logo"/>
  <div>
    <div className="border-2  rounded-full border-gray-300 outline-none p-2 bg-gray-100" >
    <input  value={Search} className=" bg-gray-100 outline-none "  type="text" placeholder="search blog " onChange={(e)=>setSearch(e.target.value)}  />
    <button onClick={()=>getdata()}><BsSearch/></button>
    </div>
    
  </div>

  </div>
</nav>
{data?
<div>
{data.map((v, i) => {
                        return (
                          <a onClick={()=>route.push("Viewblog/"+v._id)} class="flex justify-between  cursor-pointer max-w-full p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                          <div>
                           <div className="flex"> <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-6 w-6 mr-2 rounded-full" alt="" />
                           <p className="text-gray-700 text-sm  ">Aeiyankhan</p></div>
                          <h5 class=" line-clamp-2 font-mono   m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
                           <p class=" hidden lg:block text-xl font-medium text-gray-700 dark:text-gray-400 ">{v.description.substring(0, 336)+"..."}</p>
                           <p class="lg:hidden text-sm font-medium text-gray-700 dark:text-gray-400 ">{v.description.substring(0, 36)+"..."}</p>
                       
                          </div>     <img className=" lg:w-44 h-20 m-10 sm:h-40 mx-0 my-10  " src={v.image} alt="" />
                       
                       </a>

                        )
                    })
            }
            </div>
            :
            <>
            <h1 className="text-black text-3xl text-center">{Error==null?"Not Search Yet":Error}</h1>
            <img className="m-auto" src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-3428237-2902696.png?f=webp" alt="" />
            </>
            }
            

        </>
    )
}

export default Search