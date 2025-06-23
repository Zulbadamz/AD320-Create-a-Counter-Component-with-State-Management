This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This React project demonstrates the use of state management using the useState hook. It highlights how React treats state updates, including batching and functional updates.

 Features
Increment: Increases the count by 1 immediately.

Increment After Delay: Increases the count by 1 after a 2-second delay.

Increment Twice: Calls setCount(count + 1) twice to illustrate batching (may only increment by 1).

Correct Increment Twice: Uses the updater function to increment accurately by 2.

Design Decisions
The useState hook is used to manage the count value.

The component is marked as a Client Component with "use client" to enable the use of state in Next.js App Router.

Each button demonstrates a different aspect of state behavior:

Increment: Direct state update.

Increment After Delay: Asynchronous update after timeout.

Increment Twice: Demonstrates React batching.

Correct Increment Twice: Fixes batching issue using functional updates.

How to Run the Project
Clone the repository:

git clone https://github.com/Zulbadamz/AD320-Create-a-Counter-Component-with-State-Management.git
cd AD320-Create-a-Counter-Component-with-State-Management
Install dependencies:
npm install

Run the app:
npm run dev

Open http://localhost:3000 in your browser.

