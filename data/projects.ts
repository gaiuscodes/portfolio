export interface Technology {
  name: string;
}

export interface TechCategory {
  frontend?: Technology[];
  backend?: Technology[];
  database?: Technology[];
  authentication?: Technology[];
  cloud?: Technology[];
  integrations?: Technology[];
  devops?: Technology[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  technologies: TechCategory;
  features: string[];
  gallery: string[];
  github: string;
  demo: string;
  caseStudy: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'njiani',
    title: 'Njiani',
    category: 'Transport',
    description: 'Building more reliable last-mile delivery systems in Kenya. A logistics platform focused on real-time tracking, verified rider networks, and delivery reliability for businesses and customers across towns.',
    image: '/images/njianiz.png',
    metric: '99.9%',
    metricLabel: 'System Uptime',
    technologies: {
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'MongoDB' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'Google Maps' }, { name: 'WhatsApp API' }],
      devops: [{ name: 'Docker' }, { name: 'Kubernetes' }],
    },
    features: [
      'Real-time delivery tracking',
      'Verified rider network',
      'Business and customer dashboards',
      'Payment integration',
      'Route optimization',
      'Multi-town expansion support',
    ],
    gallery: ['/images/njianiz.png'],
    github: 'https://github.com/gaiuscodes',
    demo: 'https://njiani-application.vercel.app/',
    caseStudy: '#',
  },
  {
    id: '2',
    slug: 'kitali-connect',
    title: 'Kitali Connect',
    category: 'Communication',
    description: 'Enterprise WhatsApp Team Inbox — A multi-agent WhatsApp inbox with real-time messaging, authentication, message synchronization, and team collaboration. Designed for teams to manage customer conversations at scale.',
    image: '/images/kitali konekt.png',
    metric: '22K+',
    metricLabel: 'Messages Processed',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'React' }, { name: 'TypeScript' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'Redis' }],
      authentication: [{ name: 'JWT' }, { name: 'NextAuth' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'WhatsApp Business API' }, { name: 'WebSockets' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Multi-agent inbox management',
      'Real-time message sync',
      'Team collaboration tools',
      'Message history and search',
      'WhatsApp Business API integration',
      'Authentication and role management',
    ],
    gallery: ['/images/kitali konekt.png'],
    github: 'https://github.com/gaiuscodes',
    demo: 'https://connect.kitalisuppliersltd.com/login',
    caseStudy: '#',
  },
  {
    id: '3',
    slug: 'undika',
    title: 'Undika',
    category: 'Agency',
    description: 'Corporate website and digital platform for an IT company offering web development, systems development, and IT equipment sales. Includes products, services, SEO optimization, responsive design, and a CMS.',
    image: '/images/undika.png',
    metric: '120+',
    metricLabel: 'Corporate Clients',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'Prisma' }],
      cloud: [{ name: 'AWS' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Product and service showcase',
      'CMS for content management',
      'SEO optimization',
      'Responsive design',
      'Corporate branding',
      'Contact and inquiry forms',
    ],
    gallery: ['/images/undika.png'],
    github: 'https://github.com/gaiuscodes',
    demo: '#',
    caseStudy: '#',
  },
  {
    id: '4',
    slug: 'matsafy',
    title: 'MatSafy',
    category: 'Marketplace',
    description: 'A smart waste management platform that connects residents with waste collection services while improving environmental sustainability. Features collection scheduling, customer management, payment integration, admin dashboard, and analytics.',
    image: '/images/matsafy.png',
    metric: '15+',
    metricLabel: 'Years Experience',
    technologies: {
      frontend: [{ name: 'React' }, { name: 'JavaScript' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }],
      cloud: [{ name: 'AWS' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Collection scheduling',
      'Customer management',
      'Payment integration',
      'Admin analytics dashboard',
      'Service zone management',
      'Real-time notifications',
    ],
    gallery: ['/images/matsafy.png'],
    github: 'https://github.com/gaiuscodes',
    demo: '#',
    caseStudy: '#',
  },
  {
    id: '5',
    slug: 'mtaani-gas',
    title: 'Mtaani Gas',
    category: 'Marketplace',
    description: 'A digital marketplace connecting households with nearby gas suppliers for quick and reliable LPG ordering. Features location-based supplier discovery, order tracking, mobile responsive design, customer dashboard, and supplier dashboard.',
    image: '/images/mtaani-gas.png',
    metric: '2,500+',
    metricLabel: 'Expatriates Supported',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'TypeScript' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'Prisma' }],
      authentication: [{ name: 'NextAuth' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'Google Maps' }, { name: 'M-Pesa' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Location-based supplier discovery',
      'Real-time order tracking',
      'Customer and supplier dashboards',
      'Mobile responsive design',
      'Payment integration',
      'Review and rating system',
    ],
    gallery: ['/images/mtaani-gas.png'],
    github: 'https://github.com/gaiuscodes',
    demo: '#',
    caseStudy: '#',
  },
  {
    id: '6',
    slug: 'landwatch',
    title: 'LandWatch',
    category: 'GIS',
    description: 'GIS-powered real estate platform with property listings, advanced search filters, and secure authentication for buyers and agents. Built with modern mapping and location-based features.',
    image: '/images/landwatch.png',
    metric: '500+',
    metricLabel: 'Properties Listed',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Leaflet' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'PostGIS' }],
      authentication: [{ name: 'JWT' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'Google Maps' }],
      devops: [{ name: 'Docker' }, { name: 'Terraform' }],
    },
    features: [
      'GIS map integration',
      'Advanced property search',
      'Secure user authentication',
      'Agent and buyer dashboards',
      'Property listing management',
      'Image gallery and virtual tours',
    ],
    gallery: ['/images/landwatch.png'],
    github: 'https://github.com/gaiuscodes',
    demo: '#',
    caseStudy: '#',
  },
  {
    id: '7',
    slug: 'kingspride',
    title: 'KingsPride',
    category: 'E-Commerce',
    description: 'A full-featured e-commerce platform for KingsPride with product catalog, shopping cart, checkout flow, payment integration, and admin dashboard for managing products and orders.',
    image: '/images/kingspride.png',
    metric: '100+',
    metricLabel: 'Products Listed',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'Prisma' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'Stripe' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Product catalog and search',
      'Shopping cart and checkout',
      'Payment integration',
      'Admin dashboard',
      'Order management',
      'Responsive design',
    ],
    gallery: ['/images/kingspride.png'],
    github: 'https://github.com/gaiuscodes',
    demo: 'https://kingsprideapp.netlify.app/',
    caseStudy: '#',
  },
  {
    id: '8',
    slug: 'bikesafi',
    title: 'BikeSafi',
    category: 'E-Commerce',
    description: 'A dedicated bike selling e-commerce platform with product listings, advanced filters, shopping cart, secure checkout, and seller dashboard for inventory management.',
    image: '/images/bikesafi.png',
    metric: '50+',
    metricLabel: 'Bike Models',
    technologies: {
      frontend: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }, { name: 'Prisma' }],
      cloud: [{ name: 'AWS' }],
      integrations: [{ name: 'M-Pesa' }],
      devops: [{ name: 'Docker' }],
    },
    features: [
      'Bike catalog with filters',
      'Shopping cart and checkout',
      'Payment integration',
      'Seller dashboard',
      'Inventory management',
      'Mobile responsive design',
    ],
    gallery: ['/images/bikesafi.png'],
    github: 'https://github.com/gaiuscodes',
    demo: 'https://bikesafi.netlify.app/',
    caseStudy: '#',
  },
  {
    id: '9',
    slug: 'visavibeke',
    title: 'VisaVibeKE',
    category: 'Corporate',
    description: 'Corporate website and digital platform for VisaVibeKE, a leading immigration consultancy in Kenya. Features comprehensive service listings, team profiles, client testimonials, contact forms, and professional consultation booking.',
    image: '/images/visavibe.png',
    metric: '99.9%',
    metricLabel: 'Success Rate',
    technologies: {
      frontend: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
      backend: [{ name: 'Node.js' }, { name: 'Express' }],
      database: [{ name: 'PostgreSQL' }],
      cloud: [{ name: 'Netlify' }],
    },
    features: [
      'Service listings and descriptions',
      'Team profiles and bios',
      'Client testimonials',
      'Contact and inquiry forms',
      'Consultation booking',
      'Professional corporate design',
    ],
    gallery: ['/images/visavibe.png'],
    github: 'https://github.com/gaiuscodes',
    demo: 'https://visavibeke.netlify.app/',
    caseStudy: '#',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
