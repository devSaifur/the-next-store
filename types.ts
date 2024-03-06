export type TBillboard = {
  id: string
  label: string
  imageUrl: string
}

export type TCategory = {
  id: string
  name: string
  billboard: TBillboard
}
