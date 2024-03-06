const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

interface CurrencyProps {
  value: number
}

export default function Currency({ value }: CurrencyProps) {
  return <div className="font-semibold">{formatter.format(value)}</div>
}
