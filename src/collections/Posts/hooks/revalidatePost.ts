import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/posts/${doc.slug}`
      const homePath = '/'

      payload.logger.info(`Revalidating post at path: ${path}`)
      payload.logger.info(`Revalidating homepage for news section: ${homePath}`)

      revalidatePath(path)
      revalidatePath(homePath)
      revalidateTag('posts-sitemap', '')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/posts/${previousDoc.slug}`
      const homePath = '/'

      payload.logger.info(`Revalidating old post at path: ${oldPath}`)
      payload.logger.info(`Revalidating homepage for news section: ${homePath}`)

      revalidatePath(oldPath)
      revalidatePath(homePath)
      revalidateTag('posts-sitemap', '')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = async ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/posts/${doc?.slug}`
    const homePath = '/'

    revalidatePath(path)
    revalidatePath(homePath)
    revalidateTag('posts-sitemap', '')
  }

  return doc
}
