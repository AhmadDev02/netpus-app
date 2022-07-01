import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { Layer12 } from '../../img/indexImage';


function Navbar() {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <>

            <nav className="p-2 mb-2   navbar-expand-md fixed-top  navbar-light  bg-light ">
                <div className="container-fluid d-grid" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link className="navbar-brand text-black" to="#">NETPUS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation ">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link px-2 link-dark" to='/Home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-2 link-dark" to="/JenisBuku">Jenis Buku</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-2 link-dark" to="/KoleksiBuku">Koleksi Buku</Link>
                                </li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            </form>
                            <div className="d-flex align-items-center">
                                <div className=" text-end">
                                    <Link to={''} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Layer12} alt="Layer12" width="32" height="32" className="rounded-circle" />
                                    </Link>
                                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser2">
                                        <li>{user && user.email}</li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" onClick={handleLogout} to={''} >Sign out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar


