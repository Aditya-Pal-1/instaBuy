import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import login1 from "../Images/login1.png";
import { useNavigate } from "react-router-dom";

export default function Login({setUser}) {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  return (
    <div style={{ background: "#216ad9" }}>
      <Row style={{height:'92vh',width:'90%',padding:60}}>
        <Col style={{ padding: 100 }}>
          <div>
            <h1 style={{color:'white'}}>InstaBug!</h1>
            <h3 style={{color:'white'}}>One place for all your need</h3>
            <Form>
              <div style={{ width: '90%', display:'flex',justifyContent:"space-between"}}>
                <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="email" onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>
              <Button onClick={()=>{
                localStorage.setItem('userEmail',email);
                setUser(email)
                navigate('/')
              }}
              style={{width:'60%',margin:"1rem",marginBottom:26 ,borderColor:'white'}} variant="primary" type="submit">
                Start Shopping
              </Button>
              <div style={{color:'white'}} >
                Join the club, <a style={{color:'white'}} onClick={()=>{navigate('/signup')}} >Click here</a>
              </div>
            </Form>
          </div>
        </Col>
        <Col>
          <img src={login1} alt="" />
        </Col>
      </Row>
    </div>
  );
}
