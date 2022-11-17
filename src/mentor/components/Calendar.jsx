import { Box, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { MdDateRange } from 'react-icons/md'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import { from24hTo12h, isSchedule } from '../utils'
import { useGetUserByIdQuery } from '../../api/usersAPI'
import { useParams } from 'react-router-dom'
registerLocale('es', es)

const selectedDates = [new Date(1672203600 * 1000)]

// const disabledDates = [
//   {
//     id: 1,
//     timestamp: 1668834000, //* 11/19/2022
//     hour: '15:00',
//   },
//   {
//     id: 2,
//     timestamp: 1668834000, //* 11/19/2022
//     hour: '18:00',
//   },
//   {
//     id: 3,
//     timestamp: 1668834000, //* 11/19/2022
//     hour: '20:00',
//   },
// ]
const disabledDates = []
export const Calendar = () => {
  const { mentorId } = useParams()
  const {
    data: { schedule },
  } = useGetUserByIdQuery(mentorId)
  console.log({ schedule })
  const { days = [], hours = [], duration } = schedule
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedHour, setSelectedHour] = useState(null)
  const selectedDateTS =
    selectedDate && Math.floor(selectedDate.getTime() / 1000)
  const disabledHours = disabledDates
    .filter(({ timestamp }) => timestamp === selectedDateTS)
    .map(({ hour }) => hour)
  console.log({
    selectedDateTS,
    selectedHour,
    disabledHours,
  })

  const enabledHours = hours.filter((hour) => !disabledHours.includes(hour))
  return (
    <Box
      display="flex"
      justifyContent={'space-between'}
      flexDir={{
        base: 'column',
        md: 'row',
      }}
      gap={{
        base: '20px',
        md: 0,
      }}
    >
      <Box flexGrow={1}>
        <Text mb="10px">Fechas disponibles:</Text>
        <Box border="2px solid #eee" borderRadius={'5px'} width="fit-content">
          <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            filterDate={isSchedule(days)}
            excludeDates={selectedDates}
            placeholderText="Selecciona una fecha"
            locale="es"
            minDate={new Date()}
          />
        </Box>
      </Box>
      <Box display="flex" flexDir={'column'} gap="10px" flexGrow={1}>
        <Text>
          Duración de la reunión: <strong>{duration}</strong>
        </Text>
        {selectedDate && (
          <Box>
            <Text fontWeight={'bold'} marginBottom="10px">
              Escoge tu horario:
            </Text>
            <Box display="flex" gap="10px" flexWrap={'wrap'}>
              {enabledHours.map((hour, index) => (
                <Tag
                  key={index}
                  size="md"
                  variant={selectedHour === hour ? 'solid' : 'outline'}
                  colorScheme="blue"
                  onClick={() => {
                    setSelectedHour(hour)
                  }}
                  cursor="pointer"
                >
                  <TagLabel>{from24hTo12h(hour)}</TagLabel>
                  <TagRightIcon as={MdDateRange} />
                </Tag>
              ))}
              {enabledHours.length === 0 && 'No hay horarios disponibles.'}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
