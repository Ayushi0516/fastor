import React, { useEffect, useState } from 'react';
import {Box,Flex,Image,Heading, Stack,Text, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const Resturant=()=>{
    const navigate = useNavigate();
    const [data,setData]=useState();

    const getData=async()=>{
        try{
         let res=await fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118&&",{
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInBob25lIjoiOTgxODk3OTQ1MCIsImRpYWxfY29kZSI6Iis5MSIsImxhc3RfcGFzc3dvcmRfdXBkYXRlIjoiMjAyMi0wMS0yNVQxMTo1NTo0Ny4wMDBaIiwiaWF0IjoxNjcwMDYwMDg0LCJleHAiOjE2NzczMTc2ODR9.R9V-QH8oHFZFqQFkwIx5Sw4gBHIzovIkzwhtVBfSjVI"
              }
          })
          let data = await res.json();

          if ( res.status === 200 ) {
              console.log(data);
              setData(data);
          }
        }
        catch(err){
            console.log(err)
        }
    }

useEffect(() => {
    let token = localStorage.getItem("token");

      getData();

  }, [])

  let arr = JSON.parse(localStorage.getItem('arr')) || [];

    const getItem = (el) => {
      console.log(el);
      arr.push(el);
      localStorage.setItem('arr', JSON.stringify(arr));
      navigate('/details')
    }
  return(
    <Box>
        <Heading>Popular Ones</Heading>
        {
            data?.map((el)=>(
                <Stack  mb="40px" key={el.id}>
                    <Flex display={"flex"} gap="30px" direction="row">
                   <Flex >
              <Image w="50%"   objectFit="cover" src={el.images[0].url}/>
                </Flex> 
                <Flex>
                <Text>Name:{el.restaurant_name}</Text>
                <br/>
                <Text>{el.cuisine_name}</Text>
                <br/>
                <Text>{el.rating.restaurant_avg_rating}</Text>
                <br/>
                <Text>{  el.currency.symbol+ el.avg_cost_for_two}</Text>
                <br/>
                <Button   onClick={() => getItem(el)}>Details</Button>
                </Flex>
                  </Flex>
                     
                </Stack>
              
            ))
        }
    </Box>
  )

}
export default Resturant