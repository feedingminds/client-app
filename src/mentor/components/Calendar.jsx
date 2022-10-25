import { DatePicker } from 'antd'
import moment from 'moment'
import React from 'react'
const range = (start, end) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day')
}
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
})
export const Calendar = () => (
  <DatePicker
    format="YYYY-MM-DD HH:mm:ss"
    disabledDate={disabledDate}
    disabledTime={disabledDateTime}
    showTime={{
      defaultValue: moment('00:00:00', 'HH:mm:ss'),
    }}
  />
)
