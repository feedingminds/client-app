import { Avatar, Box, Button, Text, Textarea } from '@chakra-ui/react'
import { Comment, Rate } from 'antd'
import React from 'react'

export const Comments = () => {
  return (
    <Box maxW="5xl" mx="auto" p="10" px={{ base: '6', md: '8' }}>
      <Text as="h2" fontWeight="bold" fontSize="xl">
        Comentarios de los estudiantes
      </Text>
      <Box>
        <Comment
          avatar={<Avatar alt="Han Solo" size={'sm'} />}
          content={
            <Box display={'flex'} flexDirection="column">
              <Rate
                style={{
                  color: '#DD6B20',
                  marginBottom: 6.5,
                  display: 'block',
                }}
              />
              <Textarea
                rows={5}
                placeholder="Comenta aquí"
                size="md"
                borderRadius={'10px'}
              />
              <Button
                mt="10px"
                colorScheme="blue"
                size="md"
                width={'fit-content'}
                alignSelf="flex-end"
              >
                Comentar
              </Button>
            </Box>
          }
        />
        <Comment
          author={<Text fontSize={'md'}>Han Solo</Text>}
          avatar={<Avatar alt="Han Solo" size={'sm'} />}
          content={
            <Text fontSize="md" as="p">
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </Text>
          }
          datetime={
            <Rate
              disabled
              defaultValue={5}
              style={{
                color: '#DD6B20',
              }}
            />
          }
        />
      </Box>
    </Box>
  )
}
