import { Box, Flex, Stack ,Image} from "@chakra-ui/react";

const Details=()=>{
    let details = JSON.parse(localStorage.getItem('arr'));
    console.log( details);

    return(
        <div>
            <Box>
                {details?.map((el)=>(
                     <Stack>
                        <Flex>
                            <Image w="50%" src={el.images[0].url}/>
                        </Flex>
                        <Flex>
                        {el.restaurant_name}
                        </Flex>
                     </Stack>
                ))}
            </Box>
        </div>
    )
}
export default Details