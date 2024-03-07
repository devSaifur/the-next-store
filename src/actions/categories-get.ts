'use server'

import { TCategory } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export async function getCategoriesAction(): Promise<TCategory[]> {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
