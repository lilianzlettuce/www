import { ReactNode } from "react";

interface SplitSectionProps {
  children: ReactNode;
  className?: string;
}

export function SplitSection({ children, className = "my-20 gap-2" }: SplitSectionProps) {
  return (
    <div className={`p-0 flex flex-col md:flex-row ${className}`}
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
  