import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'
import { Select, Tag } from 'antd'
import React, { useState } from 'react'
import { Select as ChakraSelect } from '@chakra-ui/react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'
import { AiOutlineDelete } from 'react-icons/ai'

const options = [
  {
    value: 'Lunes',
  },
  {
    value: 'Martes',
  },
  {
    value: 'Miercoles',
  },
  {
    value: 'Jueves',
  },
  {
    value: 'Viernes',
  },
  {
    value: 'Sabado',
  },
  {
    value: 'Domingo',
  },
]
const tagRender = (props) => {
  const { label, closable, onClose } = props
  const onPreventMouseDown = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={'#108ee9'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  )
}

const Duration = ({ getFieldProps = (f) => f, name = 'duration' }) => {
  const options = [
    {
      name: '10min',
      id: 1,
    },
    {
      name: '20min',
      id: 2,
    },
    {
      name: '30min',
      id: 3,
    },
    {
      name: '40min',
      id: 4,
    },
    {
      name: '50min',
      id: 5,
    },
  ]
  return (
    <ChakraSelect
      placeholder="Selecciona una opción"
      name={name}
      {...getFieldProps(name)}
    >
      {options.map(({ name, id }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </ChakraSelect>
  )
}

export const Schedule = () => {
  const [hours, setHours] = useState([{ id: uuidv4(), name: '00:00' }])
  const handleDelete = (hourId) => {
    const newHours = hours.filter(({ name, id }) => id !== hourId)
    setHours(newHours)
  }
  const onChange = (e) => {
    const newHours = hours.map(({ name, id }) => {
      if (e.target.id === id) {
        return {
          id,
          name: e.target.value,
        }
      } else {
        return {
          id,
          name,
        }
      }
    })
    setHours(newHours)
  }
  const handleAddHour = () => {
    setHours([...hours, { id: uuidv4(), name: '00:00' }])
  }

  console.log({ hours })
  return (
    <VStack width="full" spacing="6">
      <FormControl id="days">
        <FormLabel>Días</FormLabel>
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          style={{
            width: '100%',
          }}
          options={options}
          size="large"
          placeholder="Seleccione los días"
        />
      </FormControl>
      <FormControl id="duration">
        <FormLabel>Duración</FormLabel>
        <Duration />
      </FormControl>
      <FormControl id="time">
        <FormLabel display={'flex'}>
          Hora
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
          {hours.map(({ name: hour, id }) => (
            <InputGroup>
              <Input
                key={id}
                id={id}
                type="time"
                onChange={onChange}
                value={hour}
              />
              <InputRightElement>
                <IconButton size="xs" onClick={() => handleDelete(id)}>
                  <AiOutlineDelete />
                </IconButton>
              </InputRightElement>
            </InputGroup>
          ))}
        </Box>
      </FormControl>
    </VStack>
  )
}
