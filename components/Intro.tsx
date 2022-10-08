import { Heading, Text, Box, Flex, Stack, Image, SimpleGrid} from '@chakra-ui/react';

export default function IntroMe() {

return (

<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
<Box>
<Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
</Box>
<Stack spacing={4}>
  <Heading>Portfolio</Heading>
  <Text color={'gray.500'} fontSize={'2xl'}>
    {/* this is where the wallet $$ api will go */}
    CA$154,000.90
  </Text>
</Stack>
<Flex>
<Box>

</Box>

</Flex>
</SimpleGrid>
 )
}