import Link from 'next/link'
import Head from 'next/head'
import { Fragment, useState, useEffect, useCallback } from 'react'
import Router, { useRouter } from 'next/router'

import {
  Box, Spacer, Button, Avatar, HStack, Text, Heading, Center,
  Menu, MenuButton, MenuList, MenuItem, IconButton, useToast, 
  Stack, StackDivider, Img, Flex, Container, VStack, AvatarGroup,
  useColorMode, useDisclosure, useColorModeValue as mode, Input,
  useBreakpointValue, FormControl, FormLabel, InputGroup, Tag,
  InputLeftElement, InputRightElement
} from '@chakra-ui/react'

import { 
  IoArrowForwardOutline, IoSunnyOutline, IoMoonOutline, IoSearchSharp, 
  IoHomeOutline, IoFilmOutline, IoVideocamOutline, IoLayersOutline, 
  IoListOutline, IoPricetagOutline, IoPersonOutline, IoPeopleOutline, 
  IoAlbumsOutline, IoMenu, IoApps, IoNotificationsSharp, IoCaretDown,
  IoTvOutline, IoStorefrontOutline, IoPeopleCircleOutline, IoGameControllerOutline
} from 'react-icons/io5'

import { FaFacebookMessenger } from 'react-icons/fa'

import usersData from '../data/users.json'
import { AppHeader, AppBrand, AppLinks } from '../components/Header'
import { LeftSideBar, RightSideBar } from '../components/Sidebar'


export const Layout = ({ children }) => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const mobile = useBreakpointValue({ base: true, md: false })

  const routes = [
    {
      path: '/',
      label: 'Explore',
      icon: <IoHomeOutline fontSize="25px" />
    },
    {
      path: '/categories',
      label: 'Categories',
      icon: <IoTvOutline fontSize="25px" />
    },
    {
      path: '/ambassadorship',
      label: 'Refer To Earn',
      icon: <IoStorefrontOutline fontSize="25px" />

    },
    {
      path: '/tokens',
      label: 'Buy with Tokens',
      icon: <IoPeopleCircleOutline fontSize="25px" />
    },
    {
      path: '/u/profile',
      label: 'Profile',
      icon: <IoGameControllerOutline fontSize="25px" />
    }
  ]

  const FormInput = ({ label, left, right, rightProps, controlProps, tag, ...rest }) => (
    <FormControl {...controlProps}>
      <FormLabel fontSize="sm" fontWeight="bold" color={mode('gray.700', 'gray.300')}>{label} {tag && <Tag size="sm">{tag}</Tag>}</FormLabel>
      <InputGroup>
        { left && <InputLeftElement children={left} /> }
        <Input {...rest} />
        { right && <InputRightElement w="4.5rem" {...rightProps}>{right}</InputRightElement> }
      </InputGroup>
    </FormControl>
  )
  
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <AppHeader mode={colorMode}>
        <AppBrand
          logo="https://www.elliotcolburn.co.uk/sites/www.elliotcolburn.co.uk/files/2021-03/Facebook-logo.png"
          onMenuClick={onOpen}
          />
        <FormInput display={{ base: 'none', md: 'block' }} bg="#EDEEF1" left={<IoSearchSharp fontSize="18px" color="gray" />} rounded="full" borderWidth={0} controlProps={{ w: { base: 'auto', md: '250px' }, borderWidth: 0 }} placeholder="Search Facebook" />
        <Spacer />
        <AppLinks router={router} routes={routes} />
        <Spacer />
        <Flex alignItems="center" pr={5}>
          <Avatar size="sm" src="https://www.allkpop.com/upload/2022/04/content/211739/1650577168-image.png" objectFit="cover" mr={2} />
          <Heading size="sm" fontWeight={500}>Lee Ji Eun</Heading>
        </Flex>
        <IconButton rounded="full" bg="#EFF2F5" icon={<IoApps fontSize="20px" />} onClick={() => alert('test')} />
        <IconButton rounded="full" bg="#EFF2F5" icon={<FaFacebookMessenger fontSize="20px" />} onClick={() => alert('test')} />
        <IconButton rounded="full" bg="#EFF2F5" icon={<IoNotificationsSharp fontSize="20px" />} onClick={() => alert('test')} />
        <IconButton rounded="full" bg="#EFF2F5" icon={<IoCaretDown fontSize="20px" />} onClick={() => alert('test')} />
      </AppHeader>

      <Flex direction="row" bg={mode('rgba(255,255,255,0.7)', '#EFF2F5')} py={100}> 
        <LeftSideBar users={usersData} px={2} />
        <Box w="full"  minH="90vh" ml={{ base: 0, md: '320px' }} mr={{ base: 0, xl: '360px' }}>
          {children}
        </Box>
        <RightSideBar users={usersData} />
      </Flex>

    </Fragment>

    
  )
}
