import { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col items-center space-y-8 my-24 ${className}`}
    >
      {children}
    </section>
  );
}
