import { ReactNode } from "react";

interface SplitSectionProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
}

export function SplitSection({ children, columns = 2, gap = 8 }: SplitSectionProps) {
  return (
    <div className="min-h-[80vh] py-10 flex flex-col md:flex-row"
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
  