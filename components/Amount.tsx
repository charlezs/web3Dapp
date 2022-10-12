import {Text} from '@chakra-ui/react';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Amount() {

  const url = 'https://api.etherscan.io/api?module=account&action=balance&address=0x62E724226009DE1EDb66b8b8be841781aeb256de&tag=latest&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'
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
    <Text color={'gray.500'} fontSize={'4xl'}>
    Current ETH Holdings {data.result.slice(0, 3)/100} ETH
    </Text>
 )
}