export interface Project {
  slug: string
  title: string
  client: string
  year: string
  status: "Live" | "Shipped" | "NDA" | "Discontinued"
  category: "Banking" | "Fintech" | "Mobile" | "Web"
  location: string
  description: string
  highlights: string[]
  stack: string[]
  url?: string
  ios?: string
  android?: string
  accentColor: "lime" | "pink" | "cyan" | "orange" | "blue"
}

export const projects: Project[] = [
  {
    slug: "autoloan-tesla",
    title: "AutoLoan — Tesla Project",
    client: "ADCB × Tesla UAE",
    year: "2025",
    status: "Live",
    category: "Banking",
    location: "Abu Dhabi",
    description: "Built the ADCB AutoLoan platform in collaboration with Tesla UAE for automated loan initiation and document verification. Developed from scratch including project setup, environment configuration, and frontend state architecture.",
    highlights: [
      "Built from scratch — initialization, architecture, complete frontend",
      "Integrated EFR and Microblink for digital ID verification",
      "Multi-step loan flow with document upload and real-time status tracking",
      "2 production deployments with zero regression errors"
    ],
    stack: ["React", "React Native Web", "TypeScript", "Redux Toolkit", "Microblink SDK", "EFR SDK", "Jest"],
    url: "https://digitalappsonboarding.adcb.com/autoloan/",
    accentColor: "lime"
  },
  {
    slug: "private-banking",
    title: "Private Banking Onboarding",
    client: "ADCB — Client Connect",
    year: "2025",
    status: "Live",
    category: "Banking",
    location: "Abu Dhabi",
    description: "React Web application for ADCB's Private Banking clients, focusing on seamless onboarding, multi-factor authentication, and Emirates Face Recognition integration.",
    highlights: [
      "Architected reusable UI and service modules for onboarding & verification",
      "Integrated Emirates Face Recognition (EFR) and Microblink ID scanning SDKs",
      "Implemented Azure MFA for multi-factor authentication",
      "7 successful production deployments with CI/CD pipelines"
    ],
    stack: ["React Native Web", "React", "Redux Toolkit", "TypeScript", "Jest", "Azure MFA", "Microblink SDK", "EFR SDK"],
    url: "https://privatebankingonboarding.adcb.com/privatebanking/agent-login/",
    accentColor: "pink"
  },
  {
    slug: "ev-everywhere",
    title: "EV Everywhere",
    client: "Bluwave-ai — Canada",
    year: "2023–2024",
    status: "Shipped",
    category: "Mobile",
    location: "Hyderabad",
    description: "Cross-platform EV management app with Smartcar API integration for vehicle connectivity and telemetry data synchronization.",
    highlights: [
      "Smartcar API integration for vehicle telemetry",
      "Firebase analytics, crash reporting, and push notifications",
      "Module-based unit test suites with RNTL",
      "Available on iOS App Store"
    ],
    stack: ["React Native", "Redux Toolkit", "Smartcar APIs", "Firebase", "Flipper", "TypeScript ES6"],
    ios: "https://apps.apple.com/ca/app/bluwave-ai/id6469681849",
    accentColor: "cyan"
  },
  {
    slug: "bnkd",
    title: "BNKD",
    client: "Fintech — Canada",
    year: "2023",
    status: "Shipped",
    category: "Fintech",
    location: "Hyderabad",
    description: "Fintech mobile app for secure transactions with Stripe payments, Firebase authentication, and Branch.io deep linking.",
    highlights: [
      "Stripe payment integration for in-app transactions",
      "Firebase notifications, analytics, and user authentication",
      "Branch.io deep linking for smooth navigation",
      "Optimized API data flow and reduced latency"
    ],
    stack: ["React Native", "Redux", "Flipper", "TypeScript ES6", "Firebase", "Branch.io", "Stripe"],
    android: "https://play.google.com/store/apps/details?id=com.bnkd.bnkd",
    ios: "https://apps.apple.com/ca/app/bnkd/id6450264745",
    accentColor: "orange"
  },
  {
    slug: "pitstops-petronas",
    title: "PITSTOPS",
    client: "Petronas Digital — Malaysia",
    year: "2022",
    status: "NDA",
    category: "Mobile",
    location: "Kuala Lumpur",
    description: "Enterprise mobile app for Petronas station managers with task management features and optimized state management.",
    highlights: [
      "Task management features for multi-station managers",
      "Refactored Redux state for memory optimization",
      "Improved data persistence and security",
      "Cross-functional Android & iOS deployments"
    ],
    stack: ["React Native", "Redux Toolkit", "TypeScript", "Firebase"],
    android: "https://play.google.com/store/apps/details?id=com.petronas.external.pitstops",
    accentColor: "blue"
  },
  {
    slug: "eukanuba-app",
    title: "Eukanuba Puppy App",
    client: "Mars Petcare",
    year: "2021",
    status: "Shipped",
    category: "Mobile",
    location: "Mumbai",
    description: "Consumer mobile app with PayPal payments, Firebase notifications, deep linking for promotional campaigns and onboarding flows.",
    highlights: [
      "PayPal payment integration",
      "Firebase auth and push notifications",
      "Deep linking and in-app navigation for campaigns",
      "Shared UI libraries across mobile and web"
    ],
    stack: ["React Native", "Redux", "JavaScript ES6", "Firebase", "PayPal SDK"],
    android: "https://play.google.com/store/apps/details?id=com.eukanubapuppy",
    ios: "https://apps.apple.com/us/app/eukanuba-puppy/id1485694763",
    accentColor: "lime"
  },
  {
    slug: "elus",
    title: "ELUS — Employee Learn & Upgrade",
    client: "Internal Platform",
    year: "2022",
    status: "Shipped",
    category: "Web",
    location: "Hyderabad",
    description: "Responsive web platform for employee skill grading and learning management with GraphQL and Stripe payments.",
    highlights: [
      "ReactJS/Next.js with Redux-Saga for async handling",
      "GraphQL and REST APIs for dynamic data fetching",
      "Stripe payments and Firebase authentication",
      "Responsive across all devices"
    ],
    stack: ["ReactJS", "Next.js", "Redux-Saga", "GraphQL", "Firebase", "Stripe"],
    accentColor: "pink"
  },
  {
    slug: "maxion",
    title: "Maxion",
    client: "Internal App",
    year: "2023",
    status: "Discontinued",
    category: "Mobile",
    location: "Hyderabad",
    description: "Internal mobile app using React Native and Redux with Firebase crash analytics and notifications.",
    highlights: [
      "Firebase crash analytics and notifications",
      "Modular architecture with TypeScript",
      "REST API backend integration"
    ],
    stack: ["React Native", "Redux", "TypeScript ES6", "Firebase", "Flipper"],
    accentColor: "orange"
  }
]
