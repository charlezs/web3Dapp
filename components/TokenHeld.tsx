import { Heading, Text, Box, Flex, Image,Center, Divider, HStack, VStack} from '@chakra-ui/react';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function TokenCard() {

  const url = 'https://api.covalenthq.com/v1/1/address/charles1.eth/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_a975e5abaecd4ae1911d109bc45'
  const [data, setData] = useState(null) as any

  useEffect(() => {
      axios.get(url).then((response) => {
          setData(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])


  if (!data) return null

return (
        <Box borderRadius='lg' borderWidth='3px' textAlign={'center'} w='100%'>
            <Heading mb='2' mt='2'> 
              Tokens Held 
            </Heading>
            <Divider alignItems={'center'}/>
              <Flex overflowY="auto" overflowX="auto" maxH={'359'} mt='1'>
                <Center w='100%'>
                    <VStack>
                        <Box mt={1}>
                              <Box borderRadius='lg' borderWidth='3px' p={'3'} mt={1} w='100%'>
                                <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='50px'
                                    m='1'
                                    src={data.data.items[0].logo_url}
                                />
                                <Text >
                                    {data.data.items[0].contract_name}
                                </Text>

                                <Text>
                                    {data.data.items[0].balance/1000000000000000000}                                
                                </Text>
                                </HStack>
                              </Box>
                              </Box>
                      </VStack>
                   </Center>
                </Flex>
        </Box>
 )
}
