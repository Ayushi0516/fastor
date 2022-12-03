import Otp from "./Otp";
import PhoneNo from "./PhoneNo";
import Resturant from "./Resturant";
import {Routes,Route} from "react-router-dom"
import Details from "./Details";


const AllRoutes = () => {
    return (
      <Routes>
      <Route path="/" element= {<PhoneNo />} />
      <Route path="/otp" element= {<Otp />} />
      <Route path="/resturant" element= {<Resturant />} />
      <Route path="/details" element= {<Details />} />
     
     </Routes>
    )
  }
  
  export default AllRoutes;