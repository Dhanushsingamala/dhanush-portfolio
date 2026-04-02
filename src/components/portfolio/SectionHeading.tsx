type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-zinc-100 md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-zinc-300">{description}</p>
    </div>
  );
}
