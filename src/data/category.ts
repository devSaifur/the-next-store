import type { TCategory } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export async function getCategory(id: string): Promise<TCategory> {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' })
  return res.json()
}

export async function getCategories(): Promise<TCategory[]> {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
