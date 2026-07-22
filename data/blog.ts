export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-nextjs-apps',
    title: 'Building Scalable Next.js Apps',
    date: 'Jul 15, 2026',
    excerpt: 'Patterns and practices for scaling Next.js applications — from server components and caching strategies to database optimization and deployment pipelines.',
    tags: ['Next.js', 'Architecture', 'Performance'],
    content: `
      <p>Next.js has become the default choice for many teams building production React applications. But as your application grows, the initial simplicity can hide architectural decisions that determine whether your app stays fast or gradually degrades under load.</p>
      <h2>1. Embrace Server Components Early</h2>
      <p>React Server Components (RSC) allow you to render components on the server without sending JavaScript to the client. This reduces bundle size and improves Time to Interactive (TTI).</p>
      <h2>2. Cache Aggressively, Invalidate Intentionally</h2>
      <p>Next.js provides multiple caching layers: fetch caching, route segment cache, full route cache, and client-side router cache. The key is understanding what you're caching and for how long.</p>
      <h2>3. Optimize Database Access</h2>
      <p>A scalable Next.js app is only as fast as its database queries. Use Prisma or your ORM's query optimization features.</p>
      <h2>4. Deploy Close to Your Users</h2>
      <p>Vercel Edge Functions and Middleware let you run logic at the edge, reducing latency for global users.</p>
      <h2>5. Monitor and Measure</h2>
      <p>Use Next.js built-in analytics, Lighthouse CI in your pipeline, and APM tools like Datadog or New Relic.</p>
    `,
  },
  {
    slug: 'docker-for-beginners',
    title: 'Docker for Beginners',
    date: 'Jun 28, 2026',
    excerpt: 'A practical guide to containerization — Docker images, volumes, networking, and Compose for local development and production deployments.',
    tags: ['DevOps', 'Containers', 'Deployment'],
    content: `
      <p>If you've ever heard "it works on my machine," you already understand why Docker exists. Containers package your application and its dependencies into a single unit that runs consistently across development, staging, and production.</p>
      <h2>What is a Container?</h2>
      <p>A container is a lightweight, standalone, executable package that includes everything needed to run a piece of software.</p>
      <h2>Core Concepts</h2>
      <p><strong>Images</strong> are read-only templates. <strong>Containers</strong> are running instances of images.</p>
      <h2>A Simple Dockerfile</h2>
      <pre><code>FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
      <h2>Volumes and Networks</h2>
      <p>Volumes persist data between container restarts. Networks allow containers to communicate.</p>
    `,
  },
  {
    slug: 'why-every-developer-should-learn-linux',
    title: 'Why Every Developer Should Learn Linux',
    date: 'Jun 10, 2026',
    excerpt: "Linux isn't just for sysadmins. From shell productivity to understanding how the web runs, here's why Linux literacy makes you a better engineer.",
    tags: ['Linux', 'Productivity', 'Systems'],
    content: `
      <p>Linux powers the internet. From the servers hosting your applications to the containers running your microservices, understanding Linux is no longer optional for professional developers — it's essential.</p>
      <h2>1. The Web Runs on Linux</h2>
      <p>Over 90% of cloud servers run Linux. When you deploy to AWS, DigitalOcean, or Vercel, you're deploying to Linux.</p>
      <h2>2. Shell Productivity</h2>
      <p>The Unix philosophy — small tools that do one thing well — is incredibly powerful.</p>
      <h2>3. Understanding How Software Runs</h2>
      <p>When you understand Linux, you understand context switching, memory management, file descriptors, and process signals.</p>
    `,
  },
  {
    slug: 'how-i-built-mtaani-gas',
    title: 'How I Built Mtaani Gas',
    date: 'May 22, 2026',
    excerpt: "A behind-the-scenes look at building a real-time LPG marketplace — architecture decisions, challenges with location-based services, and lessons from deploying on AWS.",
    tags: ['Next.js', 'PostgreSQL', 'AWS', 'Case Study'],
    content: `
      <p>Mtaani Gas is a digital marketplace connecting households with nearby LPG suppliers. Building it required solving real-world problems — location-based discovery, real-time order tracking, and managing two distinct user types on a single platform.</p>
      <h2>The Problem</h2>
      <p>Most households in Kenya still order gas through phone calls and word-of-mouth. Suppliers struggle with visibility, and customers struggle with availability.</p>
      <h2>Architecture Decisions</h2>
      <p>We chose Next.js for the frontend and API routes to keep the stack unified. PostgreSQL with Prisma gave us type-safe database access.</p>
      <h2>Location-Based Discovery</h2>
      <p>The core feature was finding nearby suppliers. We integrated Google Maps API for geocoding and distance calculations. We solved this with geospatial indexing in PostgreSQL using PostGIS.</p>
    `,
  },
  {
    slug: 'lessons-from-building-business-systems',
    title: 'Lessons From Building Business Systems',
    date: 'May 5, 2026',
    excerpt: 'Key takeaways from building enterprise and business management systems — handling complex workflows, user permissions, and maintaining code quality at scale.',
    tags: ['Enterprise', 'Architecture', 'Best Practices'],
    content: `
      <p>Building business management systems is fundamentally different from building consumer apps. Users have specific roles, workflows are rigid, and data integrity is non-negotiable.</p>
      <h2>1. Model the Domain First</h2>
      <p>Before writing a single line of code, understand the business domain. Talk to users, document workflows, and identify entities and relationships.</p>
      <h2>2. Permissions Are Not an Afterthought</h2>
      <p>Enterprise systems have complex permission models: roles, permissions, resource-level access, and field-level security.</p>
      <h2>3. Audit Everything</h2>
      <p>Business systems need audit trails. Who created this record? Who approved it? When was it modified?</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
