import React, { useEffect, useState } from 'react'
import { Row,Col,Button,Table } from 'react-bootstrap';
import check from '../Images/check.png'
import { useNavigate } from 'react-router-dom';

export default function Cart({cartItems}) {
    const navigate =useNavigate();
    const[totalPrice,setTotalPrice]=useState(0);
    const[totalQuantity,setTotalQuantity]=useState(0);
    useEffect(()=>{
        let tempPrice=0;
        let tempQuantity=0;
        Object.keys(cartItems).map((cartItemId)=>{
            const details=cartItems[cartItemId];
            tempQuantity+=details.quantity;
            tempPrice+=details.quantity * details.price;
        })
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    },[])
  return (
    <div style={{padding:20}}>
        <Row>
            <Col style={{margin:30}}>
            <h3>Your Cart:</h3>
            <div style={{margin:50}}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(cartItems).map((cartItemId)=>{
                            const itemDetails=cartItems[cartItemId];
                            return(
                                <tr>
                                    <td>{itemDetails.title}</td>
                                    <td>{itemDetails.quantity}</td>
                                    <td>{itemDetails.quantity * itemDetails.price}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <th>Total</th>
                            <th>{totalQuantity}</th>
                            <th>{totalPrice}</th>
                        </tr>
                    </tbody>
                </Table>
                </div>
                <Button onClick={()=>{navigate('/checkout')}} style={{marginLeft:30}}>Check Out</Button>
            </Col>
            <Col>
                <img src={check}  alt="" />
            </Col>
        </Row>
    </div>
  )
}
