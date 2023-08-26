import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type:'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'selectedProject',
      title: 'Selected Project',
      type: 'array',
      of: [
        {
          name: 'project',
          title: 'Project',
          type: 'reference',
          to: [{ type:  'project'}]
        }
      ] 
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
    }),
    defineField({
      name: 'projectCompleted',
      title: 'Project Completed',
      type: 'number',
    }),
    defineField({
      name: 'paperPublished',
      title: 'Paper Published',
      type: 'number',
    }),
    defineField({
      name: 'education',
      title: 'Education Qualification',
      type: 'array',
      of: [{
        type: 'document',
        fields: [
          defineField({
            name: 'university',
            title: 'University',
            type: 'string',
          }),
          defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
          }),
          defineField({
            name: 'timeSpan',
            title: 'Time Span',
            type: 'string',
          }),
        ]
      }]
    }),
    defineField({
      name: 'work',
      title: 'Work Experience',
      type: 'array',
      of: [{
        type: 'document',
        fields: [
          defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',  
          }),
          defineField({
            name: 'workAt',
            title: 'Working At',
            type: 'array',
            of: [
              {
                title: 'Block',
                type: 'block',
                styles: [{title: 'Normal', value: 'normal'}],
                lists: [],
              },
            ],
          }),
          defineField({
            name: 'timeSpan',
            title: 'Time Span',
            type: 'string',
          }),
        ]
      }]
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          title: 'Skill',
          type: 'string',
        }
      ],
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
