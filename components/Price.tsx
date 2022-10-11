import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import NextLink from "next/link"

export default function PriceTrack() {
    const url = 'https://api.coingecko.com/api/v3/coins/ethereum?tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false'
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
    <HStack pl={6} spacing={100} alignItems={'center'}>
    <HStack
      as={'nav'}
      spacing={60}
      display={{ base: 'none', md: 'flex' }}>
            <NextLink href='/' passHref>
            <Text> ETH Price: ${data.tickers[0].last} USD</Text>
            </NextLink>

    </HStack>
  </HStack>
    )
}