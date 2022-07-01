import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';
import "./login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate('/Home')
        } catch (err: any) {
            setError(err.message)
        }
    }

    const handleGoogleSignIn = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/Home");
        } catch (error: any) {
            console.log(error.message);
        }
    };
    return (
        <>

            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Login</h2>
                    </div>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <div className="modal-body p-5 pt-0">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Masuk</button>
                            <small className="text-muted">By clicking Login, you agree to the terms of use.</small>
                            <hr className="my-4" />

                            <div>
                                <GoogleButton
                                    className="g-btn"
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>
                            <div className="p-4 box mt-3 text-center">
                                Don't have an account? <Link to="/Register">Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


// masih tahapa perbaikan di tahap firebase , login ,home,register