import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { ExportArticle } from '../../../payload-types'

export const revalidateExportArticle: CollectionAfterChangeHook<ExportArticle> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc.status === 'published') {
      const guidePath = '/export-guide'
      const articlePath = `/export-guide/${doc.slug}`

      payload.logger.info(`Revalidating export guide at paths: ${guidePath}, ${articlePath}`)

      revalidatePath(guidePath)
      revalidatePath(articlePath)
    }

    // If the article was previously published, we need to revalidate the old path
    if (previousDoc?.status === 'published' && doc.status !== 'published') {
      const oldPath = `/export-guide/${previousDoc.slug}`

      payload.logger.info(`Revalidating old export article at path: ${oldPath}`)

      revalidatePath(oldPath)
    }
  }

  return doc
}

export const revalidateExportArticleDelete: CollectionAfterDeleteHook<ExportArticle> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    const guidePath = '/export-guide'
    const articlePath = `/export-guide/${doc?.slug}`

    payload.logger.info(
      `Revalidating export guide after delete at paths: ${guidePath}, ${articlePath}`,
    )

    revalidatePath(guidePath)
    revalidatePath(articlePath)
  }

  return doc
}
