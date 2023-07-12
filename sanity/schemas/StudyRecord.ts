import {Rule} from '@sanity/types'

export default {
  title: 'Study Record',
  name: 'studyRecord',
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
      title: 'Check In Days',
      name: 'checkInDays',
      type: 'number',
    },
    {
      title: 'Accumulated Study Time',
      name: 'accumulatedStudyTime',
      type: 'number',
    },
  ],
}
