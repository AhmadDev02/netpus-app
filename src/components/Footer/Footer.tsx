import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="container">
                <p className="float-end"><Link to="#">Back to top</Link></p>
                <p>&copy; 2022 ED_10, Generasi GIGIH 2.0. &middot; <Link to="#">Privacy</Link> &middot; <Link to="#">Terms</Link></p>
            </footer>
        </>
    )
}

export default Footer
