import { Box, Text, Heading, Stack, HStack, Button, Avatar, Divider, Img } from '@chakra-ui/react'

export const Status = ({ }) => {

  return (
    <Box bg="#FFFFFF" boxShadow="0 0 4px rgba(0,0,0,.2)" borderRadius="xl" p={3} mt={8}>
      <HStack>
        <Avatar size="md" src="https://pbs.twimg.com/media/FNj0jDXVcAQKFoy?format=jpg&name=large" />
        <Button 
          bg="#F1F2F5"
          color="gray" 
          fontWeight="md"
          w="full" rounded="full"  
          justifyContent="flex-start">
          What's on your mind, IU?
        </Button>
      </HStack>

      <Divider my={4} />

      <HStack alignItems="center" justifyContent="space-evenly">
        <Button color="gray" variant="ghost" fontWeight={500} leftIcon={<Img bg={0} boxSize="25px" src="https://cdn4.iconfinder.com/data/icons/remains/100/facebook_live_icon-2-512.png" />}>
          Live Video
        </Button>
        <Button color="gray" variant="ghost" fontWeight={500} leftIcon={<Img bg={0} boxSize="25px" src="https://static-s.aa-cdn.net/img/ios/640591820/f43a745694641cf341e52555ff11bab9?v=1" />}>
          Photo/video
        </Button>
        <Button color="gray" variant="ghost" fontWeight={500} leftIcon={<Avatar bg={0} boxSize="25px" src="https://kidsrkids.com/oviedo/wp-content/uploads/sites/83/2019/05/happy.png" />}>
          Photo/video
        </Button>
      </HStack>

    </Box>
  )
}