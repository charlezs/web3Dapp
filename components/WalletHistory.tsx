import { Box, HStack, Heading, Text } from "@chakra-ui/react"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HistoryCards() {
    const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'
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
        <Box>
        <HStack>
        <image>
            {/* ETH SYMBOL */}
        </image>
        <Heading>
            {/* TX TYPE */}
            {data.result.functionName}
        </Heading>
        <Text>
            {/* DATE */}
            {data.result.timeStamp}
        </Text>
        <Text>
            {/* VALUE */}
            {data.result.value}
        </Text>
        </HStack>
  
      </Box>
    )
}