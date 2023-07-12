// sanity\schemas\studyRecord.ts

export default {
  title: 'Study Record',
  name: 'studyRecord',
  type: 'document',
  fields: [
    {
      title: 'Room Key',
      name: 'roomKey',
      type: 'string',
    },
    {
      title: 'Study Records',
      name: 'studyRecords',
      type: 'number',
    },
    {
      title: 'Weekly Records',
      name: 'weeklyRecords',
      type: 'number',
    },
    {
      title: 'Check In Dates',
      name: 'checkInDates',
      type: 'array',
      of: [{type: 'datetime'}],
    },
    {
      title: 'Check In Time',
      name: 'checkInTime',
      type: 'array',
      of: [{type: 'datetime'}],
    },
  ],
}
