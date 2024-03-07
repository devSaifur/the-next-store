'use server'

import { TCategory } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export async function getCategoryAction(id: string): Promise<TCategory> {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' })
  return res.json()
}
