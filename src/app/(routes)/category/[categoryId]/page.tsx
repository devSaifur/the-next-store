import { getColors } from '@/data/colors'
import { getProducts } from '@/data/products'
import { getSizes } from '@/data/sizes'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import Filter from '@/components/category/filter'
import ProductCard from '@/components/product-card'
import NoResults from '@/components/ui/no-results'
import MobileFilters from '@/components/category/mobile-filters'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryId } = params
  const { colorId, sizeId } = searchParams

  const products = await getProducts({ categoryId, sizeId, colorId })

  const sizes = await getSizes()
  const colors = await getColors()

  return (
    <main className="bg-white">
      <Container>
        <Billboard />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />M
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-4">
                {products.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
