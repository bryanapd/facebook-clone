import Router from 'next/router'
import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import { Box, Text, Heading, Stack, Button, Avatar, Img, HStack, IconButton } from '@chakra-ui/react'

import { IoChevronDownOutline, IoChevronForwardOutline, IoChevronBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

import { UserCard, UserList } from '../collections/UserList'

export const Room = ({ users = [] }) => {
  const [slider, setSlider] = useState('')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 6 },
  ]

  return (
    <HStack p={3} pos="relative" borderRadius="xl" boxShadow="0 0 4px rgba(0,0,0,.2)" mt={6}>
      <Button fontWeight={500} size="md" variant="outline" rounded="full" borderWidth={2} borderColor="#DBE6F1" color="#2069D0" leftIcon={<Img boxSize="25px" src="https://nyulangone.org/files/nyulangone-health-app-icon.png" />}>
        Create Room
      </Button>
      <Carousel showArrows={false} pagination={false} itemPadding={[0, 2]} enableAutoPlay={false} autoPlaySpeed={1500} breakPoints={breakPoints} ref={(slider) => setSlider(slider)}>
        {
          (users || []).map((user, uKey) => <UserCard withName={false} key={uKey} {...user} />)
        }
      </Carousel>
      <IconButton pos="absolute" bg="#fff" borderWidth={0.5} right={0} zIndex={99} size="md" rounded="full" icon={<IoArrowForwardOutline fontSize="20px" />} onClick={() => slider.slideNext()} />
    </HStack>
  )
}