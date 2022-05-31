import Link from 'next/link'
import { useState } from 'react'

import { 
  Box, Button, Avatar, AvatarBadge, Stack, HStack,
  Heading, VStack, Text, Flex, IconButton, Spacer
} from '@chakra-ui/react'

import { IoChevronDownOutline, IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5'

import { Fade } from 'react-reveal'


export const UserCard = ({ avatar, username, name, totalSales, withName = true }) => (
  <Fade left>
    <HStack spacing={3}>
      <Avatar boxSize="38px" src={avatar} alt={`${username} Avatar`}>
        <AvatarBadge boxSize="16px" bg='green.500' />
      </Avatar>
      { 
        withName ? 
        <VStack alignItems="start" spacing={1}>
          <Heading size="sm" fontWeight={400}>{username}</Heading>
        </VStack> 
        : ''
      }
    </HStack>
  </Fade>
)

export const UserList = ({ direction = 'column', users = [] }) => {
  return (
    <Stack direction={direction} spacing={6}>
      {
        (users || []).map((user, uKey) => <UserCard key={uKey} {...user} />)
      }
    </Stack>
  )
}