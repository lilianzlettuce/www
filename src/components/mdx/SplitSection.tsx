import { ReactNode } from "react";

export function SplitSection({ children }: { children: ReactNode }) {
    return (
      <div className="grid grid-cols-2 gap-8">
        {children}
      </div>
    );
}

export function SplitLeft({ children }: { children: ReactNode }) {
    return <div className="prose">{children}</div>;
}

export function SplitRight({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}
  