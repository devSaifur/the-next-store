'use server'

import { TProduct } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export async function getProductAction(id: string): Promise<TProduct> {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' })
  return res.json()
}
