import { Heading, Text, Box, Flex, Stack, Image,Center, Square, SimpleGrid, Divider, Container, HStack, VStack} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import HistoryCards from './WalletHistory';
import Amount from './Amount';
import TokenCard from './TokenHeld';
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
              <TokenCard />
              <HistoryCards />
    </SimpleGrid>
</Container>

 )
}