import  React from "react";
import { Row, Col, Form, Button} from "react-bootstrap";
import signup from "../Images/signup.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
                <Form.Group style={{width:"90%"}} className="mb-3" controlId="formBasic">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
              <div style={{ width: '90%', display:'flex',justifyContent:"space-between"}}>
             
                <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{width:"49%"}} className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>
              <Button onClick={()=>{
                localStorage.setItem('userEmail',email);
                setUser(email);
                navigate('/');
              }}
              style={{width:'60%',margin:"1rem",marginBottom:26 ,borderColor:'white'}} variant="primary" type="submit">
                Join The Club
              </Button>
              <div style={{color:'white'}} >
                Already a member? <a style={{color:'white'}} onClick={()=>{navigate('/login')}}  >Click here</a>
              </div>
            </Form>
          </div>
        </Col>
        <Col>
          <img src={signup} style={{height:'65vh'}} alt="" />
        </Col>
      </Row>
    </div>
  );
}
