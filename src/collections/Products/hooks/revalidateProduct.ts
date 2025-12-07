import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Product } from '../../../payload-types'

export const revalidateProduct: CollectionAfterChangeHook<Product> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating pages for product update`)

    // Revalidate home page (shows products)
    revalidatePath('/')
    // Revalidate products page
    revalidatePath('/products')
  }

  return doc
}

export const revalidateProductDelete: CollectionAfterDeleteHook<Product> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating pages after product delete`)

    // Revalidate home page (shows products)
    revalidatePath('/')
    // Revalidate products page
    revalidatePath('/products')
  }

  return doc
}
