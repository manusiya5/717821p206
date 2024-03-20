
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route,Link} from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';
const SecondCompanyProduct = () => {
  const cardData = [
    {
      productName:"Phone",
      Category:"Redmi12",
      price:"16,000",
      rating:"4.3",
      discount:"20%",
      availability:"yes",
    },
    {
        productName:"Computer",
        Category:"Hp",
        price:"45,000",
        rating:"3.8",
        discount:"42%",
        availability:"yes",
      },{
        productName:"TV",
        Category:"Sony",
        price:"62,000",
        rating:"3.9",
        discount:"10%",
        availability:"out-of-stock",
      },{
        productName:"Earphone",
        Category:"earbuds",
        price:"1500",
        rating:"4.0",
        discount:"5%",
        availability:"yes",
      },{
        productName:"Tablet",
        Category:"",
        price:"12000",
        rating:"4.2",
        discount:"15%",
        availability:"out-of-stock",
      },{
        productName:"Mouse",
        Category:"",
        price:"2500",
        rating:"3.2",
        discount:"5%",
        availability:"yes",
      },{
        productName:"Keypad",
        Category:"",
        price:"7500",
        rating:"4.2",
        discount:"25%",
        availability:"yes",
      },{
        productName:"Bluetooth",
        Category:"",
        price:"2500",
        rating:"5.2",
        discount:"5%",
        availability:"out-of-stock",
      },{
        productName:"Pendrive",
        Category:"",
        price:"1000",
        rating:"3.2",
        discount:"5%",
        availability:"out-of-stock",
      },{
        productName:"Remote",
        Category:"",
        price:"500",
        rating:"4.3",
        discount:"2%",
        availability:"out-of-stock",
      },{
        productName:"Speaker",
        Category:"",
        price:"2500",
        rating:"3.2",
        discount:"10%",
        availability:"yes",
      },{
        productName:"Headset",
        Category:"",
        price:"500",
        rating:"4.2",
        discount:"5%",
        availability:"out-of-stock",
      },{
        productName:"Laptop",
        Category:"",
        price:"25000",
        rating:"2.5",
        discount:"5%",
        availability:"yes",
      },
      {
        productName:"PC",
        Category:"",
        price:"50000",
        rating:"4.8",
        discount:"45%",
        availability:"yes",
      },
  ];
  return (
    <div>
            <h2 className="text-center text-secondary">FLP</h2>

    <div id="bird">
       <Row  >

      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
        <h5 className='text-center mt-5'>{card.productName}</h5>

           <Card className='m-4 '>
            
           <h5 className='ms-3 mt-3'>{card.Category}</h5>
          
           <div className="d-flex">
           <h5 className='m-2 ps-3'>{"$"+card.price} </h5>
           <h5 className="mt-1 m-2 text-success">the discount is {card.discount}</h5>
           </div>
           <div className="d-flex ms-2 ps-3">
           <h5 className=''>Rating is: </h5>
           <h5 className=' text-success ps-2'> {"  "+card.rating+"*"}</h5>
           </div>         
              <div className="d-flex ms-2 ps-3">
           <h5 className=''>Availability is: </h5>
           <h5 className=' text-success ps-2'> {"  "+card.availability}</h5>
           </div>
            <Card.Body>
               <Card.Text>
               </Card.Text>
               <Button  className=" allDetail " variant="primary">View more</Button>
            </Card.Body>
           </Card>
           <hr></hr>
         </Col>
        
      ))}
       </Row>
      
      </div>
    </div>
  );
};
export default SecondCompanyProduct;;