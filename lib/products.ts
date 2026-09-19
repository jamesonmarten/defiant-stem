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
    name: "Circuit Lab",
    category: "Circuits & Sensors",
    age: "Ages 4-6",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    description: "First circuits, magnets, sensors, and science tools for younger builders.",
    longDescription:
      "Circuit Lab introduces younger kids to the building blocks of robotics and science with snap circuits, magnets, simple sensors, light experiments, and tactile engineering challenges.",
    features: [
      "4 ready-to-go circuit and science experiments",
      "Parent lab guide with prediction prompts",
      "No-screen robotics foundations",
      "Kid-safe components and materials",
    ],
  },
  {
    slug: "rocket-builders",
    name: "Rover Builders",
    category: "Robotics & Engineering",
    age: "Ages 7-9",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description: "Robotic rover and engineering missions for kids ready to prototype.",
    longDescription:
      "Rover Builders teaches mechanical design, motion, traction, force, and problem-solving through monthly robot-inspired builds and engineering missions.",
    features: [
      "Motor, motion, and simple-machine challenges",
      "Engineering notebook and mission cards",
      "Includes tools, wheels, axles, and build materials",
      "Family-friendly testing guide",
    ],
  },
  {
    slug: "future-makers",
    name: "AI & Robotics Studio",
    category: "Advanced Robotics",
    age: "Ages 10+",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    description: "Advanced robotics, logic games, and design challenges for older makers.",
    longDescription:
      "AI & Robotics Studio is built for older kids ready to explore robotic systems, feedback loops, simple coding logic, design tradeoffs, and real-world problem solving.",
    features: [
      "Robotics systems and logic challenges",
      "Detailed experiment and design journal",
      "Optional code-thinking extensions",
      "Ideal for curious tween engineers",
    ],
  },
];

export const cartItems = [
  { product: products[0], quantity: 1 },
  { product: products[1], quantity: 1 },
];
