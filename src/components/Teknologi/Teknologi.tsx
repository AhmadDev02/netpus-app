import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar';

const Teknologi = () => {


    const [data, setData] = useState<any[]>([])
    const getData = async() => {
        await fetch('https://www.googleapis.com/books/v1/volumes/?q=teknologi&key=AIzaSyAtM9oy6pZ3r1jwDqSIA_2fO4Yy57J03Eg&maxResults=40').then(res=> res.json()).then(res => (
            setData(res.items)
        ))
    }
    console.log(data)


    useEffect(() => {
        getData();
    }, [])
    

    return (
        <>
        <Navbar />
        <div className='container mt-5 qori_wrapper d-flex flex-wrap'>
            {data.map((d, id) => (
                <div key={id} className='mx-3 mb-2'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ height: '15rem' }}src={d.volumeInfo.imageLinks.smallThumbnail} />
                        <Card.Body>
                        <Card.Title>{d.volumeInfo.title}</Card.Title>
                        <Card.Text>
                        {d.volumeInfo.authors}
                        </Card.Text>
                        <Card.Text>Publisher : {d.volumeInfo.publisher}
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
           
            {/* Ini bagian footer */}
            <Footer />
        </div>
        </>
        
    )
}

export default Teknologi
