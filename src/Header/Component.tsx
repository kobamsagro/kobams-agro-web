import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  // Fetch products for the dropdown
  const payload = await getPayload({ config: configPromise })
  const productsData = await payload.find({
    collection: 'products',
    limit: 20,
    where: {
      status: {
        equals: 'available',
      },
    },
    sort: 'name',
  })

  return <HeaderClient data={headerData} products={productsData.docs} />
}
