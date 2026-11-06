import matchlyImg from "../assets/img/proj-matchly.jpg";
import matchlyJobs from "../assets/img/proj-matchly-jobs.jpg";
import matchlyApplications from "../assets/img/proj-matchly-applications.jpg";
import matchlyInsights from "../assets/img/proj-matchly-insights.jpg";
import ecommerceImg from "../assets/img/proj-ecommerce.jpg";
import ecommerceProduct from "../assets/img/proj-ecommerce-product.jpg";
import ecommerceCart from "../assets/img/proj-ecommerce-cart.jpg";

const gh = (repo) => `https://github.com/dmarsal90/${repo}`;

// Texts live in src/i18n/*.json under projects.items[key]; `gallery` follows the order of its `shots`.
export const projects = [
  { key: "matchly", stack: ["Laravel 13", "Vue 3", "Inertia", "Tailwind 4", "PostgreSQL", "Redis", "Docker"],
    links: [{ label: "GitHub", url: gh("Matchly") }],
    image: matchlyImg, gallery: [matchlyJobs, matchlyApplications, matchlyInsights] },
  { key: "ecommerce", stack: ["Laravel", "Sanctum", "Next.js", "TypeScript", "Zod", "Stripe"],
    links: [{ label: "API", url: gh("ecommerce-api") }, { label: "Storefront", url: gh("ecommerce-front") }],
    image: ecommerceImg, gallery: [ecommerceImg, ecommerceProduct, ecommerceCart] },
  { key: "zipwarden", stack: ["PHP", "JavaScript", "Laravel", "Symfony"], preRelease: true,
    links: [{ label: "PHP", url: gh("zipwarden-php") }, { label: "JavaScript", url: gh("zipwarden-js") }] },
  { key: "whistleblower", stack: ["PHP", "Laravel", "Symfony", "PHPStan"], preRelease: true,
    links: [{ label: "GitHub", url: gh("whistleblower") }] },
];
