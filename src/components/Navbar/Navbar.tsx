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
    // console.log(user)
    return (
        <>

            <nav className="p-3 mb-2   navbar-expand-md fixed-top  navbar-light  bg-light ">
                <div className="container-fluid d-grid" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start fs-4">
                        <Link className="navbar-brand text-black fs-2" to="#">NETPUS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation ">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0 ml-auto">
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

                            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                            </form> */}
                            <div className="d-flex align-items-center">
                                <div className=" text-end">
                                    <Link to={''} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user && user.photoURL} alt="Layer12" width="32" height="32" className="rounded-circle" />
                                    </Link>
                                    <ul className="dropdown-menu text-small p-2" aria-labelledby="dropdownUser2">
                                        <li className="text-center fs-5 p-4 fw-bold">Halo, {user && user.displayName}!</li>
                                        <li className="bg-primary   text-white"><Link className="dropdown-item text-white text-center fw-bold p-2 rounded" onClick={handleLogout} to={''} >Sign out</Link></li>
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


