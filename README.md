# New Portfolio Site

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dynamic project pages with MDX support for rich content creation.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Project Pages**: MDX-based project documentation with custom components
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Fast loading with Next.js optimizations
- **TypeScript**: Full type safety throughout the application

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── work/
│   │   ├── page.tsx        # Main work page
│   │   └── [slug]/
│   │       ├── page.tsx    # Dynamic project page
│   │       └── not-found.tsx
│   ├── stuff/
│   │   └── page.tsx        # Personal projects and hobbies
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/             # Reusable components
│   ├── Navigation.tsx      # Main navigation component
│   ├── ProjectLayout.tsx   # Layout wrapper for project pages
│   ├── Icons.tsx          # SVG icon components
│   └── mdx/
│       ├── TechStack.tsx   # Custom MDX component
│       └── ProjectStats.tsx # Custom MDX component
├── lib/                    # Utility functions
│   └── mdx.ts             # MDX utilities and helpers
└── content/                # MDX project files
    └── projects/
        ├── ecommerce-platform.mdx
        └── task-management-app.mdx
```

## Adding New Projects

To add a new project:

1. Create a new `.mdx` file in `content/projects/` with the following frontmatter:

```mdx
---
title: "Project Title"
description: "Brief project description"
image: "/images/projects/project-image.jpg"
tags: ["Next.js", "React", "TypeScript"]
github: "https://github.com/username/project"
live: "https://project-demo.com"
date: "2024-01-15"
featured: true
---

# Project Title

Your project content here...

<TechStack 
  technologies={["Next.js", "TypeScript", "Tailwind CSS"]}
  title="Technology Stack"
/>

<ProjectStats 
  stats={[
    { label: "Performance", value: "95+", unit: "" },
    { label: "Load Time", value: "1.2", unit: "s" }
  ]}
  title="Project Metrics"
/>
```

2. The project will automatically appear on the `/work` page and be accessible at `/work/[slug]`

## Custom MDX Components

The following custom components are available for use in MDX files:

### TechStack
Displays a list of technologies with styled tags.

```mdx
<TechStack 
  technologies={["React", "Next.js", "TypeScript"]}
  title="Technologies Used"
/>
```

### ProjectStats
Displays project statistics in a grid layout.

```mdx
<ProjectStats 
  stats={[
    { label: "Performance", value: "95+", unit: "" },
    { label: "Load Time", value: "1.2", unit: "s" },
    { label: "Users", value: "1000+", unit: "" }
  ]}
  title="Project Metrics"
/>
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **next-mdx-remote**: MDX rendering and processing
- **gray-matter**: Frontmatter parsing
- **@mdx-js/react**: MDX React components

## Customization

### Styling
The website uses Tailwind CSS for styling. You can customize colors, fonts, and other design tokens in the `tailwind.config.js` file.

### Navigation
Update the navigation links in `src/components/Navigation.tsx`.

### Project Layout
Modify the project page layout in `src/components/ProjectLayout.tsx`.

### Custom Components
Add new custom MDX components in `src/components/mdx/` and register them in `src/lib/mdx.ts`.

## Deployment

The website is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## License

MIT License - feel free to use this template for your own portfolio!
