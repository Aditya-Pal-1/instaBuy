import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button,Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails({cartItems,handleAddToCart}) {
  const location = useLocation();
  const { title, price, images, description, category, id } = location.state;
  const [otherproducts, setOtherproducts] = useState([]);
  const navigate= useNavigate();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1 }/products?limit=20&offset=0`);
        setOtherproducts(response.data);
        console.log(response.data)
    }
    getData();
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <Row>
        <Col lg={2}>
          <div>
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  width={150}
                  style={{ marginBottom: 20, borderRadius: 8 }}
                />
              );
            })}
          </div>
        </Col>
        <Col lg={4}>
          <div>
            <img
              src={images[0]}
              width={300}
              style={{ marginBottom: 20, borderRadius: 8 }}
              alt=""
            />
            <h3>{title}</h3>
            <h3>${price}</h3>
            <div>{description}</div>
            <Button style={{ marginTop: 40 }} onClick={()=>{
                if(id in cartItems){
                    const currentItem=cartItems[id];
                    handleAddToCart({[id]:{title,price,quantity:currentItem.quantity+1}})
                }
                else{
                    handleAddToCart({[id]:{title, price, quantity:1}})
                }
                // navigate('/cart')
            }}>
            Add to cart</Button>
          </div>
        </Col>
        <Col>
          <h2>Other products in same Category</h2> 
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {otherproducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  style={{ width: "8rem", border: "none", margin: 20 }}
                >
                  <Card.Img  src={product.images[0]} />
                  <Card.Title>{product.title.split(" ")[0]}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    onClick={() => {
                      navigate(`/product/${product.id}`, { state: product });
                    }}
                    style={{ width: 120 }}
                  >
                    View item
                  </Button>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}
