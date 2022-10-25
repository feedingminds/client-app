import { FormControl, FormLabel, VStack } from '@chakra-ui/react'
import { Select, Tag, TimePicker } from 'antd'
import React, { useState } from 'react'

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

const Time = () => {
  const [value, setValue] = useState(null)
  const onChange = (time) => {
    setValue(time)
  }
  return (
    <TimePicker
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
      }}
      placeholder="Seleccionar hora"
      size="large"
    />
  )
}

export const Schedule = () => {
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
        />
      </FormControl>

      <FormControl id="time">
        <FormLabel>Hora</FormLabel>
        <Time />
      </FormControl>
    </VStack>
  )
}
