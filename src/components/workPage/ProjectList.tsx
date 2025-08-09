"use client";

import { ProjectFrontmatter } from "@/lib/mdx";
import { ProjectListItem } from "./Cards";
import { useState } from "react";

type ProjectListProps = {
    projects: ProjectFrontmatter[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: -600 });
    console.log(mousePos);
    
    return (
        <div className="group/list w-full flex flex-col"
            onMouseMove={e => {
                setMousePos({ x: e.clientX, y: e.clientY }); 
                console.log(mousePos);
            }}
            onMouseEnter={e => {
                setMousePos({ x: e.clientX, y: e.clientY }); 
                console.log(mousePos);
            }}
        >
            {projects.map((project: ProjectFrontmatter, index: number) => (
                <ProjectListItem 
                    key={project.slug} 
                    project={project} 
                    index={index} 
                    mousePos={mousePos} 
                />
            ))}
        </div>
    );
}