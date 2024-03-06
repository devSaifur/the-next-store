'use server'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export async function categoryAction() {
  const res = await fetch(URL, { cache: 'no-store' })
  return res.json()
}
