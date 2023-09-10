"use client"
import Header from '../Header'
import Allblog from '../allblog'
import Footer from "../Footer"

function Main(){
    let useractive=localStorage.getItem("user_log")
    return(
        <>
        <Header useractive={useractive}/>
        <Allblog/>
        <Footer/>
        </>
    )
}
export default Main