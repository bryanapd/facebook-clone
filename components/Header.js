import { Fragment } from 'react'
import Link from 'next/link'
import {
  Box, HStack, Container, Img, Button, Spacer, Heading, Text, IconButton,
  Menu, MenuButton, MenuList, MenuItem, Stack, Divider, CloseButton,
  useColorModeValue,
  Avatar
} from '@chakra-ui/react'

import { IoClose, IoMenu } from 'react-icons/io5'


export const AppHeader = ({ children, mode = 'light', alert }) => (
  <Box>
    <Box
      bg={useColorModeValue('#F1F2F5', '#18191A')}
      boxShadow="0 2px 4px 0 rgba(0,0,0,.2)"
      py={2} pos="fixed" w="full" zIndex="1000">
      {/* <Box
        pos="absolute" top="-4px" w="full"
        bgGradient="linear-gradient(to right, #8a2387, #e94057, #f27121)" h="4px"
        /> */}
      <Container maxW="100vw">
        <HStack>
          {children}
        </HStack>
      </Container>
    </Box>
  </Box>

)

export const AppSpacer = () => <Box h="72px" />

export const AppBrand = ({ logo, title = '', onMenuClick }) => (
  <HStack w={{ base: 'full', md: 'auto' }} minH="50px">
    <Link href="/">
      <Box as="a" cursor="pointer">
        {
          logo
          ? <Img src={logo} boxSize="50px" borderRadius="full" objectFit="cover" />
          : <Heading size="md">{title}</Heading>
        }
      </Box>
    </Link>
    <Spacer />
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      variant="ghost"
      mr={0}
      onClick={onMenuClick}
      icon={<IoMenu fontSize="30px" />}
      />
  </HStack>
)

export const AppLinks = ({ routes = [], direction = 'row', children, btnProps, ...rest }) => (
  <Stack
    fontWeight="bold"
    direction={direction}
    alignItems="center"
    spacing={10}
    display={{ base: (direction == 'column' ? 'flex' : 'none'), md: 'flex' }}
    {...rest}>
    {
      routes.map((route, rId) =>
        route.isDivider
        ? <Divider key={route.key} orientation={direction === 'row' ? 'vertical' : 'horizontal'} h={direction == 'column' ? 'auto' : '30px'} alignSelf="center" borderWidth="1px" />
        : route.render ? <Fragment key={rId}>{route.render()}</Fragment> : 
        <Link href={route.path} key={route.path}>
          <Button rounded="lg" variant="ghost" {...route.btnProps} {...btnProps} px={8}>{route.icon}</Button>
        </Link>)
    }
    {children}
  </Stack>
)

export const SideAppLinks = ({ routes = [], direction = 'row', children, btnProps, ...rest }) => (
  <Stack
    fontWeight="bold"
    direction={direction}
    alignItems="center"
    spacing={7}
    display={{ base: (direction == 'column' ? 'flex' : 'none'), md: 'flex' }}
    {...rest}>
    {
      routes.map((route, rId) =>
        route.isDivider
        ? <Divider key={route.key} orientation={direction === 'row' ? 'vertical' : 'horizontal'} h={direction == 'column' ? 'auto' : '30px'} alignSelf="center" borderWidth="1px" />
        : route.render ? <Fragment key={rId}>{route.render()}</Fragment> : 
        <Link href={route.path} key={route.path}>
          <Button rounded="lg" variant="ghost" leftIcon={<Avatar bg="none" size="sm" src={route.icon} />} {...route.btnProps} {...btnProps}>{route.label}</Button>
        </Link>)
    }
    {children}
  </Stack>
)