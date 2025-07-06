import type { LucideIcon } from 'lucide-react';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import { Linkedin, Mail, MapPin, Phone, GraduationCap, Lightbulb, Code, Store, FileCode, Palette, PenTool, MonitorSmartphone, Briefcase } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  // { name: 'Education', href: '/#education' }, // Removed
  // { name: 'Experience', href: '/#experience' }, // Removed
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export type Project = {
  id: string;
  name: string;
  tech: string[];
  description: string;
  liveLink: string;
  image: string;
  imageHint: string;
};

export const PROJECTS_DATA: Project[] = [
     {
    id: 'lifeSaving',
    name: 'Life Saving Ambulance',
    tech: ['HTML', 'CSS', 'Next.js', 'Material UI'],
    description:
      'A responsive website built for a medical emergency ambulance service, using Next.js for fast page loads and Material UI for a clean, accessible design. Features include service details, contact forms, and optimized SEO for visibility.',
    liveLink: 'https://www.lifesavingambulance.com/',
    image: '/portfolio-images/life-Saving-ambulance.png',
    imageHint: 'Life Saving Ambulance website',
  },

  {
    id: 'mhGlobal',
    name: 'MHGlobal Technologies',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Corporate website for a technology consulting company, built with vanilla HTML, CSS, and JavaScript. The design emphasizes a professional layout, responsive grids, and smooth transitions for an engaging user experience.',
    liveLink: 'https://mhglobals.com/',
    image: '/portfolio-images/Mh-global.png',
    imageHint: 'MHGlobal website',
  },

 

  // {
  //   id: 'dragDropTaskTracker',
  //   name: 'Drag & Drop Task Tracker',
  //   tech: ['HTML', 'CSS', 'React.js', 'Material UI', 'Bootstrap'],
  //   description:
  //     'A productivity tool built in React.js, featuring drag-and-drop functionality to manage tasks across customizable columns. Utilizes Material UI for consistent design and Bootstrap for responsive layouts, ensuring a seamless user experience on all devices.',
  //   liveLink: 'https://task-tracker-react-app.netlify.app/',
  //   image: '/portfolio-images/glowplex.png',
  //   imageHint: 'Drag & Drop Task Tracker website',
  // },

  // {
  //   id: 'ecommerce-store',
  //   name: 'E-commerce Store',
  //   tech: ['HTML', 'CSS', 'Next.js', 'Shopify', 'Bootstrap'],
  //   description:
  //     'A high-performance e-commerce storefront built with Next.js and integrated with Shopify. Features dynamic product listings, shopping cart functionality, SEO optimization, and a mobile-friendly responsive design powered by Bootstrap.',
  //   liveLink: 'https://demo.vercel.store/',
  //   image: '/portfolio-images/glowplex.png',
  //   imageHint: 'E-commerce Store website',
  // },

  {
    id: 'cryptoDashboard',
    name: 'Crypto Hunter',
    tech: ['HTML', 'CSS', 'Next.js'],
    description:
      'A modern crypto tracking dashboard developed using Next.js, displaying real-time market data fetched from public APIs. Includes coin search, detailed views, and responsive charts for a smooth user experience across devices.',
    liveLink: 'https://cryptohunter.vercel.app/',
    image: '/portfolio-images/Crypto-Hunter.png',
    imageHint: 'Crypto Hunter website',
  },
  {
    id: 'growplex',
    name: 'GrowPlex',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I designed and developed this high-conversion Shopify store for a premium hair serum brand. The layout is clean and modern, built from Figma with pixel-perfect precision. It features smooth animations, fast load times, and a user-focused design to highlight product benefits and boost customer trust. The result is a professional, mobile-optimized experience that supports both education and sales.',
    liveLink: 'https://growplex.co/',
    image: '/portfolio-images/glowplex.png',
    imageHint: 'Growplex website',
  },
  {
    id: 'oluzuswim',
    name: 'OluzuSwim',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I developed this pixel-perfect Shopify store based on Figma designs, ensuring a smooth, user-friendly experience across all devices. The layout is fully responsive, with optimized performance and intuitive navigation to enhance customer engagement and drive conversions.',
    liveLink: 'https://oluzuswim.com/',
    image: '/portfolio-images/Oluzu-Swim.png',
    imageHint: 'OluzuSwim store',
  },
  {
    id: 'rewagrowth',
    name: 'REVA-GROWTH',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I developed this pixel-perfect, responsive Shopify store for a premium hair care brand. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. Leveraging natural ingredients like aloe vera, RevaGrowth offers products that promote healthy hair growth and vitality. The user-friendly design ensures a seamless shopping experience across all devices, enhancing customer engagement and driving conversions.',
    liveLink: 'https://revagrowth.com/',
    image: '/portfolio-images/REVA-GROWTH.png',
    imageHint: 'REVA-GROWTH',
  },
   {
    id: 'mindright',
    name: 'Mindright',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I designed and developed this pixel-perfect Shopify store for a nootropic-infused superfood brand. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases products like protein bars and supplements that support mood, energy, and focus, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://getmindright.com/',
    image: '/portfolio-images/Mindright.png',
    imageHint: 'Mindright Store',
  },
  {
    id: 'nazranaanj',
    name: 'Nazranaanj',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I developed this pixel-perfect, responsive Shopify store for a premier South Asian bridal boutique based in New Jersey. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases a diverse collection of bridal and groom attire, including lehengas, sherwanis, and custom ensembles, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://nazranaanj.com/',
    image: '/portfolio-images/nazranaj.png',
    imageHint: 'Nazranaanj Store',
  },
  {
    id: 'rockher',
    name: 'RockHer',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I developed this pixel-perfect, responsive Shopify store for a luxury jewelry brand specializing in custom engagement rings. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases ethically sourced diamonds and handcrafted rings, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://www.rockher.com/',
    image: '/portfolio-images/jwellery.png',
    imageHint: 'RockHer Store',
  },
];

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: Phone, label: 'Phone', value: '+91 9589482056', href: 'tel:+919630321053' },
  { icon: Mail, label: 'Email', value: 'soneriyar@gmail.com', href: 'mailto:aabhishek.gautamm@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Indore, Madhya Pradesh, India' },
];

