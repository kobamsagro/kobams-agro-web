import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidateTeamMember: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc.status === 'active') {
    const path = '/about'

    payload.logger.info(`Revalidating team member at path: ${path}`)

    revalidatePath(path)
  }

  return doc
}

export const revalidateDeletedTeamMember: CollectionAfterDeleteHook = ({
  doc,
  req: { payload },
}) => {
  const path = '/about'

  payload.logger.info(`Revalidating after team member deletion at path: ${path}`)

  revalidatePath(path)

  return doc
}
