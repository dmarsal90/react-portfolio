// Group titles live in src/i18n/*.json under skills.groups. Groups with `items: null` (seo, payments, architecture) have translated items in the same file.
export const skills = [
  { key: "languages", items: ["PHP", "JavaScript", "TypeScript", "SQL", "Java"] },
  { key: "backend", items: ["Laravel", "Symfony", "CakePHP", "Yii", "WordPress", "Node.js", "NestJS", "Express", "Django REST", "GraphQL", "REST APIs", "SOAP", "SSO"] },
  { key: "frontend", items: ["React", "Next.js", "Vue.js", "Nuxt", "React Native Expo", "jQuery"] },
  { key: "ui", items: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "Less", "CSS", "Material UI", "shadcn/ui", "Radix UI", "Chakra UI"] },
  { key: "state", items: ["Redux Toolkit", "Vuex", "Zustand", "TanStack Query"] },
  { key: "databases", items: ["MySQL", "PostgreSQL", "Redis", "Supabase", "MongoDB"] },
  { key: "seo", items: null },
  { key: "ai", items: ["LLMs", "OpenAI", "Claude", "Gemini", "OpenRouter", "MCP servers", "FFmpeg"] },
  { key: "devops", items: ["Docker", "Git", "GitHub Actions", "GitLab CI", "SonarQube", "AWS Lambda", "AWS S3", "Vercel", "Cloudflare R2", "Railway", "Trigger.dev", "Scrum"] },
  { key: "payments", items: null },
  { key: "testing", items: ["Pest", "PHPUnit", "PHPStan", "ESLint", "Vitest", "Jest", "React Testing Library", "Playwright", "Cypress"] },
  { key: "architecture", items: null },
];
