import { Avatar, Box, Button, Text, Textarea, useToast } from '@chakra-ui/react'
import { Comment, Rate } from 'antd'
import { Formik } from 'formik'
import React from 'react'
import { useUpdateUserMutation } from '../../api/usersAPI'
import * as Yup from 'yup'
import { useGetUserById } from '../../hooks/useGetUserById'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../auth/authSlice'

export const Comments = () => {
  const { mentorId } = useParams()
  const [updateMentor, { isLoading }] = useUpdateUserMutation()

  const { data: mentor } = useGetUserById(mentorId)
  const { isAuthenticated, user } = useAuth()

  const toast = useToast()

  return (
    <Box maxW="5xl" mx="auto" p="10" px={{ base: '6', md: '8' }}>
      <Text as="h2" fontWeight="bold" fontSize="xl">
        Comentarios de los estudiantes
      </Text>
      <Box>
        {isAuthenticated && (
          <Formik
            validationSchema={Yup.object({
              content: Yup.string().required('Este campo es requerido.'),
              author: Yup.string().required(),
              rating: Yup.number().required(),
            })}
            initialValues={{
              content: '',
              author: user?.name,
              rating: 1,
            }}
            enableReinitialize
            onSubmit={async (values, { resetForm }) => {
              const rating = values.rating
              if (mentor) {
                await updateMentor([
                  mentorId,
                  {
                    comments: mentor.comments.concat(values),
                    rating: {
                      ...mentor.rating,
                      [rating]: mentor.rating[rating] + 1,
                    },
                  },
                ])
              }
              resetForm()
              toast({
                title: 'Comentario publicado.',
                description: 'Hemos publicado tu comentario.',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            }}
          >
            {({
              handleSubmit,
              getFieldProps,
              setFieldValue,
              values: { rating },
            }) => (
              <Comment
                avatar={
                  <Avatar name={user?.name} alt={user?.name} size={'sm'} />
                }
                content={
                  <Box display={'flex'} flexDirection="column">
                    <Rate
                      style={{
                        color: '#DD6B20',
                        marginBottom: 6.5,
                        display: 'block',
                      }}
                      value={rating}
                      onChange={(value) => setFieldValue('rating', value)}
                    />
                    <Textarea
                      rows={5}
                      placeholder="Comenta aquí"
                      size="md"
                      borderRadius={'10px'}
                      name="content"
                      {...getFieldProps('content')}
                    />
                    <Button
                      mt="10px"
                      colorScheme="blue"
                      size="md"
                      width={'fit-content'}
                      alignSelf="flex-end"
                      onClick={handleSubmit}
                      isLoading={isLoading}
                    >
                      Comentar
                    </Button>
                  </Box>
                }
              />
            )}
          </Formik>
        )}
        {mentor?.comments.map(({ content, author, rating, _id }) => (
          <Comment
            key={_id}
            author={<Text fontSize={'md'}>{author}</Text>}
            avatar={<Avatar name={author} alt={author} size={'sm'} />}
            content={
              <Text fontSize="md" as="p">
                {content}
              </Text>
            }
            datetime={
              <Rate
                disabled
                defaultValue={rating}
                style={{
                  color: '#DD6B20',
                }}
              />
            }
          />
        ))}
      </Box>
    </Box>
  )
}
