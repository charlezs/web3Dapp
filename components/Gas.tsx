import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { HStack, Link } from '@chakra-ui/react'
import NextLink from "next/link"

export default function GweiTrack() {
    const url = 'https://www.etherchain.org/api/gasnow'
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
            <Link> {data.data.standard/1000000000} GWEI</Link>
            </NextLink>

    </HStack>
  </HStack>
    )
}