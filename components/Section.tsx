export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}