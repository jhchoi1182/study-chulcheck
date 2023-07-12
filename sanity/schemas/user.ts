import {Rule} from '@sanity/types'

export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('아이디는 필수 항목입니다.'),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('이름은 필수 항목입니다.'),
    },
    {
      title: 'Nick Name',
      name: 'nickName',
      type: 'string',
    },
    {
      title: 'Rooms',
      name: 'rooms',
      type: 'array',
      of: [{type: 'reference', to: {type: 'room'}}],
    },
    {
      title: 'Study Records',
      name: 'studyRecords',
      type: 'array',
      of: [{type: 'reference', to: {type: 'studyRecord'}}],
    },
  ],
}
