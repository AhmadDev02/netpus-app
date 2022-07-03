import react, { useState } from "react";
import { Layer5 } from '../../img/indexImage';
import Card from "./Cards";
import axios from "axios"; 
import Footer from "../../components/Footer/Footer";
import './Styles.css';
import Navbar from "../../components/Navbar/Navbar";

const Newest=()=>{
    const [bookData,setData]=useState([]);
            axios.get('https://www.googleapis.com/books/v1/volumes?q=coding&orderBy=newest&key=AIzaSyDYiKbgt3KxDaNvo8sE2E-WCWIE9pfs3HA'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))

    return(
        <>
            <Navbar />
            <div className="container">
                {/* <img className='header-placeholder-img'
                    width="100%" height="80%" src={Layer5} alt='layer5' />
                <div className="container">
                    <div className="header-caption">
                        <h1>Newest Book In NETPUS</h1>
                        <p>Ini adalah buku terbaru dalam seminggu ini . Silahkan membaca dan happy nice days</p>
                    </div>
                </div> */}
                {
                    <Card book={bookData}/>
                }
            </div>
            <Footer />
        </>
    )
}
export default Newest;