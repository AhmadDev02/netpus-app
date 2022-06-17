import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-black" to="#">NETPUS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation ">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link text-black-50" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black-50" to="/JenisBuku">Jenis Buku</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black-50" to="/KoleksiBuku">Koleksi Buku</Link>
                            </li>
                        </ul>
                        <form className="w-25 me-1 d-flex" role="search">
                            <input type="search" className="form-control form-control-dark text-black bg-light" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div className=" text-end">
                            <Link to='/Login' type="button" className="btn btn-outline-primary me-2">Login</Link>
                            <Link to='/Register' type="button" className="btn btn-primary">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


