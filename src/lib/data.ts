export const site = {
  name: "Rahul Kulkarni",
  role: "Founder, ClearSign",
  email: "rkweb3.00@gmail.com",
  url: "https://www.rkmonarch.com",
  description:
    "I build AI systems, explain complex technology, and write about what AI-first software should feel like.",
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
      "Agents can already move money — nothing checks whether a transaction matches what you actually asked for. ClearSign is a verification layer that explains every transaction in plain language before it's signed, and blocks the ones that break your rules. Live on Solana mainnet.",
    href: "https://clearsign.fun",
    featured: true,
  },
  {
    name: "Fidel",
    tagline: "Two-factor codes that never touch a server.",
    story:
      "Every mainstream authenticator asks you to trust someone's cloud with the keys to your accounts. Fidel keeps your 2FA secrets on your device, encrypted, and syncs them peer-to-peer. The right amount of infrastructure for 2FA is zero.",
    href: "https://github.com/rkmonarch/fidel",
    featured: true,
  },
  {
    name: "Shuffles",
    tagline: "Crypto trading that fits in your pocket.",
    story:
      "Trading interfaces assume a desktop and a power user. Shuffles routes trades across seven networks behind one interface, so the whole flow — discover, swap, settle — works one-handed on a phone.",
    href: "https://shuffles.xyz",
    featured: true,
  },
  {
    name: "SLOGAN",
    tagline: "Private payments on a public ledger.",
    story:
      "Every Solana payment is public by default. SLOGAN makes them private with stealth addresses, packaged as an SDK any app can adopt — because privacy should be a library, not a separate chain.",
    href: "https://www.npmjs.com/package/@rkmonarch/slogan",
  },
  {
    name: "Leo",
    tagline: "Describe an agent. Deploy it in two minutes.",
    story:
      "Building an on-chain agent still means a week of setup before the first interesting decision. Leo turns a plain-English description into a deployed Solana agent — no scaffolding, no boilerplate.",
    href: "https://leo-lemon.vercel.app",
  },
  {
    name: "OnlyBlinks",
    tagline: "One registry for every Solana blink.",
    story:
      "Blinks were multiplying with no index, so I built one. Over 300 registered — a single place for wallets and clients to find and resolve them. Discovery is infrastructure too.",
    href: "https://onlyblinks.com",
  },
  {
    name: "HashPot",
    tagline: "A game played against Bitcoin itself.",
    story:
      "Block hashes are public, verifiable randomness. HashPot is the smallest honest game you can build on top of them: guess the last three characters of the next block hash, and the block itself settles the pot.",
    href: "https://hashpot.fun",
  },
  {
    name: "OWS React Native",
    tagline: "Autonomous payments with guardrails.",
    story:
      "If agents are going to pay for their own API calls, the spending rules have to live in the wallet, not in the prompt. This library puts policy-gated payments in any React Native app.",
    href: "https://github.com/rkmonarch/ows-react-native",
  },
  {
    name: "Blinks Mobile SDK",
    tagline: "Solana blinks, rendered natively.",
    story:
      "Blinks were built for the web. This SDK turns any blink URL into a native, signable UI inside a mobile app — no webview required.",
    href: "https://www.npmjs.com/package/blinks-mobile-sdk",
  },
  {
    name: "Greg",
    tagline: "A trading agent that never sees your keys.",
    story:
      "The interesting problem in AI trading isn't the strategy, it's the trust boundary. Greg plans trades with an LLM but signs everything locally — the model proposes, the wallet disposes.",
    href: "https://github.com/rkmonarch/greg-ows",
  },
];

export interface Essay {
  title: string;
  hook: string;
  href?: string; // add the URL when the essay is published
  date?: string;
  featured?: boolean;
}

// In progress — shown as notebook entries until published.
export const essaysInProgress: Essay[] = [
  {
    title: "Why Everyone Is Building Memory",
    hook: "Every AI company is converging on the same problem: models forget. What memory actually is, and why it's harder than a vector database.",
    featured: true,
  },
  {
    title: "Context Is Becoming Infrastructure",
    hook: "Prompts were the app layer. Context is turning into the platform layer — and it's starting to look like a database problem.",
    featured: true,
  },
  {
    title: "The AI Stack Is Quietly Changing",
    hook: "The interesting shifts aren't happening in the models. They're happening in everything wrapped around them.",
  },
  {
    title: "The Future Doesn't Have Apps",
    hook: "When agents do the operating, the interface stops being the product. What software looks like after the app.",
  },
];

