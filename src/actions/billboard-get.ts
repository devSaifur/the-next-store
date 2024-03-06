'use server'

import { TBillboard } from '../../types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export async function billboardAction(id: string): Promise<TBillboard> {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' })
  return res.json()
}
