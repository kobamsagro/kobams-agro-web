import type { FieldHook } from 'payload'

export const setMetaImage: FieldHook = ({ data, operation, originalDoc, value }) => {
  // Only run on create or update
  if (operation === 'create' || operation === 'update') {
    // If meta.image is not set but heroImage is set, use heroImage
    if (!value && data?.heroImage) {
      return data.heroImage
    }
  }

  return value
}
