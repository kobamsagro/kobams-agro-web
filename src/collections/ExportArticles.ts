import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const ExportArticles: CollectionConfig = {
  slug: 'export-articles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'category', 'readTime', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Article Title',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Agro Commodities', value: 'Agro Commodities' },
        { label: 'Documentation', value: 'Documentation' },
        { label: 'Logistics', value: 'Logistics' },
        { label: 'Compliance', value: 'Compliance' },
        { label: 'Market Entry', value: 'Market Entry' },
      ],
      label: 'Category',
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
      label: 'Read Time (e.g., "8 min read")',
      defaultValue: '5 min read',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Short Description',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
          label: 'Tag',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Article Content',
      admin: {
        description: 'Full article content (optional for now)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    slugField(),
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'published',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
