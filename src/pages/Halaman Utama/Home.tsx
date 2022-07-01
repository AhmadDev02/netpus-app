import { Layer10, Layer11, Layer4, Layer5, Layer7, Layer9 } from '../../img/indexImage';
import Footer from '../../components/Footer/Footer'
import './Home.css';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import React from 'react'


const Home = () => {

    return (
        <>
            <Navbar />
            {/* ini adlaah coureasel */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img className='bd-placeholder-img'
                            width="100%" height="100%" src={Layer5} alt='layer5' />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Good Days Everyone</h1>
                                <p>Semoga hari kamu menyenangkan dengan membaca buku digital </p>
                                <p><Link className="btn btn-lg btn-primary" to="/Register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='bd-placeholder-img'
                            width="100%" height="100%" src={Layer10} alt='layer10' />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Buku Terfavorit Di NETPUS</h1>
                                <p>Ini adalah buku terfavorit dalam seminggu ini . Silahkan membaca dan happy nice days</p>
                                <p><Link className="btn btn-lg btn-primary" to="#">Learn more</Link></p>
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

            {/* Ini Body HOME */}
            <div className="container marketing" >
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">NETPUS</h2>
                        <p className="lead">NetPus adalah sebuah aplikasi website perpustakaan berbasis digital
                            yang dibuat untuk memudahkan dalam membaca dan juga meningkatkan daya baca pengguna khususnya
                            di era modern sekarang ini.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" src={Layer4} alt='layer1' />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Layanan Yang Ada Di NetPus:</h2>
                        <p className="lead">
                            <ul>
                                <li>
                                    Akses Bisa Dimana Saja
                                </li>
                                <li>
                                    Buku Berasal Dari Sumber Refrensi Terkemuka
                                </li>
                                <li>
                                    Beragam Pilihan Buku
                                </li>
                                <li>
                                    Mudah Dicari
                                </li>
                            </ul>

                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" src={Layer7} alt='layer2' />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Pengguna NetPus</h2>
                        <p className="lead">
                            Pengguna NetPus bisa dari kalangan anak muda di umur 5-15 Tahun dan juga
                            kaum remaja di umur 15-30 tahun dan seterusnya. Tidak ada kata terlambat
                            dalam mengejar ilmu pengetahuan baik itu dari dalam negeri maunpun luar
                            negeri. Semoga dengan adanya layanan Internet Perpustakaan NetPus bisa memberikan
                            hal terbaik dalam membantu user hal membaca.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" src={Layer11} alt='layer3' />
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>

            {/* Ini adalah Footer */}
            <Footer />
        </>
    )
}

export default Home


