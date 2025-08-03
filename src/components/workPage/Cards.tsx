"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "../Icons";
import { ProjectFrontmatter } from "@/lib/mdx";
import { useMousePosition } from "@/hooks/useMousePosition";
import { TagLabelFill, TagLabelStroke } from "./Labels";

type ProjectCardProps = {
    project: ProjectFrontmatter;
    index?: number;
}

export function ProjectListItem({ project, index = 0 }: ProjectCardProps) {
    const mousePosition = useMousePosition();

    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group/list-item relative w-full h-fit rounded-none border-t-1 border-border hover:border-muted-foreground transition-all duration-300"
        >
            <div className="relative w-full h-full p-5 flex flex-row items-center gap-4 border-b-1 border-background hover:border-muted-foreground transition-all duration-300">
                <div className="fixed z-10 left-1/4 w-100 h-65 aspect-auto hidden group-hover/list-item:flex items-center justify-center"
                    style={{
                        left: mousePosition.x + 50,
                        top: mousePosition.y - 15,
                    }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            fill={true}
                        />
                    ) : (
                        <div className="text-mutedForeground text-4xl font-bold">
                            {project.title.charAt(0)}
                        </div>
                    )}
                </div>
                
                <div className="w-full h-full flex flex-row items-center justify-between transition-all duration-300 text-foreground group-hover/list:text-muted-foreground group-hover/list-item:text-foreground">
                    <div className="min-w-fit flex flex-row items-start gap-6">
                        <div className="font-roboto-mono text-[0.65rem] text-muted-foreground">
                        &#91;{index.toString().padStart(2, '0')}&#93;
                        </div>
                        <h3 className="font-sans text-xl/5 font-medium">
                            {project.title}
                        </h3>
                        <p className="hidden font-ibm-plex-mono text-sm text-mutedForeground line-clamp-2">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="min-w-fit flex items-center gap-6 font-roboto-mono text-[0.65rem] tracking-widest">
                        <div className="w-full flex flex-wrap gap-2 uppercase">
                            {project.tags?.slice(0, 3).map((tag: string) => (
                                <TagLabelStroke
                                    key={tag}
                                    tag={tag}
                                    className="group-hover/list:border-muted-foreground group-hover/list:text-muted-foreground
                                        group-hover/list-item:border-foreground group-hover/list-item:text-foreground"
                                />
                            ))}
                            {project.tags && project.tags.length > 3 && (
                                <span className="h-fit px-1 py-0.4 rounded-xs bg-muted text-mutedForeground">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        <p className="">
                            {project.date.split("-").reverse().join(".")}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function ProjectListItemTechMono({ project, index = 0 }: ProjectCardProps) {
    const mousePosition = useMousePosition();

    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group/list-item relative w-full h-fit rounded-none border-t-1 border-border hover:border-muted-foreground transition-all duration-300"
        >
            <div className="relative w-full h-full p-4 flex flex-row gap-4">
                <div className="fixed z-10 left-1/4 w-100 h-65 aspect-auto hidden group-hover/list-item:flex items-center justify-center"
                    style={{
                        left: mousePosition.x + 50,
                        top: mousePosition.y - 15,
                    }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            fill={true}
                        />
                    ) : (
                        <div className="text-mutedForeground text-4xl font-bold">
                            {project.title.charAt(0)}
                        </div>
                    )}
                </div>
                
                <div className="w-full h-full flex flex-row items-start justify-between transition-all duration-300 text-foreground group-hover/list:text-muted-foreground group-hover/list-item:text-foreground">
                    <div className="min-w-fit flex flex-row items-center gap-2">
                        <div className="font-roboto-mono text-xs text-muted-foreground">
                            &#91;{index.toString().padStart(2, '0')}&#93;
                        </div>
                        <h3 className="font-roboto-monotext-base font-semibold">
                            {project.title}
                        </h3>
                        <p className="hidden font-ibm-plex-mono text-sm text-mutedForeground line-clamp-2">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="min-w-fit flex flex-col items-end gap-2">
                        <div className="w-full flex flex-wrap gap-2 font-roboto-mono text-[0.65rem] tracking-widest uppercase">
                            {project.tags?.slice(0, 3).map((tag: string) => (
                                <TagLabelFill
                                    key={tag}
                                    tag={tag}
                                    className="group-hover/list:bg-muted-foreground group-hover/list:text-background
                                        group-hover/list-item:bg-foreground group-hover/list-item:text-background"
                                />
                            ))}
                            {project.tags && project.tags.length > 3 && (
                                <span className="h-fit px-1 py-0.4 rounded-xs bg-muted text-mutedForeground">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        <p className="font-roboto-mono text-[0.6rem] tracking-widest">
                            &#91;{project.date.split("-").reverse().join(".")}&#93;
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function ProjectCardLarge({ project }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative h-75 rounded-none border-1 border-border hover:border-muted-foreground transition-all duration-300 hover:-translate-y-1"
            style={{ "--corner-size": "4px", 
                "--corner-offset": "-2px",
                "--corner-color": "var(--secondaryForeground)" } as React.CSSProperties}
        >
            {/* Decorative corners */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bg-foreground"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        top: "var(--corner-offset)",
                        left: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        top: "var(--corner-offset)",
                        right: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        bottom: "var(--corner-offset)",
                        left: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        bottom: "var(--corner-offset)",
                        right: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
            </div>

            {/* Project content */}
            <div className="w-full h-full p-4 flex flex-row gap-4">
                <div className="relative w-100 h-full flex items-center justify-center border-1 border-secondary">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            fill={true}
                        />
                    ) : (
                        <div className="text-mutedForeground text-4xl font-bold">
                            {project.title.charAt(0)}
                        </div>
                    )}
                </div>
                
                <div className="w-1/2 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-start justify-between">
                            <h3 className="font-roboto-monotext-base font-semibold text-foreground">
                                {project.title}
                            </h3>
                        </div>
                        <p className="font-ibm-plex-mono text-sm text-mutedForeground line-clamp-2">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2 font-roboto-mono text-[0.65rem] tracking-widest uppercase">
                            {project.tags?.slice(0, 3).map((tag: string) => (
                                <span
                                    key={tag}
                                    className="h-fit px-1 py-0.4 rounded-xs bg-foreground text-background"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags && project.tags.length > 3 && (
                                <span className="h-fit px-1 py-0.4 rounded-xs bg-muted text-mutedForeground">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        <p className="font-roboto-mono text-[0.6rem] tracking-widest">
                            &#91;{project.date.split("-").reverse().join(".")}&#93;
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function ProjectCardBasic({ project }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative h-90 rounded-none border-1 border-border hover:border-muted-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ "--corner-size": "4px", 
                "--corner-offset": "-2px",
                "--corner-color": "var(--secondaryForeground)" } as React.CSSProperties}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bg-foreground"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        top: "var(--corner-offset)",
                        left: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        top: "var(--corner-offset)",
                        right: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        bottom: "var(--corner-offset)",
                        left: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
                <div className="absolute"
                    style={{
                        width: "var(--corner-size)",
                        height: "var(--corner-size)",
                        bottom: "var(--corner-offset)",
                        right: "var(--corner-offset)",
                        backgroundColor: "var(--corner-color)"
                    }}
                ></div>
            </div>
            <div className="w-full h-full p-4 flex flex-col gap-4">
                <div className="relative w-full h-full flex items-center justify-center border-1 border-secondary">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover"
                            fill={true}
                        />
                    ) : (
                        <div className="text-mutedForeground text-4xl font-bold">
                            {project.title.charAt(0)}
                        </div>
                    )}
                </div>
                
                <div className="h-55 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start justify-between">
                            <h3 className="font-roboto-monotext-base font-semibold text-foreground">
                                {project.title}
                            </h3>
                        </div>
                        <p className="font-ibm-plex-mono text-sm text-mutedForeground line-clamp-2">
                            {project.description}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2 font-roboto-mono text-[0.65rem] tracking-widest uppercase">
                            {project.tags?.slice(0, 3).map((tag: string) => (
                                <span
                                    key={tag}
                                    className="h-fit px-1 py-0.4 rounded-xs bg-foreground text-background"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags && project.tags.length > 3 && (
                                <span className="h-fit px-1 py-0.4 rounded-xs bg-muted text-mutedForeground">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        <p className="font-roboto-mono text-[0.6rem] tracking-widest">
                            &#91;{project.date.split("-").reverse().join(".")}&#93;
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function ProjectCardDefault({ project }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block bg-background border border-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="aspect-video bg-muted flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="text-mutedForeground text-4xl font-bold">
                        {project.title.charAt(0)}
                    </div>
                )}
                </div>
                
                <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <ExternalLinkIcon className="w-4 h-4 text-mutedForeground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-mutedForeground mb-4 line-clamp-2">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags?.slice(0, 3).map((tag: string) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-foreground/10 text-foreground rounded"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags && project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-muted text-mutedForeground rounded">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};