import { Box, Button, Text, Textarea } from '@chakra-ui/react'
import { Avatar, Comment } from 'antd'
import React from 'react'

export const Comments = () => {
  return (
    <Box maxW="5xl" mx="auto" p="40px 32px">
      <Text as="h2" fontWeight="bold" fontSize="xl">
        Comentarios de los estudiantes
      </Text>
      <Box>
        <Comment
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <Box>
              <Textarea
                rows={5}
                placeholder="Comenta aquí"
                size="sm"
                borderRadius={'10px'}
              />
              <Button mt="10px" colorScheme="blue" size="sm">
                Comentar
              </Button>
            </Box>
          }
        />
        <Comment
          author={<Text fontSize={'sm'}>Han Solo</Text>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <Text fontSize="sm" as="p">
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </Text>
          }
          datetime={<span>8 hours ago</span>}
        />
      </Box>
    </Box>
  )
}