export const essays: Essay[] = [
  {
    title: "From Probability to Determinism",
    hook: "Solana's transaction pipeline was built to be fast, not predictable. The new execution stack is changing which of those wins.",
    href: "https://medium.com/@rkmonarch/from-probability-to-determinism-the-new-transaction-execution-stack-on-solana-48f4146648a9",
    date: "December 2025",
    featured: true,
  },
  {
    title: "How Subscriptions Fixed SPL Delegation",
    hook: "SPL delegation was designed for a different era. How delegated USDC approvals make recurring billing work without holding user keys.",
    href: "https://medium.com/@rkmonarch/how-to-add-recurring-on-chain-subscriptions-to-your-solana-app-91142918f613",
    date: "June 2026",
    featured: true,
  },
  {
    title: "Why Compute Units Matter on Solana",
    hook: "Every failed transaction has a budget story behind it. What compute units actually meter, and why they decide whether you land.",
    href: "https://medium.com/@rkmonarch/why-compute-units-matter-on-solana-255930a30e8a",
    date: "November 2025",
  },
  {
    title: "The Future of Stocks Might Start With SpaceX on Solana",
    hook: "Tokenized private equity is quietly becoming real. What SpaceX shares on Solana suggest about where markets go next.",
    href: "https://medium.com/@rkmonarch/the-future-of-stocks-might-start-with-spacex-on-solana-69b2afffb662",
    date: "June 2026",
  },
  {
    title: "Solana Program Security: Preventing Exploits",
    hook: "Most exploits reuse the same handful of mistakes. A field guide to the checks that stop them.",
    href: "https://medium.com/@rkmonarch/solana-program-security-best-practices-to-prevent-exploits-f88b4a427bce",
    date: "August 2024",
  },
  {
    title: "Is On-Chain Money Real?",
    hook: "From Bitcoin's genesis block to global settlement — what it takes for digital money to earn trust.",
    href: "https://medium.com/@rkmonarch/is-on-chain-money-real-a-journey-from-bitcoins-inception-to-global-adoption-333b9bd7c299",
    date: "October 2024",
  },
  {
    title: "Building a Solana Transaction Simulation Tool",
    hook: "Simulation is the difference between guessing and knowing. Handling both legacy and versioned transactions.",
    href: "https://medium.com/@rkmonarch/building-a-custom-solana-transaction-simulation-tool-handling-legacy-and-versioned-transactions-f97b27592868",
    date: "August 2024",
  },
  {
    title: "A Beginner's Guide to Solana Blinks",
    hook: "Blinks turn any URL into a transaction. What they are, how they resolve, and why they matter for distribution.",
    href: "https://medium.com/@rkmonarch/a-beginners-guide-to-solana-blinks-2ad3b4a24cb8",
    date: "July 2024",
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
    period: "2026 — now",
    story:
      "Building the layer that lets AI agents move money safely — policy-gated signing and plain-language verification for Solana treasuries, live on mainnet.",
    href: "https://clearsign.fun",
  },
  {
    company: "SOON SVM",
    title: "DevRel Lead & AI Ecosystem Architect",
    period: "2024 — 2026",
    story:
      "Helped fifty-plus teams ship to mainnet and ran the internet capital markets push on decoupled SVM infrastructure. Wrote twenty-five deep dives along the way.",
    metrics: "60M+ transactions and $300M+ in volume across supported projects.",
    href: "https://x.com/soon_svm",
  },
  {
    company: "Solana Labs",
    title: "Solana Fellow",
    period: "2024",
    story:
      "Picked for the Solana Foundation fellowship. Built CLI tooling and SPL token libraries — the unglamorous pieces every developer touches.",
    href: "https://x.com/solana",
  },
  {
    company: "Fetcch",
    title: "Developer Relations Engineer",
    period: "2023 — 2024",
    story:
      "Built a cross-chain bridge on Circle's rails, a consumer payments app, and a TypeScript SDK with integrations across GitHub, Spotify, Telegram, and Discord.",
    href: "https://x.com/FetcchX",
  },
  {
    company: "iCeipts",
    title: "Software Engineer",
    period: "2022 — 2023",
    story:
      "Shipped a scan-and-pay app, a ride-booking app, and a supply-chain ERP. Learned to build for people who never read documentation.",
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
      "Policy-gated autonomous payments on Solana for React Native, built on the Open Wallet Standard.",
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
      "An AI trading agent for Jupiter Lend that signs locally — keys never leave the device.",
    href: "https://github.com/rkmonarch/greg-ows",
  },
];

export const recognition = [
  "Solana Foundation Fellow — built CLI tooling and SPL token libraries",
  "25+ hackathon wins across Solana, Ethereum, Aptos, and AI × crypto tracks",
  "Spoke at 30+ events, including ETH KL, DogeCon, and Bangkok Innovators Hub",
  "Superteam member — wrote docs and content for new Solana developers",
];
