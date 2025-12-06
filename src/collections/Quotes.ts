import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Quotes: CollectionConfig = {
  slug: 'quotes',
  access: {
    create: anyone, // Allow anyone to submit quote requests
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'Customer Requests',
    defaultColumns: [
      'name',
      'company',
      'product',
      'quantity',
      'containerSize',
      'status',
      'createdAt',
    ],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Company',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'product',
      type: 'text',
      required: true,
      label: 'Product',
    },
    {
      name: 'quantity',
      type: 'text',
      required: true,
      label: 'Quantity (MT)',
    },
    {
      name: 'containerSize',
      type: 'select',
      required: true,
      options: [
        { label: '20ft Container', value: '20ft' },
        { label: '40ft Container', value: '40ft' },
        { label: 'Others', value: 'Others' },
      ],
      label: 'Container Size',
    },
    {
      name: 'shippingPreference',
      type: 'select',
      required: true,
      options: [
        { label: 'FOB (Free on Board)', value: 'FOB' },
        { label: 'CIF (Cost, Insurance & Freight)', value: 'CIF' },
        { label: 'CFR (Cost and Freight)', value: 'CFR' },
        { label: 'EXW (Ex Works)', value: 'EXW' },
        { label: 'DDP (Delivered Duty Paid)', value: 'DDP' },
      ],
      label: 'Shipping Preference',
    },
    {
      name: 'packagingOption',
      type: 'select',
      required: true,
      options: [
        { label: 'PP Bags', value: 'PP Bags' },
        { label: 'Bulk', value: 'Bulk' },
        { label: 'Jute Bags', value: 'Jute Bags' },
        { label: 'Custom Packaging', value: 'Custom Packaging' },
      ],
      label: 'Packaging Option',
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
        { label: 'Quoted', value: 'quoted' },
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
