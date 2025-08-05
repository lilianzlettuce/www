"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface ProjectFilterProps {
  categories: string[];
}

export function ProjectFilter({ categories }: ProjectFilterProps) {
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

    return (
        <div className="">
            <div className="flex flex-wrap gap-2 items-center">
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
            </div>
        </div>
    );
} 