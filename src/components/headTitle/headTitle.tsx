interface HeadTitleProps {
  title: string;
  subtitle?: string;
  paragraph: string;
}

export default function HeadTitle({
  title,
  subtitle,
  paragraph,
}: HeadTitleProps) {
  return (
    <div>
      <h1 className="mb-4 text-xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
        <span className="text-pink-800"></span>
        {title}
      </h1>
      {subtitle && <h2>{subtitle}</h2>}
      <p>{paragraph}</p>
    </div>
  );
}
