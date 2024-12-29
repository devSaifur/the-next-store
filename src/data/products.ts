import qs from 'query-string'
import type { TProduct } from '@/types'

type TQuery = {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export async function getProducts(query: TQuery): Promise<TProduct[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  })

  const res = await fetch(url, { cache: 'no-store' })
  return res.json()
}

export async function getProduct(id: string): Promise<TProduct> {
  const res = await fetch(`${URL}/${id}`, { cache: 'no-store' })
  return res.json()
}
