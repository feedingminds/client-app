import { Tag } from 'antd'

export const optionsDuration = [
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

export const optionsDays = [
  {
    label: 'Lunes',
    value: 1,
  },
  {
    label: 'Martes',
    value: 2,
  },
  {
    label: 'Miercoles',
    value: 3,
  },
  {
    label: 'Jueves',
    value: 4,
  },
  {
    label: 'Viernes',
    value: 5,
  },
  {
    label: 'Sabado',
    value: 6,
  },
  {
    label: 'Domingo',
    value: 0,
  },
]

export const tagRender = (props) => {
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
