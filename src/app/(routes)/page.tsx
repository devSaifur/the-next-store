import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import { billboardAction } from '@/actions/billboard-get'
import { productsAction } from '@/actions/product-get'

export default async function HomePage() {
  const products = await productsAction({ isFeatured: true })

  const billboard = await billboardAction(
    '771a896d-dbb8-4490-b756-55dada317559'
  )

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
