import { cn } from "@/lib/utils";

export function InnerMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-4 pb-20 pt-10 sm:px-6 sm:pt-14 md:pb-28",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
