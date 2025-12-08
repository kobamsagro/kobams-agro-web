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
    group: 'Content',
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
          label: 'Product Highlights',
          fields: [
            {
              name: 'highlights',
              type: 'array',
              label: 'Product Highlights',
              admin: {
                description:
                  'Showcase key benefits and features of your product (e.g., Long Shelf Life, Premium Quality, Export Ready)',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Benefit Title',
                  admin: {
                    placeholder: 'e.g., Extended Shelf Life, Premium Quality, Export Ready',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  required: true,
                  label: 'Short Description',
                  admin: {
                    placeholder: 'e.g., Stays fresh for up to 24 months under proper storage',
                  },
                },
                {
                  name: 'benefits',
                  type: 'array',
                  required: true,
                  label: 'Detailed Benefits',
                  minRows: 2,
                  admin: {
                    description: 'List specific advantages and value propositions',
                  },
                  fields: [
                    {
                      name: 'benefit',
                      type: 'text',
                      required: true,
                      label: 'Benefit',
                      admin: {
                        placeholder: 'e.g., Reduces waste and storage costs',
                      },
                    },
                  ],
                },
                {
                  name: 'additionalInfo',
                  type: 'textarea',
                  label: 'Additional Information (Optional)',
                  admin: {
                    placeholder:
                      'e.g., Our products meet international standards including ISTA, ISO, and HACCP certifications',
                  },
                },
              ],
            },
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
              name: 'packagingProcess',
              type: 'textarea',
              label: 'Packaging Process',
              admin: {
                description:
                  'Describe the packaging process, quality control measures, and handling procedures',
                placeholder:
                  'e.g., Our packaging process includes thorough cleaning, sorting, and quality inspection. Products are packed in food-grade materials under strict hygiene standards...',
              },
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
