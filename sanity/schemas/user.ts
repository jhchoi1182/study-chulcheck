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
      validation: (Rule: Rule) => Rule.unique().error('아이디는 고유해야 합니다.'),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('이름은 필수 항목입니다.'),
    },
    {
      title: 'Rooms',
      name: 'rooms',
      type: 'array',
      of: [{type: 'reference', to: {type: 'room'}}],
    },
  ],
}
