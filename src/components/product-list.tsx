import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/product-card'
import { getProducts } from '@/data/products'

interface ProductListProps {
  title: string
  isFeatured?: boolean
  categoryId?: string
}

export default async function ProductList({
  title,
  ...query
}: ProductListProps) {
  const products = await getProducts({ ...query })

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
