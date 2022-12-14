import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { IoMdMailUnread, IoLogoTwitter, IoIosVideocam } from 'react-icons/io';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Made by the one and only me, Charles Nyabeze the Third. </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Email Me'} href={'mailto:charlesnnyabeze@gmail.com'}>
              <IoMdMailUnread />
            </SocialButton>
            <SocialButton label={'Follow Me'} href={'https://twitter.com/intent/user?screen_name=learn_charles'}>
              <IoLogoTwitter />
            </SocialButton>
            <SocialButton label={'Chat with Me'} href={'https://calendly.com/charles1x/meet-charles?month=2022-10'}>
              <IoIosVideocam />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }