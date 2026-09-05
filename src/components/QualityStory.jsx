import SectionHeading from './SectionHeading'

const IMAGE_URL =
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1600&q=80&auto=format&fit=crop'

export default function QualityStory() {
  return (
    <section id="our-story" className="relative py-24 sm:py-32 scroll-mt-20">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover motion-reduce:bg-scroll"
        style={{ backgroundImage: `url(${IMAGE_URL})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />

      <div className="relative max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Our Story"
          title="Quality Begins at the Source"
          light
          description="We believe great food begins with great ingredients."
        />

        <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl text-ivory-soft/80 text-sm sm:text-base leading-relaxed">
          <p>We work with carefully selected suppliers who understand what authentic Indian flavour requires.</p>
          <p>Every batch is checked for consistent quality before it reaches our packing line.</p>
          <p>Ingredients are packed hygienically, with freshness as a constant priority.</p>
          <p>Our blends are built on traditional recipes, refined but never replaced.</p>
        </div>
      </div>
    </section>
  )
}
