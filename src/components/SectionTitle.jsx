export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`container mx-auto px-4 ${centered ? 'text-center' : ''} pb-10 md:pb-14`}>
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-3xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/90' : 'text-brand-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
