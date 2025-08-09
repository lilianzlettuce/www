"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Category, getCategoryIcon } from "@/lib/data";
import CategoryIcon from "./CategoryIcon";

interface ProjectFilterProps {
  categories: string[] | Category[];
  toggleStyle?: string;
  toggleStyleActive?: string;
  toggleStyleInactive?: string;
  showIcons?: boolean;
}

export function ProjectFilter({ 
    categories, 
    toggleStyle = "px-3 py-1 text-sm rounded-full transition-colors", 
    toggleStyleActive = "bg-foreground text-background", 
    toggleStyleInactive = "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground",
    showIcons = true
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

    // Convert categories to string array if it's Category array
    const categoryNames = Array.isArray(categories) && categories.length > 0 && typeof categories[0] === 'object' 
      ? (categories as Category[]).map(cat => cat.name)
      : categories as string[];

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
                
                {categoryNames.map((category, i) => (
                    <ToggleGroup.Item
                        key={category}
                        value={category}
                        className={`${toggleStyle} ${
                        currentCategory === category
                            ? toggleStyleActive
                            : toggleStyleInactive
                        } ${i === categoryNames.length - 1 && "rotate-180 text-[0.5rem]"}`}
                    >
                        <div className="flex items-center gap-1.5">
                            {showIcons && getCategoryIcon(category) && (
                                <CategoryIcon category={category} 
                                    className="w-3 h-3"
                                    strokeWidth={currentCategory === category ? 0 : 0} />
                            )}
                            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </div>
                    </ToggleGroup.Item>
                ))}
            </ToggleGroup.Root>
        </div>
    );
} 

export function ProjectMultiFilter({ categories, showIcons = true }: ProjectFilterProps) {
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

    // Convert categories to string array if it's Category array
    const categoryNames = Array.isArray(categories) && categories.length > 0 && typeof categories[0] === 'object' 
      ? (categories as Category[]).map(cat => cat.name)
      : categories as string[];
  
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
            {categoryNames.map((category) => (
                <ToggleGroup.Item
                    key={category}
                    value={category}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        currentCategories.includes(category)
                        ? "bg-foreground text-background"
                        : "bg-muted text-mutedForeground hover:bg-secondary hover:text-foreground"
                    }`}
                >
                    <div className="flex items-center gap-1.5">
                        {showIcons && getCategoryIcon(category) && (
                            <CategoryIcon category={category} />
                        )}
                        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </div>
                </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
      </div>
    );
  } 