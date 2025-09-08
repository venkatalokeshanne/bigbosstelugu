export default {
  name: 'contestant',
  title: 'Contestant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: Rule => Rule.required().min(18).max(80)
    },
    {
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'hometown',
      title: 'Hometown',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Short biography of the contestant',
      rows: 3
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Is the contestant still in the house?',
      initialValue: true
    },
    {
      name: 'currentVoteCount',
      title: 'Current Vote Count',
      type: 'number',
      description: 'Current number of votes received',
      initialValue: 0,
      validation: Rule => Rule.min(0)
    },
    {
      name: 'entryWeek',
      title: 'Entry Week',
      type: 'number',
      description: 'Week when the contestant entered the house',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'eliminationWeek',
      title: 'Elimination Week',
      type: 'number',
      description: 'Week when the contestant was eliminated (if applicable)',
      validation: Rule => Rule.min(1)
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram Handle',
          type: 'string'
        },
        {
          name: 'twitter',
          title: 'Twitter Handle',
          type: 'string'
        },
        {
          name: 'youtube',
          title: 'YouTube Channel',
          type: 'string'
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Vote Count (Highest First)',
      name: 'voteCountDesc',
      by: [
        {field: 'currentVoteCount', direction: 'desc'}
      ]
    },
    {
      title: 'Entry Week',
      name: 'entryWeek',
      by: [
        {field: 'entryWeek', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'occupation',
      media: 'profileImage'
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media
      }
    }
  }
}
