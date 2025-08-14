import { ReactNode } from "react";

export function MiddleSection({ children }: { children: ReactNode }) {
    return (
      <div className="max-w-full sm:max-w-3xl mx-auto">
        {children}
      </div>
    );
}