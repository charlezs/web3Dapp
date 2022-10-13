import { Heading, Text, Box, Flex, Image,Center, Divider, HStack, VStack} from '@chakra-ui/react';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HistoryCards() {

  const url = 'https://api.covalenthq.com/v1/1/address/charles1.eth/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_a975e5abaecd4ae1911d109bc45'
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
        <Box borderRadius='lg' borderWidth='3px' textAlign={'center'} w='100%' key={'o'}>
            <Heading mb='2' mt='2'> 
              History 
            </Heading>
            <Divider alignItems={'center'}/>
              <Flex overflowY="auto" overflowX="auto" maxH={'359'} mt='1'>
                <Center w='100%'>
                    <VStack>
                      { data.data.items && data.data.items.map((o) => (
                              <Box borderRadius='lg' borderWidth='3px' p={'3'} mt={'990'} w='100%' key={"o"}>
                              <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='50px'
                                    m='1'
                                    src='https://cdn.discordapp.com/attachments/985521628500877322/1028140475665887232/unknown.png'
                                />
                                <Text
                                textTransform={'uppercase'}
                                fontWeight={'bold'}
                                >
                                   {/* name of events */}
                                   {o.log_events[0]?.decoded?.name}
                                   

                                   
                                </Text>
                                <Text >
                                  {/* time / date of tx */}
                                    Date: {o.block_signed_at.split("T")[0]}
                                </Text>

                                <Text>
                                  {/* value of tx */}
                                  Amount: {o.value/1000000000000000000}
                                </Text>
                              </HStack>
                              </Box>  
                          )
                        )}
                      </VStack>
                   </Center>
                </Flex>
        </Box>
 )
}