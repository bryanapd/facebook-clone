import { useRouter } from "next/router"
import { 
  Box, Heading, VStack, Text, Button, HStack, Avatar, 
  AvatarGroup, useColorModeValue as mode, Stack, Flex,
  useColorMode, useBreakpointValue, Container, Divider, 
  Img, IconButton, Spacer
} from "@chakra-ui/react"

import { IoHomeOutline, IoTvOutline, IoStorefrontOutline, IoPeopleCircleOutline, IoGameControllerOutline, IoCaretDownOutline, IoVideocamOutline, IoSearchOutline, IoEllipsisHorizontalOutline, IoVideocamSharp } from 'react-icons/io5'

import { UserList } from '../collections/UserList'
import { AppLinks, SideAppLinks } from "./Header"

const routes = [
  {
    path: '/',
    label: 'Friends',
    icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png'
  },
  {
    path: '/categories',
    label: 'Saved',
    icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png'
  },
  {
    path: '/ambassadorship',
    label: 'Marketplace',
    icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png'

  },
  {
    path: '/tokens',
    label: 'Groups',
    icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png'
  },
  {
    path: '/u/profile',
    label: 'Watch',
    icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png'
  }
]

const shortcutRoutes = [
  {
    path: '/',
    label: '8 Ball Pool',
    icon: 'https://img.utdstc.com/icon/8ab/040/8ab040e805dda9945fe8e9793728ca2b4ad012beaf43989646ca207f4bb52ace:200'
  },
  {
    path: '/categories',
    label: 'Agar.io',
    icon: 'https://gameforge.com/de-DE/littlegames/includes/images/games/1253_5ea9a1be4ec62.jpg'
  },
  {
    path: '/',
    label: 'Dragon City',
    icon: 'https://cdn-www.bluestacks.com/bs-images/94dccbb3bbebd22f871ebded71df0855.png'
  },
  {
    path: '/',
    label: 'Pet Society',
    icon: 'https://upload.wikimedia.org/wikipedia/en/b/bc/PetSocietylogo.png'
  }
]



export const LeftSideBar = ({ show, onClose, users = [], categories = [], ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const bg = mode('rgba(255,255,255,0.7)', 'rgba(0,0,0,0.7)')
  const router = useRouter()

  return (
    <Flex
      zIndex={999} pt={100}
      bottom={0} top={0}
      w="300px" pos="fixed"
      alignItems="start"
      direction="column"
      overflowY="scroll"
      display={{ base: show ? 'flex' : 'none', md: 'flex' }}
      sx={{
        '&::-webkit-scrollbar': {
          width: 0,
        },
        '&::-webkit-scrollbar-track': {
          width: 0,
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 0,
        },
      }} {...rest}>
      
      <Button 
        fontWeight={500} mb={6}
        variant="ghost"
        leftIcon={<Avatar size="sm" src="https://www.allkpop.com/upload/2022/04/content/211739/1650577168-image.png" objectFit="cover" />}>
        Lee Ji Eun
      </Button>

      <SideAppLinks direction="column" routes={routes} alignItems="start" spacing={6} btnProps={{ fontWeight: 500 }} />

      <Button 
        variant="ghost" rounded="full" 
        leftIcon={<IoCaretDownOutline fontSize="25px" />} 
        fontWeight={500} mt={5}>
        See More
      </Button>

      <Divider alignSelf="center" my={7} />

      <Heading fontSize="18px" color="#64676B" fontWeight={500} mb={4} mx={4}>Your shortcuts</Heading>

      <SideAppLinks direction="column" routes={shortcutRoutes} alignItems="start" spacing={6} btnProps={{ fontWeight: 500 }} />

    </Flex>
  )
}

export const RightSideBar = ({ users = [], ...rest }) => (
  <Box 
    right={0} top={0} pt={100}
    pos="fixed" 
    maxW="350px" h="100vh"
    display={{ base: 'none', xl: 'block' }}
    overflowY="scroll"
    sx={{
      '&::-webkit-scrollbar': {
        width: 0,
      },
      '&::-webkit-scrollbar-track': {
        width: 0,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 0,
      },
    }} {...rest}>
    <Heading fontSize="18px" color="#64676B" fontWeight={500} mb={4}>Sponsored</Heading>
    <HStack alignItems="center" mb={4}>
      <Img boxSize="140px" borderRadius="xl" src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t45.1600-4/279678523_23850291890420081_762639019229119441_n.png?stp=dst-png_p285x285&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=nWa2Hc4v-ugAX99R51o&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT9C4th6jTRAnH_XNiEulBiXenfvSepARcqW82MShDq22w&oe=629B90D7" />
      <Box>
        <Heading size="sm" fontWeight="md"> Join us</Heading>
        <Text fontSize="xs" color="gray.500">www.binance.com/masterclass</Text>
      </Box>
    </HStack>
    <HStack alignItems="center" mb={2}>
      <Img boxSize="140px" borderRadius="xl" src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t45.5328-4/273148810_4787510481314484_4474465712961246474_n.jpg?stp=c0.0.1080.1080a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_ohc=PLnb44HJZ68AX-SVtqx&_nc_ht=scontent.fmnl25-1.fna&oh=00_AT-3wlG39Vqzfhaigq_I18x9Yzi0vlEfIs7_oqD9c6w4pA&oe=6299B554" />
      <Box>
        <Heading size="sm" fontWeight="md">Any 4 for P1,000</Heading>
        <Text fontSize="xs" color="gray.500">shopee.ph</Text>
      </Box>
    </HStack>

    <Divider alignSelf="center" my={7} />

    <Heading fontSize="18px" color="#64676B" fontWeight={500} mb={3}>Birthdays</Heading>
    <Button p={0} variant="ghost" leftIcon={<Avatar bg="none" size="sm" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/birthday-cake_1f382.png"/>}>
      Ian Sui <Text as="span" fontWeight="medium" ml={1}>have birthday today</Text>.
    </Button>

    <Divider alignSelf="center" my={5} />

    <HStack mb={3}>
      <Heading fontSize="18px" color="#64676B" fontWeight={500}>Contacts</Heading>
      <Spacer />
      <IconButton variant="ghost" size="sm" icon={<IoVideocamSharp fontSize="18px" color="gray" />} />
      <IconButton variant="ghost" size="sm" icon={<IoSearchOutline fontSize="18px" color="gray" />} />
      <IconButton variant="ghost" size="sm" icon={<IoEllipsisHorizontalOutline fontSize="18px" color="gray" />} />
    </HStack>

    <UserList users={users} />
  </Box>
)