export const SOCIAL_LINKS: NavItem[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rupesh-soneriya-b6b262249/', icon: Linkedin },
    {
      name: "WhatsApp",
      href: "https://wa.me/919630321053",
      icon: WhatsappIcon, 
   },  
];

export type Skill = {
  name: string;
  icon: LucideIcon;
  level?: string;
  desc?: string;
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'HTML5',
    icon: Code,
    level: 'Advanced',
    desc: 'Skilled in crafting semantic and accessible HTML5 structures for modern web applications.'
  },
  {
    name: 'CSS3',
    icon: Code,
    level: 'Advanced',
    desc: 'Advanced styling techniques using CSS3 for responsive, aesthetic, and pixel-perfect UI designs.'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: Code,
    level: 'Advanced',
    desc: 'Strong grasp of modern JavaScript to add interactivity and enhance frontend performance.'
  },
  {
    name: 'React.js',
    icon: Code,
    level: 'Advanced',
    desc: 'Experienced in building fast, interactive, and scalable user interfaces using React.js.'
  },
  {
    name: 'Next.js',
    icon: Code,
    level: 'Advanced',
    desc: 'Proficient in developing performant web applications with Next.js, leveraging SSR and API routes.'
  },
  {
    name: 'Shopify Development',
    icon: Store,
    level: 'Expert',
    desc: 'Expert in building, customizing, and scaling Shopify storefronts tailored to unique client needs.'
  },
  {
    name: 'Theme Customization',
    icon: Palette,
    level: 'Advanced',
    desc: 'Specialized in modifying and enhancing Shopify themes for personalized branding and user experience.'
  },
  {
    name: 'Liquid Programming',
    icon: FileCode,
    level: 'Expert',
    desc: 'Proficient in Shopify’s Liquid template language to create dynamic and flexible store functionality.'
  },
  {
    name: 'Figma to Web & Shopify',
    icon: PenTool,
    level: 'Advanced',
    desc: 'Experienced in converting Figma designs into functional, high-fidelity Shopify storefronts.'
  },
  {
    name: 'Responsive Design',
    icon: MonitorSmartphone,
    level: 'Advanced',
    desc: 'Adept at implementing mobile-first and fully responsive layouts across all device sizes.'
  },
  {
    name: 'UI/UX Design',
    icon: PenTool,
    level: 'Advanced',
    desc: 'Skilled in crafting intuitive user experiences and visually appealing user interfaces focused on usability and engagement.'
  },
  {
    name: 'WordPress',
    icon: FileCode,
    level: 'Advanced',
    desc: 'Experienced in developing custom WordPress themes and plugins for flexible and dynamic websites.'
  },
  {
    name: 'eCommerce Strategy',
    icon: Lightbulb,
    level: 'Intermediate',
    desc: 'Understands user behavior and sales funnels to boost conversion rates and store performance.'
  }
];


