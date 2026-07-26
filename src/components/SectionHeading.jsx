function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
