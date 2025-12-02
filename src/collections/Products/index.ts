import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from 'payload'
import { revalidateProduct, revalidateProductDelete } from './hooks/revalidateProduct'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'botanicalName', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Product Overview',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Product Name',
            },
            {
              name: 'botanicalName',
              type: 'text',
              label: 'Botanical Name',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Product Image',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Description',
            },
            slugField(),
          ],
        },
        {
          label: 'Quality & Specifications',
          fields: [
            {
              name: 'qualityGrade',
              type: 'select',
              options: [
                { label: 'Premium', value: 'premium' },
                { label: 'Grade A', value: 'grade-a' },
                { label: 'Grade B', value: 'grade-b' },
                { label: 'Standard', value: 'standard' },
                { label: 'Export Grade', value: 'export-grade' },
              ],
              required: true,
              label: 'Quality Grade',
            },
            {
              name: 'specifications',
              type: 'array',
              label: 'Specifications',
              fields: [
                {
                  name: 'attribute',
                  type: 'text',
                  required: true,
                  label: 'Attribute',
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: 'Value',
                },
              ],
            },
          ],
        },
        {
          label: 'Packaging & Export',
          fields: [
            {
              name: 'packagingOptions',
              type: 'array',
              label: 'Packaging Options',
              fields: [
                {
                  name: 'type',
                  type: 'text',
                  required: true,
                  label: 'Packaging Type',
                },
                {
                  name: 'weight',
                  type: 'text',
                  label: 'Weight/Size',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
              ],
            },
            {
              name: 'exportMarkets',
              type: 'array',
              label: 'Export Markets',
              fields: [
                {
                  name: 'country',
                  type: 'text',
                  required: true,
                  label: 'Country/Region',
                },
              ],
            },
            {
              name: 'moq',
              type: 'text',
              required: true,
              label: 'Minimum Order Quantity (MOQ)',
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Grains & Seeds', value: 'grains-seeds' },
        { label: 'Roots & Tubers', value: 'roots-tubers' },
        { label: 'Legumes', value: 'legumes' },
        { label: 'Nuts', value: 'nuts' },
        { label: 'Spices', value: 'spices' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
      label: 'Product Category',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Product',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Out of Stock', value: 'out-of-stock' },
        { label: 'Coming Soon', value: 'coming-soon' },
      ],
      defaultValue: 'available',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateProduct],
    afterDelete: [revalidateProductDelete],
  },
}
