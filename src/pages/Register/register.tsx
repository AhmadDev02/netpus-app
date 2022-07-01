import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';
import "./register.css";



const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate('/')
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <>
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Register</h2>
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

                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Register</button>
                            <small className="text-muted">By clicking Login, you agree to the terms of use.</small>
                            <hr className="my-4" />
                            <div className="p-4 box mt-3 text-center">
                                Already have an account? <Link to="/">Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Register
