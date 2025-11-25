"use client";

import Link from "next/link";
import Image from "next/image";
import {  useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ExternalLinkIcon, ExpandIcon2, ArrowRightBar, BarcodeIcon, SquareIcon } from "../svg/Icons";
import { ProjectFrontmatter } from "@/lib/mdx";
import { TagLabelFill, TagLabelStroke } from "./Labels";
import BoxCorners from "../svg/BoxCorners";
import Sprite from "../Sprite";
import CategoryIcon from "./CategoryIcon";

type ProjectCardProps = {
    project: ProjectFrontmatter;
    className?: string;
    index?: number;
    mousePos?: { x: number; y: number };
}

export function ProjectListItem({ project, index = 0, mousePos }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group/list-item relative w-full h-fit rounded-none border-t-1 border-border hover:border-muted-foreground transition-all duration-300"
        >
            <div className="relative w-full h-full p-5 flex flex-row items-center gap-4 border-b-1 border-background hover:border-muted-foreground transition-all duration-300">
                <div className="fixed z-10 left-1/4 w-100 h-65 aspect-auto hidden group-hover/list-item:flex items-center justify-center"
                    style={{
                        left: mousePos?.x ? mousePos.x + 50 : 0,
                        top: mousePos?.y ? mousePos.y - 15 : 0,
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
                    <div className="min-w-fit flex flex-row items-center gap-6">
                        <div className="font-roboto-mono text-[0.65rem] text-muted-foreground">
                        &#91;{index.toString().padStart(2, '0')}&#93;
                        </div>
                        <div className="font-sans text-xl font-medium">
                            {project.title}
                        </div>
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

export function ProjectListItemMinimal({ project, index = 0, mousePos }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group/list-item relative w-full h-fit rounded-none border-t-1 border-border hover:border-pink-300 transition-all duration-300"
        >
            <div className="relative w-full h-full p-5 flex flex-row items-center gap-4 border-b-1 border-background hover:border-pink-300 transition-all duration-300">
                <div className="fixed z-10 left-1/4 w-100 h-65 aspect-auto hidden group-hover/list-item:flex items-center justify-center"
                    style={{
                        left: mousePos?.x ? mousePos.x + 50 : 0,
                        top: mousePos?.y ? mousePos.y - 15 : 0,
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
                    <div className="min-w-fit flex flex-row items-center gap-6">
                        <div className="font-roboto-mono text-[0.65rem] text-muted-foreground">
                        &#91;{index.toString().padStart(2, '0')}&#93;
                        </div>
                        <div className="font-sans text-base font-medium">
                            {project.title}
                        </div>
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
                                        group-hover/list-item:border-pink-300 group-hover/list-item:text-pink-300"
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
        >
            {/* Decorative corners */}
            <BoxCorners
                cornerSize="4px"
                cornerOffset="-2px"
                cornerColor="var(--secondaryForeground)"
            />

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

export function ProjectCardBasic({ project, className = "h-90" }: ProjectCardProps) {
    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${className} group relative rounded-none box-border border-1 border-border hover:border-muted-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
            <BoxCorners
                cornerSize="4px"
                cornerOffset="-2px"
                cornerColor="var(--secondaryForeground)"
            />
            {/*<BoxCorners
                icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                cornerSize="16px"
                cornerOffset="-1px"
                cornerColor="transparent"
            />*/}
            <div className="w-full h-full p-4 flex flex-col gap-4">
                <div className="relative w-full h-full flex items-center justify-center border-1 border-secondary">
                    <BoxCorners
                        icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                        cornerSize="16px"
                        cornerOffset="-1px"
                        cornerColor="transparent"
                    />
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
                
                <div className="h-60 flex flex-col justify-between">
                    <div className="">
                        <div className="flex items-start justify-between">
                            <h3 className="font-sans text-base font-semibold text-foreground">
                                {project.title}
                            </h3>
                        </div>
                        <p className="font-ibm-plex-sans text-sm text-mutedForeground line-clamp-2">
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

export function ProjectCardTechMono2({ project, className = "h-90" }: ProjectCardProps) {
    const eyeSpriteParentRef = useRef<HTMLDivElement>(null);

    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${className} group relative rounded-none box-border border-1 border-border hover:border-muted-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
            <BoxCorners
                cornerSize="4px"
                cornerOffset="-2px"
                cornerColor="var(--secondaryForeground)"
            />
            {/*<BoxCorners
                icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                cornerSize="16px"
                cornerOffset="-1px"
                cornerColor="transparent"
            />*/}
            <div ref={eyeSpriteParentRef} 
                className="h-full flex flex-col"
            >
                {/* Window handle */}
                <div className="select-none cursor-grab border-b-1 border-border px-1 py-1 flex justify-between items-center gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference text-white">
                            <Sprite parentRef={eyeSpriteParentRef}
                                id="eye-sprite-window-tech-mono"
                                spriteSize={15}
                                numRows={3}
                                numCols={5}
                                backgroundImage="/img/sprite/eye-sprite.png"
                                numFrames={5}
                                duration={0.5}
                                row={2}
                                hoverRow={0}
                                onHover={true}
                                hoverNumFrames={1}
                                hoverDuration={1}
                                style={{ scale: 1.1 }}
                                iterationCount="1"
                            />
                        </div>
                        <div className="hidden text-sm font-tiny5 uppercase">
                            {project.title}
                        </div>
                        <div className="text-sm font-roboto-mono font-semibold capitalize line-clamp-1">
                            {project.title}
                        </div>
                        <h3 className="hidden font-sans text-base font-semibold text-foreground">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                        <ExpandIcon2 className="hidden w-4.5 h-4.5" strokeWidth={2.5} />
                        <ArrowRightBar className="hidden w-4.5 h-4.5" strokeWidth={0} />
                        <BarcodeIcon className="hidden w-4.5 h-4.5" strokeWidth={0} />
                        <SquareIcon className="hidden w-4.5 h-4.5 scale-70 text-muted-foreground" strokeWidth={8} />
                        {project.categories.map((category: string) => (
                            <CategoryIcon key={category} category={category} className="w-4.5 h-4.5" />
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="w-full grow p-4 flex flex-col gap-4">
                    <div className="relative w-full h-full flex items-center justify-center border-1 border-secondary">
                        <BoxCorners
                            icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                            cornerSize="16px"
                            cornerOffset="-1px"
                            cornerColor="transparent"
                        />
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
                    
                    <div className="h-50 flex flex-col justify-between">
                        <div className="">
                            <div className="flex items-start justify-between">
                                <h3 className="hidden font-sans text-base font-semibold text-foreground">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="font-ibm-plex-sans text-sm text-mutedForeground line-clamp-2">
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
            </div>
        </Link>
    );
};

export function ProjectCardTechMono({ project, className = "h-90" }: ProjectCardProps) {
    const eyeSpriteParentRef = useRef<HTMLDivElement>(null);

    return (
        <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${className} group relative rounded-none box-border border-1 border-border hover:border-muted-foreground hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
            <BoxCorners
                cornerSize="4px"
                cornerOffset="-2px"
                cornerColor="var(--secondaryForeground)"
            />
            {/*<BoxCorners
                icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                cornerSize="16px"
                cornerOffset="-1px"
                cornerColor="transparent"
            />*/}
            <div ref={eyeSpriteParentRef} 
                className="h-full flex flex-col"
            >
                {/* Window handle */}
                <div className="select-none cursor-grab border-b-1 border-border px-1 py-1 flex justify-between items-center gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <div className="mix-blend-difference text-white">
                            <Sprite parentRef={eyeSpriteParentRef}
                                id="eye-sprite-window-tech-mono"
                                spriteSize={15}
                                numRows={3}
                                numCols={5}
                                backgroundImage="/img/sprite/eye-sprite.png"
                                numFrames={5}
                                duration={0.5}
                                row={2}
                                hoverRow={0}
                                onHover={true}
                                hoverNumFrames={1}
                                hoverDuration={1}
                                style={{ scale: 1.1 }}
                                iterationCount="1"
                            />
                        </div>
                        <div className="hidden text-sm font-tiny5 uppercase">
                            {project.categories.map((category: string) => (
                                <span key={category}>
                                    {category},&nbsp;
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-0">
                        <ExpandIcon2 className="hidden w-4.5 h-4.5" strokeWidth={2.5} />
                        <ArrowRightBar className="hidden w-4.5 h-4.5" strokeWidth={0} />
                        <BarcodeIcon className="hidden w-4.5 h-4.5" strokeWidth={0} />
                        <SquareIcon className="hidden w-4.5 h-4.5 scale-70 text-muted-foreground" strokeWidth={8} />
                        {project.categories.map((category: string) => (
                            <CategoryIcon key={category} category={category} className="w-4.5 h-4.5" />
                        ))}
                        {project.categories.map((category: string) => (
                            <span key={category} className="hidden text-sm font-tiny5 uppercase">
                                {category}.&nbsp;
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="w-full grow p-4 flex flex-col gap-4">
                    <div className="relative w-full h-full flex items-center justify-center border-1 border-secondary">
                        <BoxCorners
                            icon={<div className="w-full h-full border-t-1 border-l-1 border-muted-foreground"></div>}
                            cornerSize="16px"
                            cornerOffset="-1px"
                            cornerColor="transparent"
                        />
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
                    
                    <div className="h-60 flex flex-col justify-between">
                        <div className="">
                            <div className="flex items-start justify-between">
                                <h3 className="font-sans text-base font-semibold text-foreground">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="font-ibm-plex-sans text-sm text-mutedForeground line-clamp-2">
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