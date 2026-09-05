import { Leaf, PackageCheck, ShieldCheck, Truck } from 'lucide-react'

const POINTS = [
  { icon: Leaf, label: 'Carefully Sourced' },
  { icon: PackageCheck, label: 'Freshly Packed' },
  { icon: ShieldCheck, label: 'Quality Checked' },
  { icon: Truck, label: 'Retail & Bulk Orders' },
]

export default function TrustStrip() {
  return (
    <div className="bg-ivory-soft border-b border-ink/10">
      <div className="max-w-content mx-auto container-px py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-gold-dark shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-ink-soft">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
