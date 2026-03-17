# Copilot Workspace Instructions

## Project Overview
This is a Next.js 15 + TypeScript + Tailwind portfolio website with MDX-based project pages.

## When writing code
- Keep changes minimal and incremental.
- Use existing file structure and patterns in `src/app`, `src/components`, `src/lib`, and `content/projects`.
- Prefer TypeScript types and strictness.
- For UI updates, follow the styling approach used in `globals.css` and Tailwind utility classes.

## Dev workflow
- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Key conventions
- Project content is in `content/projects/*.mdx` with frontmatter and custom MDX components.
- Dynamic pages are in `src/app/work/[slug]/page.tsx`.
- Shared component patterns are in `src/components/*` and `src/components/mdx/*`.
- Keep component props small and explicit.

## Common tasks
- Add a new project by adding MDX with frontmatter in `content/projects`.
- Use `src/components/mdx/` components for MDX content.
- Update navigation in `src/components/Navigation.tsx`.

## For this workspace assistant
- Always produce concise, factual responses.
- Reference filenames in backticks (like `src/app/page.tsx`).
- When requested to implement features, provide code edits directly.
- If uncertain, ask for clarification.
