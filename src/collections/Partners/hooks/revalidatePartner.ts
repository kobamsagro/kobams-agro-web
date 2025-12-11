import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidatePartner: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = '/'

    payload.logger.info(`Revalidating partner at path: ${path}`)

    revalidatePath(path)
  }

  return doc
}

export const revalidateDeletedPartner: CollectionAfterDeleteHook = ({ doc, req: { payload } }) => {
  const path = '/'

  payload.logger.info(`Revalidating after partner deletion at path: ${path}`)

  revalidatePath(path)

  return doc
}
