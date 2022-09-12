# 🚀 Try Astro

This project is to get some time playing with Astro and Tailwind.

## 🚀 Project Structure

Inside this project, you'll find the following folders:

```
/
├── public/ # Static thing that are unchanging, use as is
├── src/
│   ├── assets
│   │   └─- styles
│   │       └── global.scss # Place styling for items that are hard to use Tailwinds class on
│   ├── card/ # Content markdown goes here with frontmatter
│   ├── components/
│   │   ├─- TopNav.astro # Adds a nav bar at the top of the layout
│   │   └── Card.astro # A reusable item that gets content maped over
│   ├── layouts/
│   │   ├─- Layout.astro # The main page layout
│   │   └── CardGroupLayout.astro # A section layout component
│   ├── models/
│   │   └── Frontmatter.ts # This file contains a TypeScript Interface to help with typings throught this project
│   ├── pages/
│   │   ├─- card/
│   │   │   └── [slug].astro # A page that is used in the dynamic routing for the card markdown files
│   │   └── index.astro # The landing page
│   └── service
│       └── card.service.ts # Contains a function that processes the card markdown files
├── astro.config.mjs # Tell Astro where to find things
├── package.json # Define dependancies
├── README.md # This file
├── tailwind.config.js # Customise tailwind
└── tsconfig.json # set up TypeScript
```

To add more items create a markdown file in the src/card/ directory with all the front matter as defined
in the existing files.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more about Astro?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
