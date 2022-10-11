import { ReactNode } from 'react';
import {
  Box,
  Icon,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from "next/link"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import GweiTrack from './Gas';
import PriceTrack from './Price';
export default function Simple() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (

      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <GweiTrack />
          <Flex alignItems={'center'}>
          <NextLink href='/contact' passHref>
            <Link><PriceTrack /></Link>
          </NextLink>
          <Button onClick={toggleColorMode} ml={5}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NextLink href='/' passHref>
                    <Link>Home</Link>
                    </NextLink>
                    <NextLink href='/about' passHref>
                        <Link>About Me</Link>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                        <Link>My Projects</Link>
                    </NextLink>
                    <NextLink href='/writing' passHref>
                        <Link>Writing</Link>
                    </NextLink>
                    <NextLink href='/contact' passHref>
                        <Link> <PriceTrack /></Link>
                    </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

  );
}