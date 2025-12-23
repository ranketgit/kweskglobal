interface AboutSectionProps {
    label: string
    title: string
    paragraphs: string[]
  }
  
  export default function AboutSection({ label, title, paragraphs }: AboutSectionProps) {
    return (
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-[1100px] mx-auto px-[60px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-6 block">
                {label}
              </span>
              <h2 className="text-2xl lg:text-3xl text-stone-900 leading-relaxed">
                {title}
              </h2>
            </div>
            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-stone-500 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }