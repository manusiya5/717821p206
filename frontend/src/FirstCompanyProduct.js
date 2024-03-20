
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route,Link} from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import { Row,Col } from 'react-bootstrap';
const FirstCompanyProduct = () => {
  const cardData = [
    {
      companyName:"AMZ",
      productName:"Phone",
      Category:"Redmi12",
      price:"16,000",
      rating:"4.3",
      discount:"20%",
      availability:"yes",
      productimg:"https://th.bing.com/th/id/OIP.EUcWbfQECBVSFIiJHMdseQAAAA?w=124&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        companyName:"AMZ",
        productName:"Computer",
        Category:"Hp",
        price:"45,000",
        rating:"3.8",
        discount:"42%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.5TZPbwSwvE-GO1wdjqhrZgHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"TV",
        Category:"Sony",
        price:"62,000",
        rating:"3.9",
        discount:"10%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP._OAb31KUJONlnq-c4P6kLwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Earphone",
        Category:"earbuds",
        price:"1500",
        rating:"4.0",
        discount:"5%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.E0HqFb3QUflcVW2tgRROUwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Tablet",
        Category:"",
        price:"12000",
        rating:"4.2",
        discount:"15%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP.4vkoZXKZBrPABKtX8h_B4gHaF3&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Mouse",
        Category:"",
        price:"2500",
        rating:"3.2",
        discount:"5%",
        availability:"yes",
        productimg:"https://www.bing.com/th?id=OIP.quodEz2yD_cWGCENCKGp2gEsDt&w=144&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Keypad",
        Category:"",
        price:"7500",
        rating:"4.2",
        discount:"25%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.bX-Zl-s3TylLGbHS7aWQ5gHaJh&w=220&h=283&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Bluetooth",
        Category:"",
        price:"2500",
        rating:"5.2",
        discount:"5%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP.a3a937sMvpjeI7K33jQOtAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Pendrive",
        Category:"",
        price:"1000",
        rating:"3.2",
        discount:"5%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP.uVO08ARUQKYLzFwLFnq9iwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Remote",
        Category:"",
        price:"500",
        rating:"4.3",
        discount:"2%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP.uVO08ARUQKYLzFwLFnq9iwHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Speaker",
        Category:"",
        price:"2500",
        rating:"3.2",
        discount:"10%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.94xtHUeOEetms5U7lWwShAHaGG&w=275&h=226&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Headset",
        Category:"",
        price:"500",
        rating:"4.2",
        discount:"5%",
        availability:"out-of-stock",
        productimg:"https://th.bing.com/th?id=OIP.TORCD04Xm93oYQn63HdR8QHaHq&w=245&h=254&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },{
        companyName:"AMZ",
        productName:"Laptop",
        Category:"",
        price:"25000",
        rating:"2.5",
        discount:"5%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.5EZRHGR0LgL2IWcQ511TkQHaF5&w=280&h=223&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },
      {
        companyName:"AMZ",
        productName:"PC",
        Category:"",
        price:"50000",
        rating:"4.8",
        discount:"45%",
        availability:"yes",
        productimg:"https://th.bing.com/th?id=OIP.o_23pifDkX7hTNH6hnW4HAAAAA&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },
  ];
  return (
    <div>
            <h2 className="text-center text-secondary">AMZ</h2>

    <div id="bird">
       <Row  >

      {cardData.map((card,i) => (
         <Col lg={4} md={6}   > 
        <h5 className='text-center mt-5'>{card.productName}</h5>

           <Card className='m-4 '>
           <img className="productimage pt-2 w-500 h-500"variant="top" src={card.productimg}  />

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
         </Col>
        
      ))}
       </Row>
      
      </div>
    </div>
  );
};
export default FirstCompanyProduct;;