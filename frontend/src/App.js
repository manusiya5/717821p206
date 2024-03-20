import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
 import SignUp from './SignUp';
import AllCompany from './AllCompany'
import AllProduct from './AllProduct';
import FirstCompanyProduct from './FirstCompanyProduct'
import SecondCompanyProduct from './SecondCompanyProduct'
import ThirdCompanyProduct  from './ThirdCompanyProduct';
import FourthCompanyProduct from './FourthCompanyProduct.JS';
import FifthCompanyProduct from './FifthCompanyProduct';
import { Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
   <div>
     
   <div>
     <BrowserRouter>
     
      <Link to='/'></Link>
      <Routes>
      <Route path='/' element={< SignUp/>} />
        <Route path='/SignUp' element={< SignUp/>} />
        <Route path='/AllCompany' element={< AllCompany/>} />
        <Route path='/AllProduct' element={< AllProduct/>} />
        <Route path='/FirstCompanyProduct' element={< FirstCompanyProduct/>} />
        <Route path='/SecondCompanyProduct' element={< SecondCompanyProduct/>} />
        <Route path='/ThirdCompanyProduct' element={< ThirdCompanyProduct/>} />
        <Route path='/FourthCompanyProduct' element={< FourthCompanyProduct/>} />
        <Route path='/FifthCompanyProduct' element={< FifthCompanyProduct/>} />


      </Routes>
      </BrowserRouter>
   </div>


   </div>
  );
}
export default App;