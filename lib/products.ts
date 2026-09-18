export type Product = {
  slug: string;
  name: string;
  category: string;
  age: string;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "spark-lab",
    name: "Spark Lab",
    category: "Early Learning",
    age: "Ages 4-6",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    description: "Playful experiments that ignite confidence in young builders and makers.",
    longDescription:
      "Spark Lab is a gentle, sensory-rich STEM kit for curious kids who love to build, paint, and test new ideas. Each month includes hands-on activities designed to spark confidence and early engineering thinking.",
    features: [
      "4 ready-to-go experiments",
      "Parent guide with discussion prompts",
      "Screen-free, creative learning",
      "Gift-ready packaging",
    ],
  },
  {
    slug: "rocket-builders",
    name: "Rocket Builders",
    category: "Engineering",
    age: "Ages 7-9",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description: "Concept-to-launch challenges that turn big ideas into testable inventions.",
    longDescription:
      "Rocket Builders encourages thoughtful experimentation, engineering design, and iterative problem-solving. It introduces kids to the joy of planning, testing, and improving ideas through real, hands-on missions.",
    features: [
      "Build-and-launch design challenges",
      "STEM challenge cards with prompts",
      "Includes tools and materials",
      "Family-friendly lesson guide",
    ],
  },
  {
    slug: "future-makers",
    name: "Future Makers",
    category: "Robotics & Design",
    age: "Ages 10+",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    description: "Advanced projects that stretch creativity, coding, and scientific thinking.",
    longDescription:
      "Future Makers is built for older kids ready to go deeper into robotics, design systems, and real-world problem solving. Each adventure blends hands-on construction, experimentation, and deeper thinking.",
    features: [
      "More advanced engineering challenges",
      "Detailed experiment journal",
      "Project-based learning sequence",
      "Ideal for curious tween learners",
    ],
  },
];

export const cartItems = [
  { product: products[0], quantity: 1 },
  { product: products[1], quantity: 1 },
];
