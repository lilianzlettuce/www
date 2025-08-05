"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface ProjectFilterProps {
  categories: string[];
  toggleStyle?: string;
  toggleStyleActive?: string;
  toggleStyleInactive?: string;
}

export function ProjectFilter({ 
    categories, 
    toggleStyle = "px-3 py-1 text-sm rounded-full transition-colors", 
    toggleStyleActive = "bg-foreground text-background", 
    toggleStyleInactive = "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
}: ProjectFilterProps) {
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
            <ToggleGroup.Root
                type="single"
                value={currentCategory || ""}
                onValueChange={(value) => handleCategoryChange(value || null)}
                className="flex flex-wrap gap-2 items-center"
            >
                <ToggleGroup.Item
                    value=""
                    className={`${toggleStyle} ${
                        !currentCategory
                        ? toggleStyleActive
                        : toggleStyleInactive
                    }`}
                >
                    All
                </ToggleGroup.Item>
                
                {categories.map((category, i) => (
                    <ToggleGroup.Item
                        key={category}
                        value={category}
                        className={`${toggleStyle} ${
                        currentCategory === category
                            ? toggleStyleActive
                            : toggleStyleInactive
                        } ${i === categories.length - 1 && "rotate-180"}`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </ToggleGroup.Item>
                ))}
            </ToggleGroup.Root>
        </div>
    );
} 

export function ProjectMultiFilter({ categories }: ProjectFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
  
    // Get all category params from URL
    const currentCategories = searchParams.getAll("category");
  
    const handleCategoryChange = useCallback(
        (selectedCategories: string[]) => {
            const params = new URLSearchParams(searchParams);
            
            // Remove existing category params
            params.delete("category");
            
            // Add selected categories
            selectedCategories.forEach(category => {
            params.append("category", category);
            });
            
            router.push(`/work?${params.toString()}`);
        },
        [router, searchParams]
    );
  
    return (
      <div className="flex flex-wrap gap-2 items-center">
        <button
            onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.delete("category");
                router.push(`/work?${params.toString()}`);
            }}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                currentCategories.length === 0
                ? "bg-foreground text-background"
                : "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
            }`}
        >
            All
        </button>
        
        <ToggleGroup.Root
          type="multiple"
          value={currentCategories}
          onValueChange={handleCategoryChange}
          className="flex flex-wrap gap-2 items-center"
        >
            {categories.map((category) => (
                <ToggleGroup.Item
                    key={category}
                    value={category}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        currentCategories.includes(category)
                        ? "bg-foreground text-background"
                        : "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
                    }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
      </div>
    );
  } 