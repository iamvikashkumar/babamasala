const MESSAGE = 'Authentic Indian Spices  •  Premium Dry Fruits  •  Quality You Can Taste'

export default function AnnouncementBar() {
  return (
    <div className="bg-forest-dark text-ivory-soft text-xs sm:text-sm py-2 overflow-hidden">
      <div className="relative flex whitespace-nowrap no-scrollbar">
        <div className="flex animate-marquee">
          <span className="px-4 tracking-wide">{MESSAGE}</span>
          <span className="px-4 tracking-wide">{MESSAGE}</span>
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          <span className="px-4 tracking-wide">{MESSAGE}</span>
          <span className="px-4 tracking-wide">{MESSAGE}</span>
        </div>
      </div>
    </div>
  )
}
