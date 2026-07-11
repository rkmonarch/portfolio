export const site = {
  name: "Rahul Kulkarni",
  role: "Founder, ClearSign",
  email: "rkweb3.00@gmail.com",
  url: "https://www.rkmonarch.com",
  description:
    "I build AI products, explain complex systems, and write about what AI-first software should feel like.",
};

export const socials = [
  { label: "X", href: "https://x.com/0xrahul" },
  { label: "GitHub", href: "https://github.com/rkmonarch" },
  { label: "LinkedIn", href: "https://linkedin.com/in/0xrahul" },
  { label: "Medium", href: "https://medium.com/@rkmonarch" },
  { label: "Email", href: "mailto:rkweb3.00@gmail.com" },
];

export const currently = {
  items: [
    "Building ClearSign",
    "Writing about AI memory",
    "Learning graph databases",
  ],
  location: "Vadodara, India",
};

export interface Project {
  name: string;
  tagline: string;
  story: string;
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "ClearSign",
    tagline: "Making AI agents safe enough to move money.",
    story:
      "AI agents can already move money, but nothing checks if a transaction matches what you actually asked for. ClearSign reads every transaction and explains it in plain language before it gets signed. If something breaks your rules, it gets blocked. Live on Solana mainnet.",
    href: "https://clearsign.fun",
    featured: true,
  },
  {
    name: "Fidel",
    tagline: "Two-factor codes that never touch a server.",
    story:
      "Every popular authenticator asks you to trust someone's cloud with the keys to your accounts. Fidel keeps your 2FA secrets on your device, encrypted, and syncs them between your devices directly. The right amount of infrastructure for 2FA is zero.",
    href: "https://github.com/rkmonarch/fidel",
    featured: true,
  },
  {
    name: "Shuffles",
    tagline: "Crypto trading that fits in your pocket.",
    story:
      "Most trading apps assume a desktop and a power user. Shuffles routes trades across seven networks behind one interface, so you can find a token, swap it, and settle with one hand on your phone.",
    href: "https://shuffles.xyz",
    featured: true,
  },
  {
    name: "SLOGAN",
    tagline: "Private payments on a public ledger.",
    story:
      "Every Solana payment is public by default. SLOGAN makes payments private with stealth addresses, and it ships as an SDK any app can use. Privacy should be a library, not a separate chain.",
    href: "https://www.npmjs.com/package/@rkmonarch/slogan",
  },
  {
    name: "Leo",
    tagline: "Describe an agent. Deploy it in two minutes.",
    story:
      "Building an on-chain agent still means a week of setup before you get to the interesting part. Leo turns a plain English description into a deployed Solana agent. No scaffolding, no boilerplate.",
    href: "https://leo-lemon.vercel.app",
  },
  {
    name: "OnlyBlinks",
    tagline: "One registry for every Solana blink.",
    story:
      "Blinks were multiplying with no index, so I built one. Over 300 are registered now. It gives wallets and clients a single place to find and resolve them. Discovery is infrastructure too.",
    href: "https://onlyblinks.com",
  },
  {
    name: "HashPot",
    tagline: "A game played against Bitcoin itself.",
    story:
      "Block hashes are public, verifiable randomness. HashPot is the simplest honest game you can build on top of them. Guess the last three characters of the next block hash, and the block itself settles the pot.",
    href: "https://hashpot.fun",
  },
  {
    name: "OWS React Native",
    tagline: "Autonomous payments with guardrails.",
    story:
      "If agents are going to pay for their own API calls, the spending rules have to live in the wallet, not in the prompt. This library puts policy-checked payments in any React Native app.",
    href: "https://github.com/rkmonarch/ows-react-native",
  },
  {
    name: "Blinks Mobile SDK",
    tagline: "Solana blinks, rendered natively.",
    story:
      "Blinks were built for the web. This SDK turns any blink URL into a native, signable screen inside a mobile app. No webview required.",
    href: "https://www.npmjs.com/package/blinks-mobile-sdk",
  },
  {
    name: "Greg",
    tagline: "A trading agent that never sees your keys.",
    story:
      "The hard problem in AI trading is not the strategy, it is the trust boundary. Greg plans trades with an LLM but signs everything locally. The model proposes, the wallet decides.",
    href: "https://github.com/rkmonarch/greg-ows",
  },
];

