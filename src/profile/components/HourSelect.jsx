import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { AiOutlineDelete } from 'react-icons/ai'

import React, { useState } from 'react'
import { useEffect } from 'react'

export const HourSelect = ({ value = [], onChange = (f) => f, name }) => {
  const toast = useToast()
  const [hours, setHours] = useState(value)
  const handleDelete = (hour, index) => {
    const newHours = hours.filter((h) => h !== hour)
    setHours(newHours)
  }
  const handleChange = (e, index) => {
    const newHour = e.target.value
    const isRepeat = hours.includes(newHour)
    if (isRepeat)
      return toast({
        title: 'No puede incluir dos horarios iguales',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    setHours((prev) =>
      prev.map((hour, i) => {
        if (index === i) return newHour
        return hour
      })
    )
  }
  const handleAddHour = () => {
    const isRepeat = hours.includes('')
    if (isRepeat)
      return toast({
        title: 'No puede incluir dos horarios iguales.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    setHours([...hours, ''])
  }
  useEffect(() => {
    setHours(value)
  }, [value.join('|')])
  useEffect(() => {
    onChange(hours)
  }, [hours.join('|')])
  return (
    <FormControl id="time">
      <FormLabel display={'flex'}>
        Hora (24h)
        <div
          style={{
            flexGrow: 1,
          }}
        />
        <IconButton size="xs" colorScheme={'blue'} onClick={handleAddHour}>
          <IoMdAddCircleOutline fontSize={'15px'} />
        </IconButton>
      </FormLabel>
      <Box display={'flex'} flexDirection="column" gap="10px">
        {hours.map((hour, index) => (
          <InputGroup>
            <Input
              key={index}
              type="time"
              onChange={(e) => handleChange(e, index)}
              value={hour}
            />
            <InputRightElement>
              <IconButton size="xs" onClick={() => handleDelete(hour, index)}>
                <AiOutlineDelete />
              </IconButton>
            </InputRightElement>
          </InputGroup>
        ))}
      </Box>
    </FormControl>
  )
}
