export const getRestOfDays = (days = []) => {
  const allDays = [0, 1, 2, 3, 4, 5, 6]
  days.forEach((d) => {
    const index = allDays.findIndex((day) => day === d)
    if (index === -1) return
    allDays.splice(index, 1)
  })
  return allDays
}
export function from24hTo12h(time) {
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

export const isSchedule = (schedule) => (date) => {
  const restDays = getRestOfDays(schedule)
  const day = new Date(date).getDay()
  let enableDay = true
  restDays.forEach((d) => {
    enableDay = enableDay && day !== d
  })
  return enableDay
}