export interface Essay {
  title: string;
  hook: string;
  href?: string; // add the URL when the essay is published
  date?: string;
  source?: "Medium" | "X";
  featured?: boolean;
}

// In progress, shown as notebook entries until published.
export const essaysInProgress: Essay[] = [
  {
    title: "The AI Stack Is Quietly Changing",
    hook: "The interesting shifts are not happening in the models. They are happening in everything wrapped around them.",
  },
  {
    title: "The Future Doesn't Have Apps",
    hook: "When agents do the operating, the interface stops being the product. What software looks like after the app.",
  },
];

export const essays: Essay[] = [
  {
    title: "Context Is Becoming Infrastructure",
    hook: "Prompts were the app layer. Context is turning into the platform layer, and it is starting to look like a database problem. Why context management will separate AI products as models become interchangeable.",
    href: "https://medium.com/@rkmonarch/context-is-becoming-infrastructure-4518dfba382c",
    date: "July 2026",
    source: "Medium",
    featured: true,
  },
  {
    title: "AI Memory as the Real Moat",
    hook: "For two years everyone asked which model is smartest. The real question is becoming who remembers you best, and that is much harder to switch away from.",
    href: "https://x.com/0xrahul/status/2075491082260078775",
    date: "July 2026",
    source: "X",
    featured: true,
  },
  {
    title: "Why Solana's New Subscriptions Program Matters",
    hook: "SPL delegation allows one delegate per token account, which quietly made recurring payments impossible. The new PDA model fixes that for SaaS, memberships, and AI agents.",
    href: "https://x.com/0xrahul/status/2074738136824066345",
    date: "July 2026",
    source: "X",
  },
  {
    title: "What Actually Makes GUM Feel Different",
    hook: "The best cross-chain UX makes the chains disappear while staying easy to inspect. Notes from the beta, and what really happens under the hood.",
    href: "https://x.com/0xrahul/status/2074467721975312616",
    date: "July 2026",
    source: "X",
  },
  {
    title: "How Subscriptions Fixed SPL Delegation",
    hook: "A step-by-step guide to delegated USDC approvals that make recurring billing work without holding user keys.",
    href: "https://medium.com/@rkmonarch/how-to-add-recurring-on-chain-subscriptions-to-your-solana-app-91142918f613",
    date: "June 2026",
    source: "Medium",
  },
  {
    title: "The Future of Stocks Might Start With SpaceX on Solana",
    hook: "Tokenized private equity is quietly becoming real. What SpaceX shares on Solana suggest about where markets go next.",
    href: "https://medium.com/@rkmonarch/the-future-of-stocks-might-start-with-spacex-on-solana-69b2afffb662",
    date: "June 2026",
    source: "Medium",
  },
  {
    title: "Why Most Solana DEXs Don't Use On-Chain Orderbooks",
    hook: "It is not a design choice. It is account locking, compute limits, and the transaction model. Why AMMs win on Solana and how perps actually work.",
    href: "https://x.com/0xrahul/status/2007103800750866479",
    date: "January 2026",
    source: "X",
    featured: true,
  },
  {
    title: "From Probability to Determinism",
    hook: "Solana's transaction pipeline was built to be fast, not predictable. The new execution stack is changing which of those wins.",
    href: "https://medium.com/@rkmonarch/from-probability-to-determinism-the-new-transaction-execution-stack-on-solana-48f4146648a9",
    date: "December 2025",
    source: "Medium",
    featured: true,
  },
  {
    title: "Why Compute Units Matter on Solana",
    hook: "Every failed transaction has a budget story behind it. What compute units actually meter, and why they decide whether you land.",
    href: "https://medium.com/@rkmonarch/why-compute-units-matter-on-solana-255930a30e8a",
    date: "November 2025",
    source: "Medium",
  },
  {
    title: "How DA, Sequencers, and Provers Fit Together",
    hook: "EigenDA and optimistic rollups explained as one system. Who orders transactions, who stores the data, who watches, and what happens when someone lies.",
    href: "https://x.com/0xrahul/status/1873962885199896712",
    date: "December 2024",
    source: "X",
  },
  {
    title: "Is On-Chain Money Real?",
    hook: "From Bitcoin's genesis block to global settlement. What it takes for digital money to earn trust.",
    href: "https://medium.com/@rkmonarch/is-on-chain-money-real-a-journey-from-bitcoins-inception-to-global-adoption-333b9bd7c299",
    date: "October 2024",
    source: "Medium",
  },
  {
    title: "Solana Program Security: Preventing Exploits",
    hook: "Most exploits reuse the same handful of mistakes. A field guide to the checks that stop them.",
    href: "https://medium.com/@rkmonarch/solana-program-security-best-practices-to-prevent-exploits-f88b4a427bce",
    date: "August 2024",
    source: "Medium",
  },
  {
    title: "Building a Solana Transaction Simulation Tool",
    hook: "Simulation is the difference between guessing and knowing. Handling both legacy and versioned transactions.",
    href: "https://medium.com/@rkmonarch/building-a-custom-solana-transaction-simulation-tool-handling-legacy-and-versioned-transactions-f97b27592868",
    date: "August 2024",
    source: "Medium",
  },
  {
    title: "A Beginner's Guide to Solana Blinks",
    hook: "Blinks turn any URL into a transaction. What they are, how they resolve, and why they matter for distribution.",
    href: "https://medium.com/@rkmonarch/a-beginners-guide-to-solana-blinks-2ad3b4a24cb8",
    date: "July 2024",
    source: "Medium",
  },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  story: string;
  metrics?: string;
  href?: string;
}

