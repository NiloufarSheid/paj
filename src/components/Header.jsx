import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillAlert } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";


const Header = () => {
  return (
    <Container style={{marginTop:"20px"}}  >
     
        <Row >
          
        <Col md={8} sm={12}>
        <h1>وضعیت استان :لرستان</h1>
        <div className='situation'><AiFillAlert fontSize={30} color='blue' /><p>وضعیت تایید نشده استان</p></div>
        </Col>
    
        <Col md={4} sm={12} style={{lineHeight:"0.2"}}>
        <p>   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <FaCircle color='rgb(3, 0, 141)' />  </p>
        <p>  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <FaCircle color='rgb(2, 178, 175)' /></p>
        <p>   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <FaCircle color='rgb(184, 0, 216)' /></p>
        <p>   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ <FaCircle color='rgb(46, 150, 255)' /></p>
        </Col>

        </Row>
        </Container>
   
  );
}

export default Header;