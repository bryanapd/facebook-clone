import { Box, Text, Flex, HStack, Button, IconButton, Heading, Img, Avatar, Spacer, Divider } from '@chakra-ui/react'

import { FcLike } from 'react-icons/fc'
import { FaThumbsUp, FaRegCommentAlt, FaShare, FaCaretDown } from 'react-icons/fa'

export const Post = ({ }) => {
  return (
    <Box borderRadius="xl" boxShadow="0 0 4px rgba(0,0,0,.2)" pos="relative" mt={6}>
      <Box m={4} pt={3}>
        <HStack mb={3}>
          <Avatar bg={0} boxSize="40px" objectFit="cover" src="https://64.media.tumblr.com/b40149e4eb9ceabfb0a795a685b0f83f/82c33f648bb73e9e-92/s540x810/2e1242faf0388dca4cb7d05aba3d80b126e3f89f.jpg" />
          <Box>
            <Heading fontWeight={500} size="sm">Samahan ng mga gustong maging alipin ni IU</Heading>
            <Text fontSize="sm" color="gray.500">4h</Text>
          </Box>
        </HStack>
        <Text fontSize="sm" mb={3}>
          UPCA results are out and congrats to all passers! mga bagong iskolar ng bayan pa burger naman dyan 😁
          <br />
          <br />
          and to those who fell naman, still congratulations! don't be disappointed there's always more opportunity and other plans for you. keep your head up and just keep on dreaming nga diba sabi ng ITZY ❤️
        </Text>
      </Box>
      <Box bg="#252B39">
        <Img mx="auto" h="auto" w="80%" objectFit="cover" src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/284594174_552432779752578_8195923739999600261_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3HEXRYlIxo8AX93SAbA&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT-CIk_GJfbF9k14xj2E6OxrZaMZUfKTSmw0_eaYim1frQ&oe=6299F1CF" />
      </Box>

      <Box mx={4} mt={3}>
        <HStack>
          <IconButton size="sm" variant="ghost" icon={<FcLike fontSize="20px" />} />
          <Text color="gray.600">2K</Text>
          <Spacer />
          <Text color="gray.600">12 comments</Text>
          <Text color="gray.600">180 shares</Text>
        </HStack>

        <Divider my={3} />
        <HStack alignItems="center" justifyContent="space-evenly">
          <Button color="gray" fontWeight={500} variant="ghost" leftIcon={<FaThumbsUp />}>Like</Button>
          <Button color="gray" fontWeight={500} variant="ghost" leftIcon={<FaRegCommentAlt />}>Comment</Button>
          <Button color="gray" fontWeight={500} variant="ghost" leftIcon={<FaShare />}>Share</Button>
          <Button color="gray" fontWeight={500} variant="ghost" leftIcon={<Avatar size="xs" src="https://www.pinkvilla.com/files/styles/gallery-preview/public/iu_3.jpg?itok=SWr0b1hK" />}>{<FaCaretDown />}</Button>
        </HStack>
      </Box>
    </Box>
  )
}