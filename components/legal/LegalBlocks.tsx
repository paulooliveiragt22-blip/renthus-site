import { InnerMain } from "@/components/layout/InnerMain";

export function LegalDocBody({ children }: { children: React.ReactNode }) {
  return (
    <InnerMain className="pb-24">
      <article className="mx-auto max-w-3xl">{children}</article>
    </InnerMain>
  );
}

export function LegalHeader({
  label,
  title,
  meta,
}: {
  label: string;
  title: string;
  meta: string;
}) {
  return (
    <header className="mb-10 border-b border-gray-200 pb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-renthus-orange">
        {label}
      </p>
      <h1 className="text-balance text-3xl font-bold tracking-tight text-renthus-purple sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-gray-500">{meta}</p>
    </header>
  );
}

export function LegalHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 rounded-xl border border-renthus-orange/25 bg-renthus-orange/[0.06] p-5 sm:p-6">
      <div className="text-sm leading-relaxed text-gray-600 [&_strong]:font-medium [&_strong]:text-gray-900">
        {children}
      </div>
    </div>
  );
}

export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 border-l-[3px] border-renthus-purple pl-3.5 text-lg font-semibold tracking-tight text-renthus-purple sm:text-xl">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-semibold text-renthus-purple">{children}</h3>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base [&_a]:font-medium [&_a]:text-renthus-orange [&_a]:hover:underline">
      {children}
    </p>
  );
}

export function LegalUl({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 marker:text-renthus-orange sm:text-base [&_strong]:font-medium [&_strong]:text-gray-900">
      {children}
    </ul>
  );
}

export function LegalCrossLinks({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8 text-center text-xs leading-relaxed text-gray-500">
      {children}
    </div>
  );
}

export function RightsGrid({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((r) => (
        <div
          key={r.title}
          className="rounded-[10px] border border-gray-200 bg-white px-4 py-3.5 shadow-sm"
        >
          <strong className="mb-1 block text-sm text-renthus-purple">{r.title}</strong>
          <span className="text-xs text-gray-600 sm:text-sm">{r.description}</span>
        </div>
      ))}
    </div>
  );
}
