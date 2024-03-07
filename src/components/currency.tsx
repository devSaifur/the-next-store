import { cn } from '@/lib/utils'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

interface CurrencyProps {
  value: number
  className?: React.ReactNode
}

export default function Currency({ value, className }: CurrencyProps) {
  return (
    <div className={cn('font-semibold', className)}>
      {formatter.format(value)}
    </div>
  )
}
