export interface Backend {
  name: string;
  emoji: string;
  color: string;
  description: string;
  features: string[];
  tags: string[];
  stats: string[];
  // DVD-style properties
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  element?: HTMLElement;
  isColliding?: boolean;
}

export const backends: Backend[] = [
  {
    name: 'PocketBase',
    emoji: '📦',
    color: '#0090FF',
    description: 'Один Go файл = весь бекенд. SQLite, realtime, auth - все включено.',
    features: [
      'Single executable file',
      'SQLite database',
      'Admin dashboard included'
    ],
    tags: ['#Go', '#SQLite', '#Portable'],
    stats: ['⭐ 30k+ Stars', '💰 Free', '🌐 pocketbase.io', '🚀 5 min setup'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Supabase',
    emoji: '🐘',
    color: '#3ECF8E',
    description: 'Open-source Firebase з PostgreSQL всередині. Realtime + auth з коробки.',
    features: [
      'PostgreSQL database',
      'Realtime subscriptions',
      'Built-in authentication'
    ],
    tags: ['#OpenSource', '#PostgreSQL', '#Realtime'],
    stats: ['⭐ 60k+ Stars', '💰 Free tier', '🌐 supabase.com', '📦 Self-hosted'],
    // DVD-style position & velocity
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2, // velocity X
    vy: (Math.random() - 0.5) * 2, // velocity Y
    rotation: 0
  },
  {
    name: 'Appwrite',
    emoji: '🏗️',
    color: '#FD366E',
    description: 'Self-hosted Firebase альтернатива. Docker контейнер - і ти володар свого бекенду.',
    features: [
      'Self-hosted solution',
      'Multiple SDKs',
      'Database, auth, storage'
    ],
    tags: ['#Self-hosted', '#Docker', '#Privacy'],
    stats: ['⭐ 40k+ Stars', '💰 Free', '🌐 appwrite.io', '🔒 Full control'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'AWS Amplify',
    emoji: '☁️',
    color: '#FF9900',
    description: 'AWS екосистема для фронтенд девів. Потужно, але складно.',
    features: [
      'Full AWS ecosystem',
      'GraphQL API',
      'Enterprise ready'
    ],
    tags: ['#AWS', '#Enterprise', '#GraphQL'],
    stats: ['⭐ 9k+ Stars', '💰 Pay as go', '🌐 aws.amazon.com', '🏢 Enterprise'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Railway',
    emoji: '🚂',
    color: '#8B5CF6',
    description: 'Deploy будь-чого за 5 хвилин. Git push - і все працює.',
    features: [
      'Instant deployments',
      'Multiple languages',
      'Simple pricing'
    ],
    tags: ['#Deploy', '#Simple', '#Fast'],
    stats: ['⭐ 3k+ Stars', '💰 $5/month', '🌐 railway.app', '⚡ 5 min deploy'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Render',
    emoji: '🎨',
    color: '#6366F1',
    description: 'Heroku, але сучасний і швидший. Web services + databases.',
    features: [
      'Static sites & APIs',
      'PostgreSQL included',
      'Auto SSL & CDN'
    ],
    tags: ['#Modern', '#Fast', '#SSL'],
    stats: ['⭐ Growing', '💰 Free tier', '🌐 render.com', '🌍 Global CDN'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Xata',
    emoji: '🗃️',
    color: '#8B5CF6',
    description: 'PostgreSQL + повнотекстовий пошук з коробки. TypeScript first.',
    features: [
      'PostgreSQL + search',
      'TypeScript SDK',
      'Branching workflows'
    ],
    tags: ['#PostgreSQL', '#Search', '#TypeScript'],
    stats: ['⭐ New', '💰 Free tier', '🌐 xata.io', '🔍 Full-text'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Nhost',
    emoji: '🎯',
    color: '#0052CC',
    description: 'Firebase для GraphQL lovers. Hasura + PostgreSQL + auth.',
    features: [
      'GraphQL API',
      'PostgreSQL + Hasura',
      'Authentication built-in'
    ],
    tags: ['#GraphQL', '#Hasura', '#PostgreSQL'],
    stats: ['⭐ 7k+ Stars', '💰 Free tier', '🌐 nhost.io', '📊 GraphQL'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Back4App',
    emoji: '📱',
    color: '#0080FF',
    description: 'Parse Server як сервіс. Mobile-first підхід.',
    features: [
      'Parse Server managed',
      'Mobile SDKs',
      'Low-code backend'
    ],
    tags: ['#Parse', '#Mobile', '#Low-code'],
    stats: ['⭐ Parse based', '💰 Free tier', '🌐 back4app.com', '📱 Mobile first'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Parse',
    emoji: '🔵',
    color: '#169CEE',
    description: 'Open-source mobile backend (Facebook legacy). Self-hosted.',
    features: [
      'Open source',
      'Mobile-first',
      'Self-hosted option'
    ],
    tags: ['#OpenSource', '#Mobile', '#Legacy'],
    stats: ['⭐ 20k+ Stars', '💰 Free', '🌐 parseplatform.org', '🏛️ Proven'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'PlanetScale',
    emoji: '🪐',
    color: '#00D4AA',
    description: 'MySQL як сервіс з branching. Git для бази даних.',
    features: [
      'Database branching',
      'MySQL compatible',
      'Serverless scaling'
    ],
    tags: ['#MySQL', '#Branching', '#Serverless'],
    stats: ['⭐ 15k+ Stars', '💰 Free tier', '🌐 planetscale.com', '🌿 Git-like'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  },
  {
    name: 'Upstash',
    emoji: '⚡',
    color: '#FF6B35',
    description: 'Serverless Redis + Kafka. Pay тільки за використання.',
    features: [
      'Serverless Redis',
      'Kafka streams',
      'Edge computing'
    ],
    tags: ['#Redis', '#Kafka', '#Serverless'],
    stats: ['⭐ 10k+ Stars', '💰 Pay-per-use', '🌐 upstash.com', '⚡ Ultra fast'],
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight - 100 : 800),
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    rotation: 0
  }
];

export const COLLISION_INTERVAL = 3000; // 3 секунди для швидшого переключення
export const LOGO_SIZE = 70;
