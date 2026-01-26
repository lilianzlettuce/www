import { RevealButton, RevealButton2 } from "@/components/Buttons";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">Not Found</h2>
          <p className="hidden text-muted-foreground mb-8">
            What you are looking for does not exist.
          </p>
          <p className="text-muted-foreground mb-8">
            This page fell down a rabbit hole.
          </p>
          <p className="hidden text-muted-foreground mb-8">
            
          </p>
        </div>
        
        <div className="flex flex-row gap-4">
          <Link
            href="/work"
            className="mb-4"
          >
            <RevealButton text="View All Projects" />
          </Link>
          <Link
            href="/"
            className=""
          >
            <RevealButton2 text="Go Home" />
          </Link>
        </div>
      </div>
    </div>
  );
} 