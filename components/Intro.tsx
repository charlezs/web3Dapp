import { Heading, Text, Box, Flex, Stack, Image,Center, Square, SimpleGrid, Divider, Container} from '@chakra-ui/react';

export default function IntroMe() {

return (
<Container maxW={'5xl'}>
<Flex direction={'row'} w='700px'color='white' mb={'2'}>
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://cdn.discordapp.com/attachments/985521628500877322/1028140475665887232/unknown.png'
  alt='Dan Abramov'
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
<Box borderRadius='lg' borderWidth='3px' h={'100px'}>
    hey hey hey
</Box>
<Box borderRadius='lg' borderWidth='1px' h={'100px'}>
    hey hey hey
</Box>
</SimpleGrid>

</Container>

 )
}