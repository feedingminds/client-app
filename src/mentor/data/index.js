export const schedule = {
  hours: ['15:00', '18:00', '20:00'],
  duration: {
    amount: 30,
    magnitude: 'minutes',
  },
  //* Sunday: 0, Monday: 1, ..., Saturday: 6
  days: [5, 6],
  //* new Date(UNIX_TIME * 1000)
  // selectedDates: [new Date(1672203600 * 1000)],
  // selectedHours: [
  //   {
  //     id: 1,
  //     timestamp: 1672203600,
  //     hour: '15:00',
  //   },
  // ],
  selectedHours: { 1672203600: ['15:00'] },
}
