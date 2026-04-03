import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("mx-auto max-w-4xl text-center", className)}>
      <h1 className="text-balance text-3xl font-bold tracking-tight text-renthus-purple sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
