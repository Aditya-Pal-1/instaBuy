import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import image1 from '../Images/Image-1.png';
import image2 from '../Images/Image-2.png';
import image3 from '../Images/Image-3.png';
import '../App.css'

import line from '../Images/line.png';
import joke from '../Images/joke.png';
import some from '../Images/some.png';
import swas from '../Images/swas.png';
import hash from '../Images/hash.png';
import flutter from '../Images/flutter.png';
import { useNavigate } from 'react-router-dom';


export default function Home({user}) {
    const navigate =useNavigate();
    const handleOnCTAClick=()=>{
        if(user){
            // navigate to product page
            navigate('/products')
        }
        else{
            navigate('/login');
        }
    }

  return (
    <div className='home-container'>
    <Carousel>
        <Carousel.Item>
            <Row>
                <Col>
                    <div style={{padding:'200px'}}>
                        <h1 style={{fontSize:'35px',fontWeight:600}}>SHOP WITH UTMOST</h1>
                        <h3 style={{color:"#216ad9",fontWeight:800}}> <i>STYLE</i> </h3>
                        <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                        <div style={{marginBottom:20}}>
                            <Button onClick={handleOnCTAClick}>Browse Products</Button>
                        </div>
                        <div>
                        <h5>Products are available from:</h5>
                        <img src={line} style={{height:50}} alt="" />
                        <img src={joke} style={{height:50}} alt="" />
                        <img src={some} style={{height:50}} alt="" />
                        <img src={swas} style={{height:50}} alt="" />
                        <img src={flutter} style={{height:50}} alt="" />
                        <img src={hash} style={{height:50}} alt="" />
                    </div>
                    </div>
                 
                </Col>
                <Col>
                <img   src={image1} alt='image is not available' style={{height:'80vh',marginLeft:'3rem'}}/>
                </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
                <Col>
                    <div style={{padding:'200px'}}>
                    <h1 style={{fontSize:'35px',fontWeight:600}}>SHOP WITH UTMOST</h1>
                        <h3 style={{color:"#216ad9",fontWeight:800}}> <i>STYLE</i></h3>
                        <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                        <div style={{marginBottom:20}}>
                            <Button onClick={handleOnCTAClick}>Browse Products</Button>
                        </div>
                        <div>
                        <h5>Products are available from:</h5>
                        <img src={line} style={{height:50}} alt="" />
                        <img src={joke} style={{height:50}} alt="" />
                        <img src={some} style={{height:50}} alt="" />
                        <img src={swas} style={{height:50}} alt="" />
                        <img src={flutter} style={{height:50}} alt="" />
                        <img src={hash} style={{height:50}} alt="" />
                    </div>
                    </div>
                   
                 </Col>
                <Col>
                <img  src={image2} alt='image is not available' style={{height:'80vh'}}/>
                </Col>
            </Row>
        </Carousel.Item> 
        <Carousel.Item>
            <Row>
                <Col>
                <div style={{padding:'200px'}}>
                    <h1 style={{fontSize:'35px',fontWeight:600}}>SHOP WITH UTMOST</h1>
                    <h2 style={{color:"#216ad9",fontWeight:800}}> <i>STYLE</i></h2>
                    <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                    <div style={{marginBottom:20}}>
                        <Button onClick={handleOnCTAClick}>Browse Products</Button>
                    </div>
                    <div>
                        <h5>Products are available from:</h5>
                        <img src={line} style={{height:50}} alt="" />
                        <img src={joke} style={{height:50}} alt="" />
                        <img src={some} style={{height:50}} alt="" />
                        <img src={swas} style={{height:50}} alt="" />
                        <img src={flutter} style={{height:50}} alt="" />
                        <img src={hash} style={{height:50}} alt="" />
                    </div>
                </div>
                </Col>
                <Col>
                <img  src={image3} alt='image is not available' style={{height:'80vh',marginLeft:'5rem'}}/>
                </Col>
            </Row>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}
