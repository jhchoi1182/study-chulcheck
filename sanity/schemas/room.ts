import {Rule} from '@sanity/types'

export default {
  title: 'Room',
  name: 'room',
  type: 'document',
  fields: [
    {
      title: 'Room Name',
      name: 'roomName',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('방 제목은 필수 항목입니다.'),
    },
    {
      title: 'Invite Code',
      name: 'inviteCode',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('초대 코드는 필수 항목입니다.'),
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
      validation: (Rule: Rule) =>
        Rule.required().error('방에는 최소 한 명의 멤버가 있어야 합니다.'),
    },
  ],
}
