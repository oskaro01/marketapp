This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





======



imp>> toast and toaster was added later on ,,they were not included in new shadcn component list,, 



======





first install toast dependencies, then check , then add components (toast and toaster)

======




so i can just copy this(shadcn components) and use it?? i dont have to do additional import export anywhere else to make it working?

Yes — you can just copy this whole file into your project (e.g. at components/ui/toast.tsx) and it will work.
But ⚠️ you need to make sure a few supporting things are set up:

✅ What you need besides this file

Dependencies must be installed
Run this once in your project:

npm install @radix-ui/react-toast class-variance-authority lucide-react << this (1)


cn utility function must exist
In shadcn projects, it usually lives in lib/utils.ts.
If you don’t already have it, create lib/utils.ts with:

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

======================================================

npm install @radix-ui/react-toast class-variance-authority lucide-react
 << how do i know if its already been installed?
ChatGPT said:

Great question 👌 because if you install stuff twice you’ll just waste time.
Here’s how you can check if a package is already installed in your project:

🔍 Method 1: Look in package.json

Open the file package.json in the root of your project.

Scroll down to "dependencies" (or "devDependencies").

If you see something like this:

"dependencies": {
  "@radix-ui/react-toast": "^1.1.4",
  "class-variance-authority": "^0.7.0",
  "lucide-react": "^0.312.0"
}


✅ That means it’s installed.

🔍 Method 2: Use npm list

Run this command inside your project folder (C:\Users\Sabit\Desktop\marketapp>):

npm list @radix-ui/react-toast class-variance-authority lucide-react << this (2)


If they are installed → you’ll see their version numbers.

If not installed → you’ll see (empty) or -- (not installed).


