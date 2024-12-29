import type { TColor } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

export async function getColors(): Promise<TColor[]> {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
