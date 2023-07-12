export default {
  title: 'Weekly Record',
  name: 'weeklyRecord',
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: {type: 'user'},
    },
    {
      title: 'Room',
      name: 'room',
      type: 'reference',
      to: {type: 'room'},
    },
    {
      title: 'Check In Dates',
      name: 'checkInDates',
      type: 'array',
      of: [{type: 'datetime'}],
    },
    {
      title: 'Weekly Study Time',
      name: 'weeklyStudyTime',
      type: 'number',
    },
  ],
}
