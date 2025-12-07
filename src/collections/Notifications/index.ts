import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Notifications: CollectionConfig = {
  slug: 'notifications',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['type', 'message', 'isRead', 'createdAt'],
    useAsTitle: 'message',
    group: 'System',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Quote Request', value: 'quote' },
        { label: 'Contact Form', value: 'contact' },
        { label: 'Product Inquiry', value: 'inquiry' },
        { label: 'Testimonial', value: 'testimonial' },
        { label: 'New Order', value: 'order' },
        { label: 'System', value: 'system' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'message',
      type: 'text',
      required: true,
      label: 'Notification Message',
    },
    {
      name: 'details',
      type: 'textarea',
      label: 'Additional Details',
    },
    {
      name: 'relatedCollection',
      type: 'text',
      label: 'Related Collection',
      admin: {
        description: 'The collection this notification relates to (e.g., quotes, contacts)',
      },
    },
    {
      name: 'relatedId',
      type: 'text',
      label: 'Related Document ID',
      admin: {
        description: 'The ID of the related document',
      },
    },
    {
      name: 'isRead',
      type: 'checkbox',
      defaultValue: false,
      label: 'Mark as Read',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'priority',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Normal', value: 'normal' },
        { label: 'High', value: 'high' },
        { label: 'Urgent', value: 'urgent' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
