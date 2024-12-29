import type { TSize } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

export async function getSizes(): Promise<TSize[]> {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
