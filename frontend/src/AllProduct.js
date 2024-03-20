import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route,Link} from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';
const AllProduct = () => {
  const cardData = [
    {
      id: "FirstCompany",
     Name:"AMZ",
     imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
    },
    {
      id: "SecondCompany",
     Name:"FLP",
     imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
    },
    {
      id: "ThirdCompany",
      Name:"SNP",
      imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
    },
    {
      id: "FourthCompany",
      Name:"MYN",
      imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
    },
    {
        id: "FifthCompany",
        Name:"AZO",
        imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
      },
  ];
  return (
    <div>
    <div id="bird">
       <Row  >
      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
           <Card className='m-4'>
             <img className="pt-2"variant="top" src={card.imgSrc}  />
             <Card.Body>
               <Card.Text>
                 <h5 className='text-center'>{card.Name}</h5>
               </Card.Text>
               <Button  className=" allDetail " variant="success">View products!!</Button>
             </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
      {/* <Link to='/'> <Button className=' homeButton justify-content-end align-items-end' variant="success" size="lg">Go Home</Button></Link> */}
      </div>
    </div>
  );
};
export default AllProduct;