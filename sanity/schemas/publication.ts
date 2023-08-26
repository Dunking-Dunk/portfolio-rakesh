import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})
