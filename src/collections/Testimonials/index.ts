import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { revalidateTestimonial, revalidateTestimonialDelete } from './hooks/revalidateTestimonial'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: anyone, // Allow anyone to submit testimonials
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'role', 'status', 'createdAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Role/Title',
      admin: {
        placeholder: 'e.g., Farmer, Agribusiness Owner',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Location',
      admin: {
        placeholder: 'e.g., Kaduna, Nigeria',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo (Optional)',
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Rating (1-5 stars)',
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
      label: 'Testimonial',
      admin: {
        placeholder: "Share your experience working with Kobam's Agro Solutions...",
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email (Optional)',
      admin: {
        description: 'For verification purposes only, not displayed publicly',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Approved', value: 'approved' },
        { label: 'Hidden', value: 'hidden' },
      ],
      defaultValue: 'approved',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Set to Hidden to remove from public display',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Testimonial',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show this testimonial prominently',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateTestimonial],
    afterDelete: [revalidateTestimonialDelete],
  },
}
