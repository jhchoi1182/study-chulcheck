import {Rule} from '@sanity/types'

export default {
  title: 'Room',
  name: 'room',
  type: 'document',
  fields: [
    {
      title: 'Invite Code',
      name: 'inviteCode',
      type: 'string',
      validation: (Rule: Rule) => Rule.unique().error('초대 코드는 고유해야 합니다.'),
    },
    {
      title: 'Check In Time',
      name: 'checkInTime',
      type: 'datetime',
    },
    {
      title: 'Check Out Time',
      name: 'checkOutTime',
      type: 'datetime',
    },
    {
      title: 'Timer Update Time',
      name: 'timerUpdateTime',
      type: 'datetime',
    },
    {
      title: 'Members',
      name: 'members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
    },
  ],
}
