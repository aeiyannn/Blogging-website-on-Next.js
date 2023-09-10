"use client"
import axios from "axios";

export default function DeleteBlog(props){
    const Delete=()=>{

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/Product/'+props.id,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            if(response.data.status){
                alert("Blog delete")
            }
          })
          .catch((error) => {
            console.log(error);
          });
    
    }
    return(
        <>
         <button onClick={()=>Delete()} className="bg-red-600 text-white p-2 rounded">Delete</button>

        </>
    )
}