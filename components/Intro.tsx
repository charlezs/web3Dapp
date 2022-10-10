import { Heading, Text, Box, Flex, Stack, Image,Center, Square, SimpleGrid, Divider, Container, HStack, VStack} from '@chakra-ui/react';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function IntroMe() {

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
<Container maxW={'5xl'}>
<Flex direction={'row'} w='700px'color='white' mb={'2'}>
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://cdn.discordapp.com/attachments/985521628500877322/1028140475665887232/unknown.png'
/>
<Stack ml={'10'}>
  <Heading fontSize={'5xl'}>Portfolio</Heading>
  <Text color={'gray.500'} fontSize={'4xl'}>
    {/* this is where the wallet $$ api will go */}
    CA$154,000.90 
  </Text>
</Stack>
</Flex>
<Divider></Divider>
<SimpleGrid mt='4'columns={2} spacing={'5'}>
<Box borderRadius='lg' borderWidth='3px' h={'425'} textAlign={'center'}>
    <Heading mb='2' mt='2'> 
      Wallet 
    </Heading>
    <Divider alignItems={'center'}/>
</Box>
<Box borderRadius='lg' borderWidth='3px' h={'425'} textAlign={'center'}>
    <Heading mb='2' mt='2'> 
      History 
    </Heading>
    <Divider alignItems={'center'}/>
    <Box borderRadius='lg' borderWidth='3px' m='3'>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='50px'
            m='1'
            src='https://cdn.discordapp.com/attachments/985521628500877322/1028140475665887232/unknown.png'
        />

        <VStack alignItems={'flex-start'} p='1'>
        <Text
        textTransform={'uppercase'}
        fontWeight={'bold'}
        >
            {/* TX TYPE */}
            {data.result[1].functionName.split("(")[0]}
        </Text>
        <Text>
            {/* DATE */}
            Date:
            {data.result[1].timeStamp}
        </Text>
        </VStack>

        <Text>
            {/* VALUE */}
            Amount:
            {data.result[1].value}
        </Text>
        </HStack>
  
      </Box>
</Box>
</SimpleGrid>
</Container>

 )
}