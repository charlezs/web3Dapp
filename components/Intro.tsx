import { Heading, Text, Box, Flex, Stack, Image,Center, Square, SimpleGrid, Container} from '@chakra-ui/react';

export default function IntroMe() {

return (

<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
<Flex direction={'row'} color='white'>
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
</SimpleGrid>

 )
}