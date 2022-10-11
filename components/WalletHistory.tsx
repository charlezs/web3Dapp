import { Heading, Text, Box, Flex, Image,Center, Divider, HStack, VStack} from '@chakra-ui/react';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HistoryCards() {

  const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0x62E724226009DE1EDb66b8b8be841781aeb256de&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'
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
              History 
            </Heading>
            <Divider alignItems={'center'}/>
              <Flex overflowY="auto" overflowX="auto" maxH={'359'} mt='1'>
                <Center w='100%'>
                    <VStack>
                      { data.result && data.result.map((o) => (
                              <Box borderRadius='lg' borderWidth='3px' p={'3'} mt={'5'} w='100%'>
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
                                    {o.functionName.split("(")[0]}
                                </Text>
                                <Text >
                                    {o.timeStamp}
                                </Text>

                                <Text>
                                    Amount:
                                    {o.value/1000000000000000000}
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