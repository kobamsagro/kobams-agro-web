import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  access: {
    create: anyone, // Allow anyone to submit inquiries
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: [
      'fullName',
      'companyName',
      'country',
      'product',
      'messageType',
      'status',
      'createdAt',
    ],
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'companyName',
      type: 'text',
      required: true,
      label: 'Company Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'country',
      type: 'text',
      required: true,
      label: 'Country/Region',
    },
    {
      name: 'product',
      type: 'text',
      required: true,
      label: 'Product',
    },
    {
      name: 'messageType',
      type: 'select',
      required: true,
      options: [
        { label: 'Product Inquiry', value: 'Product Inquiry' },
        { label: 'Partnership/Collaboration', value: 'Partnership/Collaboration' },
        { label: 'Export Process Questions', value: 'Export Process Questions' },
        { label: 'Documentation and Compliance', value: 'Documentation and Compliance' },
        { label: 'Others', value: 'Others' },
      ],
      label: 'Message Type',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        position: 'sidebar',
        description: 'Internal notes for staff only',
      },
    },
  ],
}
