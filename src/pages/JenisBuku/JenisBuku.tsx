import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import {Layer4, Layer11, Layer6, Layer7, Layer3} from '../../img/indexImage'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const JenisBuku = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
                <Card style={{ width: '18rem' }}>
                    <img src={Layer4} alt="" width={50} height={50} />
                    <Card.Body>
                        <Card.Text>
                        <p className="fs-4">
                            Programming
                        </p>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-white fw-bold text-decoration-none" to="/programming">Selengkapnya</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <img src={Layer11} alt="" width={50} height={50} />
                    <Card.Body>
                        <Card.Text>
                        <p className="fs-4">
                            Santai
                        </p>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-white fw-bold text-decoration-none" to="/santai">Selengkapnya</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <img src={Layer7} alt="" width={50} height={50} />
                    <Card.Body>
                        <Card.Text>
                        <p className="fs-4">
                            Story
                        </p>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-white fw-bold text-decoration-none" to="/story">Selengkapnya</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <img src={Layer6} alt="" width={50} height={50} />
                    <Card.Body>
                        <Card.Text>
                        <p className="fs-4">
                            Edukasi
                        </p>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-white fw-bold text-decoration-none" to="/edukasi">Selengkapnya</Link></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <img src={Layer3} alt="" width={50} height={50} />
                    <Card.Body>
                        <Card.Text>
                        <p className="fs-4">
                            Teknologi
                        </p>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-white fw-bold text-decoration-none" to="/teknologi">Selengkapnya</Link></Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default JenisBuku
