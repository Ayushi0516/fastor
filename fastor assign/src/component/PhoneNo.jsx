import { Box, Button,  Heading, Input} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const PhoneNo=()=>{
    const navigate = useNavigate();
    const [form,setForm]=useState();
    
   
      const handleSubmit = async () => {
       try{
        let res=await fetch("https://staging.fastor.in/v1/pwa/user/register", {
          method: 'POST',
          body: JSON.stringify({
              phone: form,
              dial_code: '+91'
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      let data = await res.json();
      console.log(data);

      if ( res.status === 200 ) {
          navigate("/otp");
           localStorage.setItem("value",form);
      }
     }
      
       catch(err){
        console.log(err)
       }
      };
    return(
      <Box mt="70px" >
        <Heading>Enter Your Mobile Number</Heading>
      <Input mt="60px"  type='tel'  onChange={(e) => setForm(e.target.value)} placeholder='phone number' width="30%"  />
      <br/>
      <Button   onClick={handleSubmit}   mt="20px" w="30%" colorScheme="red" >Send Code</Button>
      </Box>
    )
    
}
export default PhoneNo