export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  icon: LucideIcon;
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Malwa institute of technology, Indore',
    degree: 'Bachelor of Technology - BTech,  Electronics & Communication',
    duration: '2019 - 2023',
    grade: '7.75 CGPA',
    icon: GraduationCap,
  },
 {
  institution: 'Govt Excellence H.S. School, Barnager',
  degree: 'PCM',
  duration: '2018 - 2019',
  grade: '62%',
  icon: GraduationCap,
}

];

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  locationType: string;
  description: string[];
  icon: LucideIcon;
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Code Better',
    role: 'Trainee - Front-End Development',
    duration: '2023',
    locationType: 'On Site',
    description: [
      'Completed a 6-month intensive training program in modern frontend technologies.',
      'Learned advanced JavaScript, React.js, Redux Toolkit, and UI/UX principles.',
      'Built projects translating designs into responsive web applications.',
      'Gained experience debugging and optimizing frontend performance.'
    ],
    icon: GraduationCap
  },

  {
    company: 'Elicit Digital Pvt Ltd',
    role: 'Software Developer',
    duration: '08/2023 - 05/2025',
    locationType: 'On Site',
    description: [
      'Developed and maintained applications using React.js.',
      'Implemented reusable UI components and ensured code quality.',
      'Participated in architecture and design discussions.',
      'Collaborated with cross-functional teams to deliver projects on schedule.',
      'Applied test-driven development (TDD) practices in React Native projects.',
      'Optimized web pages for speed, performance, and scalability.'
    ],
    icon: Briefcase
  },

  {
    company: 'Indivibe Infotech Pvt Ltd',
    role: 'Shopify Developer',
    duration: '04/2022 - 05/2023',
    locationType: 'Freelancing',
    description: [
      'Led the design phase of Shopify development projects, working closely with clients to capture their vision.',
      'Translated Figma designs into pixel-perfect, responsive Shopify storefronts using HTML, SCSS, JavaScript, and Liquid.',
      'Customized themes and templates using HTML, CSS, JavaScript, and Shopify Liquid.',
      'Integrated third-party apps and APIs to extend store functionality, including product upsells, cart drawers, and custom pop-ups.',
      'Ensured cross-browser and cross-device compatibility through mobile-first design and thorough QA testing.',
      'Improved performance and load times by optimizing Liquid templates, reducing unnecessary scripts, and implementing lazy loading for assets.'
    ],
    icon: Briefcase
  }
];


export const SITE_TITLE = "Rupesh Soneriya | Shopify Developer";
export const SITE_DESCRIPTION = "Personal portfolio of Rupesh Soneriya, a passionate Shopify developer Setup high-performing custom Stores and e-commerce solutions.";

