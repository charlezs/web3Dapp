import { Heading, Text, useColorModeValue, Flex, Stack, Image,Center, Square, SimpleGrid, Divider, Container, HStack, VStack} from '@chakra-ui/react';
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
  src='https://media.discordapp.net/attachments/985521628500877322/1029872611162857593/White_Formal_LinkedIn_Profile_Picture.png'
/>
<Stack ml={'10'}>
  <Heading fontSize={'5xl'}             color={useColorModeValue('black', 'white')}
>ETH Wallet Spy</Heading>
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