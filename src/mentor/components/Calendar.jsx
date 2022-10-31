import { Box, Tag, TagLabel, TagRightIcon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { MdDateRange } from 'react-icons/md'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
registerLocale('es', es)

const getRestOfDays = (days = []) => {
  const allDays = [0, 1, 2, 3, 4, 5, 6]
  days.forEach((d) => {
    const index = allDays.findIndex((day) => day === d)
    if (index === -1) return
    allDays.splice(index, 1)
  })
  return allDays
}
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

const selectedDates = [new Date(1672203600 * 1000)]

export const Calendar = () => {
  const [startDate, setStartDate] = useState(null)
  const [selectedHour, setSelectedHour] = useState(null)
  console.log({
    selectedDate: startDate && Math.floor(startDate.getTime() / 1000),
    selectedHour,
  })
  const schedule = [6]
  const isSchedule = (date) => {
    const restDays = getRestOfDays(schedule)
    const day = new Date(date).getDay()
    let enableDay = true
    restDays.forEach((d) => {
      enableDay = enableDay && day !== d
    })
    return enableDay
  }
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
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            filterDate={isSchedule}
            excludeDates={selectedDates}
            placeholderText="Selecciona una fecha"
            locale="es"
          />
        </Box>
      </Box>
      <Box display="flex" flexDir={'column'} gap="10px" flexGrow={1}>
        <Text>
          Duración de la reunión: <strong>30min</strong>
        </Text>
        {startDate && (
          <Box>
            <Text fontWeight={'bold'} marginBottom="10px">
              Escoge tu horario:
            </Text>
            <Box display="flex" gap="10px" flexWrap={'wrap'}>
              {[
                { id: 1, hour: '15:00', isReserved: false },
                { id: 2, hour: '18:00', isReserved: false },
                { id: 3, hour: '20:00', isReserved: false },
              ]
                .filter(({ isReserved }) => !isReserved)
                .map(({ id, hour }) => (
                  <Tag
                    key={id}
                    size="md"
                    variant={selectedHour === hour ? 'solid' : 'outline'}
                    colorScheme="blue"
                    onClick={() => {
                      setSelectedHour(hour)
                    }}
                    cursor="pointer"
                  >
                    <TagLabel>{tConvert(hour)}</TagLabel>
                    <TagRightIcon as={MdDateRange} />
                  </Tag>
                ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
