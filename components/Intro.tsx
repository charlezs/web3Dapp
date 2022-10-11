import { Heading, Text, Box, Flex, Stack, Image,Center, Square, SimpleGrid, Divider, Container, HStack, VStack} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import HistoryCards from './WalletHistory';
import Amount from './Amount';

export default function IntroMe() {
return (
<Container maxW={'100%'}>
<Flex direction={'row'} w='700px'color='white' mb={'2'}>
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://cdn.discordapp.com/attachments/985521628500877322/1028140475665887232/unknown.png'
/>
<Stack ml={'10'}>
  <Heading fontSize={'5xl'}>Portfolio</Heading>
<Amount />
</Stack>
</Flex>
<Divider></Divider>
    <SimpleGrid mt='4'columns={2} spacing={'3'}>
            <Box borderRadius='lg' borderWidth='3px' h={'425'} textAlign={'center'} maxW='100%'>
                <Heading mb='2' mt='2'> 
                  Wallet 
                </Heading>
                <Divider alignItems={'center'}/>
              </Box>
              <HistoryCards />
    </SimpleGrid>
</Container>

 )
}