export const experience: Role[] = [
  {
    company: "ClearSign",
    title: "Founder",
    period: "Since 2026",
    story:
      "Building the layer that lets AI agents move money safely. Policy checks and plain language verification for Solana treasuries, live on mainnet.",
    href: "https://clearsign.fun",
  },
  {
    company: "SOON SVM",
    title: "DevRel Lead & AI Ecosystem Architect",
    period: "2024 to 2026",
    story:
      "Helped more than fifty teams ship to mainnet and ran the internet capital markets push on decoupled SVM infrastructure. Wrote twenty-five deep dives along the way.",
    metrics: "60M+ transactions and $300M+ in volume across supported projects.",
    href: "https://x.com/soon_svm",
  },
  {
    company: "Solana Labs",
    title: "Solana Fellow",
    period: "2024",
    story:
      "Picked for the Solana Foundation fellowship. Built CLI tooling and SPL token libraries, the unglamorous pieces every developer touches.",
    href: "https://x.com/solana",
  },
  {
    company: "Fetcch",
    title: "Developer Relations Engineer",
    period: "2023 to 2024",
    story:
      "Built a cross-chain bridge on Circle's rails, a consumer payments app, and a TypeScript SDK with integrations across GitHub, Spotify, Telegram, and Discord.",
    href: "https://x.com/FetcchX",
  },
  {
    company: "iCeipts",
    title: "Software Engineer",
    period: "2022 to 2023",
    story:
      "Shipped a scan and pay app, a ride booking app, and a supply chain ERP. Learned to build for people who never read documentation.",
    href: "https://iceipts.com",
  },
];

export interface OpenSourceItem {
  name: string;
  description: string;
  href: string;
}

export const openSource: OpenSourceItem[] = [
  {
    name: "ows-react-native",
    description:
      "Policy-checked autonomous payments on Solana for React Native, built on the Open Wallet Standard.",
    href: "https://github.com/rkmonarch/ows-react-native",
  },
  {
    name: "@rkmonarch/slogan",
    description:
      "Privacy SDK for Solana: stealth addresses, payment discovery, claim flows, and mixing primitives.",
    href: "https://www.npmjs.com/package/@rkmonarch/slogan",
  },
  {
    name: "blinks-mobile-sdk",
    description:
      "React Native SDK with custom parsers and decoders for rendering Solana blinks natively.",
    href: "https://www.npmjs.com/package/blinks-mobile-sdk",
  },
  {
    name: "greg-ows",
    description:
      "An AI trading agent for Jupiter Lend that signs locally. Keys never leave the device.",
    href: "https://github.com/rkmonarch/greg-ows",
  },
];

export const recognition = [
  "Solana Foundation Fellow, where I built CLI tooling and SPL token libraries",
  "25+ hackathon wins across Solana, Ethereum, Aptos, and AI x crypto tracks",
  "Spoke at 30+ events, including ETH KL, DogeCon, and Bangkok Innovators Hub",
  "Superteam member, writing docs and content for new Solana developers",
];
