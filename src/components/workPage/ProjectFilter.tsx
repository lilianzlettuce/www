"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface ProjectFilterProps {
  categories: string[];
}

export default function ProjectFilter({ categories }: ProjectFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");

  const handleCategoryChange = useCallback(
    (category: string | null) => {
      const params = new URLSearchParams(searchParams);
      
      if (category) {
        params.set("category", category);
      } else {
        params.delete("category");
      }
      
      router.push(`/work?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push("/work");
  }, [router]);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-mutedForeground mr-2">
          Filter by:
        </span>
        
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            !currentCategory
              ? "bg-foreground text-background"
              : "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentCategory === category
                ? "bg-foreground text-background"
                : "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        
        {currentCategory && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 text-sm text-mutedForeground hover:text-foreground transition-colors"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
} 