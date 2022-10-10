import { Box, HStack, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HistoryCards() {
    const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0x62E724226009DE1EDb66b8b8be841781aeb256de&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
  
    if (!data) return null
  
    return (
        <Flex>
        <Box borderRadius='lg' borderWidth='3px' m={4}w={'100%'}>

          <SimpleGrid columns={4}>
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
            pr='3'
            >
                {/* TX TYPE */}
                {data.result[1].functionName.split("(")}
            </Text>
            <Text         pr='3'>
                {/* DATE */}

                {data.result[1].timeStamp}
            </Text>

            <Text pl="5">
                {/* VALUE */}
                Amount:
                {data.result[1].value/1000000000000000000}
            </Text>
            </HStack>
            </SimpleGrid>

        </Box>
      </Flex>
)
}