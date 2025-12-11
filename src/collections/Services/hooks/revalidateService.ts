import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidateService: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc.status === 'active') {
    const homePath = '/'
    const servicesPath = '/services'

    payload.logger.info(`Revalidating service at paths: ${homePath}, ${servicesPath}`)

    revalidatePath(homePath)
    revalidatePath(servicesPath)
  }

  return doc
}

export const revalidateDeletedService: CollectionAfterDeleteHook = ({ doc, req: { payload } }) => {
  const homePath = '/'
  const servicesPath = '/services'

  payload.logger.info(`Revalidating after service deletion at paths: ${homePath}, ${servicesPath}`)

  revalidatePath(homePath)
  revalidatePath(servicesPath)

  return doc
}
