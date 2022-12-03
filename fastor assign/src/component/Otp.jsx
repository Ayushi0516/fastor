import React, { useEffect, useState } from 'react';
import {Box, Button, Heading, PinInput, PinInputField} from '@chakra-ui/react';
import { useNavigate } from 'react-router';


const Otp=()=>{
    const navigate=useNavigate();
    const[val,setVal]=useState();
    const [form,setForm]=useState();

    const login=async()=>{
        try{
        let res=await fetch("https://staging.fastor.in/v1/pwa/user/login",{
    method: 'POST',
    body: JSON.stringify({
        phone: form,
        otp: val,
        dial_code:"+91"
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
let data = await res.json();

if ( res.status === 200 ) {
    navigate('/resturant');
    console.log(data.data.token)
    localStorage.setItem("token", JSON.stringify(data.data.token));
}
   
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        setVal(localStorage.getItem("value"));
      }, [])
      
    return(
       <div>
        <Box mt="60px">
    <Heading>OTP Verification </Heading>
    <PinInput size="md"  mt="50px">
    <PinInputField onChange={(e) => setVal(e.target.value)}/>
     <PinInputField onChange={(e) => setVal(e.target.value)}/>
    <PinInputField onChange={(e) => setVal(e.target.value)}/>
    <PinInputField onChange={(e) => setVal(e.target.value)}/>
    <PinInputField onChange={(e) => setVal(e.target.value)}/> 
    </PinInput> 
    <br/>
    <Button onClick={login} mt="20px" w="20%" colorScheme="red" >Verify</Button>

        </Box>

       </div>
    )
}
export default Otp