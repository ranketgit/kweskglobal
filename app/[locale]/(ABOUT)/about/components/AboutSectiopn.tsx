interface AboutSectionProps {
  label: string
  title: string
  paragraphs: string[]
}

export default function AboutSection({ label, title, paragraphs }: AboutSectionProps) {
  // Split paragraphs into two columns
  const midpoint = Math.ceil(paragraphs.length / 2)
  const leftParagraphs = paragraphs.slice(0, midpoint)
  const rightParagraphs = paragraphs.slice(midpoint)

  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1100px] mx-auto px-[60px]">
        <div className="grid grid-cols-[140px_1fr] gap-8">
          {/* Label - Left sidebar */}
          <div>
            <span className="text-[11px] uppercase tracking-[2px] text-stone-400">
              {label}
            </span>
          </div>

          {/* Content */}
          <div>
            {/* Title */}
            <h2 className="text-xl lg:text-[22px] text-stone-900 leading-relaxed font-medium mb-12 max-w-[700px]">
              {title}
            </h2>

            {/* Two-column paragraphs */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-6">
                {leftParagraphs.map((p, i) => (
                  <p key={i} className="text-sm text-stone-500 leading-relaxed text-justify">
                    {p}
                  </p>
                ))}
              </div>
              <div className="space-y-6">
                {rightParagraphs.map((p, i) => (
                  <p key={i} className="text-sm text-stone-500 leading-relaxed text-justify">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}