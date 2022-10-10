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
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import GweiTrack from './Gas';

export default function Simple() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState(null)

  const url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'

  useEffect(() => {
      axios.get(url).then((response) => {
          setData(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])


  if (!data) return null

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
            <Link>Contact Me</Link>
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
                        <Link>Contact Me</Link>
                    </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

  );
}