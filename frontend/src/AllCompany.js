 import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route,Link} from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';
const AllCompany = () => {
  const cardData = [
    {
      id: "FirstCompany",
     Name:"AMZ",
     imgSrc:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600",
     path:"/FirstCompanyProduct"
    },
    {
      id: "SecondCompany",
     Name:"FLP",
     imgSrc:"https://wallpaperaccess.com/full/1931176.jpg",
     path:"/SecondCompanyProduct"
    },
    {
      id: "ThirdCompany",
      Name:"SNP",
      imgSrc:"https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path:"/ThirdCompanyProduct"
    },
    {
      id: "FourthCompany",
      Name:"MYN",
      imgSrc:"https://images.pexels.com/photos/273250/pexels-photo-273250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      path:"/FourthCompanyProduct"
    },
    {
        id: "FifthCompany",
        Name:"AZO",
        imgSrc:"https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        path:"/FifthCompanyProduct"
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
               <Link to={card.path}><Button  className=" allDetail " variant="primary">Click me!!</Button></Link>
              </Card.Body>
           </Card>
         </Col>
      ))}
       </Row>
      </div>
    </div>
  );
};
export default AllCompany;