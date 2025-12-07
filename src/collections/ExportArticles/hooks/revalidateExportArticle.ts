import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { ExportArticle } from '../../../payload-types'

export const revalidateExportArticle: CollectionAfterChangeHook<ExportArticle> = async ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc.status === 'published') {
      const path = '/export-guide'

      payload.logger.info(`Revalidating export guide page at path: ${path}`)

      revalidatePath(path)
    }
  }

  return doc
}

export const revalidateExportArticleDelete: CollectionAfterDeleteHook<ExportArticle> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    const path = '/export-guide'

    payload.logger.info(`Revalidating export guide page after delete`)

    revalidatePath(path)
  }

  return doc
}
