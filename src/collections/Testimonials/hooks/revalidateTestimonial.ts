import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Testimonial } from '../../../payload-types'

export const revalidateTestimonial: CollectionAfterChangeHook<Testimonial> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc.status === 'approved') {
      const path = '/'

      payload.logger.info(`Revalidating home page for testimonial update`)

      revalidatePath(path)
    }
  }

  return doc
}

export const revalidateTestimonialDelete: CollectionAfterDeleteHook<Testimonial> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    const path = '/'

    payload.logger.info(`Revalidating home page after testimonial delete`)

    revalidatePath(path)
  }

  return doc
}
