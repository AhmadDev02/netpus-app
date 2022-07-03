import react, { useState } from "react";
import { Layer13, Layer10, Layer5, Layer9 } from '../../img/indexImage';
import Card from "./Card";
import axios from "axios"; 
import Footer from "../../components/Footer/Footer";
import './Style.css';
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home=()=>{
    const [search, setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt: { key: any; })=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDYiKbgt3KxDaNvo8sE2E-WCWIE9pfs3HA'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <Navbar />
        
            {/* Ini adalah Carousel */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='bd-placeholder-img'
                            width="100%" height="100%" src={Layer5} alt='layer5' />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Good Days Everyone</h1>
                                <p>Semoga hari kamu menyenangkan dengan membaca buku digital </p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Find Your Book Here</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='bd-placeholder-img'
                            width="100%" height="100%" src={Layer10} alt='layer10' />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Newest Book In NETPUS</h1>
                                <p>Ini adalah buku terbaru dalam seminggu ini . Silahkan membaca dan happy nice days</p>
                                <p><Link className="btn btn-lg btn-primary" to="/Newest">Learn more</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='bd-placeholder-img'
                            width="100%" height="100%" src={Layer9} alt='layer9' />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Hal - Hal Tentang Kami</h1>
                                <p>Kamu bisa lihat development dalam pengembangan aplikasi NetPus</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Gallery Development</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Ini adalah Header + Kolom search buku */}
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="../../img/2.png" alt=""/>
                    <img className='beranda-img-1'
                            width="100%" height="100%" src={Layer13} alt='layer13' />
                </div>   
            </div>


            {/* Ini adalah Container untuk buku */}
            <div className="container">
                {
                    <Card book={bookData}/>
                }
            </div>
            <Footer />
        </>
    )
}
export default Home;