import Router from 'next/router'
import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import { 
  Box, Text, Heading, HStack, Button, Stack, Spacer,
  Avatar, AvatarBadge, IconButton, Img
} from '@chakra-ui/react'

import { IoChevronDownOutline, IoChevronForwardOutline, IoChevronBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

export const StoryCard = ({ name, avatar, cover }) => (
  <Stack bgImg={cover} bgSize="cover" h="240px" w="180px" overflow="hidden" borderRadius="xl" p={3}>
    <Avatar borderWidth={4} borderColor="#1A74E3" src={avatar} boxSize="38px" />
    <Spacer />
    <Heading color="white" size="sm" fontWeight={500}>{name}</Heading>
  </Stack>
)
export const StoryList = ({ collections = [] }) => {
  const [slider, setSlider] = useState('')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 5 },
  ]

  return (
    <Box display="flex" alignItems="center" pos="relative">
      <Carousel showArrows={false} pagination={false} itemPadding={[0, 6]} enableAutoPlay={false} autoPlaySpeed={1500} breakPoints={breakPoints} ref={(slider) => setSlider(slider)}>
        {
          (collections || []).map((collection, cKey) => <StoryCard key={cKey} {...collection} />)
        }
      </Carousel>
      <IconButton pos="absolute" bg="#fff" borderWidth={0.5} right={-3} zIndex={99} size="md" rounded="full" icon={<IoArrowForwardOutline fontSize="20px" />} onClick={() => slider.slideNext()} />
    </Box>
  )
}