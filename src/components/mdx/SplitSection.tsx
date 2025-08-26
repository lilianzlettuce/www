import { ReactNode } from "react";

interface SplitSectionProps {
  children: ReactNode;
  gap?: number;
}

export function SplitSection({ children, gap = 8 }: SplitSectionProps) {
  return (
    <div className="my-20 p-0 flex flex-col md:flex-row"
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

interface SectionColumnProps {
  children: ReactNode;
  size?: number;
}

export function SectionColumn({ children, size = 1 }: SectionColumnProps) {
  return (
    <div style={{ flex: size }}>
      {children}
    </div>
  );
}
  