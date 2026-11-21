import React from 'react'
import Mynav from '../Components/Mynav'
import Para from '../Components/para';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';

function Home() {
    return (
        <div>
            <Mynav />
            <Gallery/>

            <Container className="my-5">
                <Row className="align-items-center ">

                    <Col md={6}>
                        <img
                            src="https://computerguru.co.in/images/futue-tech.png"
                            alt="Future Technology"
                            className="img-fluid border rounded-5 mx-2 bg-warning"
                        />
                    </Col>

                    <Col md={6} className='' >
                        <h1 className='text-bold'>About Computer Guru Training Institute, Rishikesh</h1>
                        <p className='p-2'>
                            Your career deserves more than theory. Computer Guru Training Institute (CGTI) is a computer training institute in Rishikesh, Uttarakhand, built on one goal — helping every student walk out ready for the real working world. For 8+ years, we have shaped careers through hands-on, offline classroom training led by real trainers, not recorded videos or generic online modules.

                        </p>
                        <p className='p-2'>
                             This is the age of AI, and we are preparing our students for it, not leaving them behind — integrating Artificial Intelligence into our programs so students graduate ready for tomorrow's careers. We run two branches in Rishikesh — IDPL (Main Branch) and Shyampur — along with a collaboration centre at Morning Bells Academy, Bapugram, and ongoing community initiatives across the region.
                        </p>
                    </Col>

                </Row>
            </Container>

            
            <Para/>
            <Footer />
        </div>
    )
}

export default Home