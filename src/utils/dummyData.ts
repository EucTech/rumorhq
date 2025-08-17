// create 14 dummy data for this
import { Images } from "../assets/index";

interface CustomerReviewPropsType {
    name: string;
    review: string;
    image: string;
    location: string;
}

interface BrandPropsType {
    id: number;
    icon: string;
    alt: string;
    title: string;
}


export const CustomerReviewData: CustomerReviewPropsType[] = [
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer1.src,
        location: "Lagos",
    },
  
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer2.src,
        location: "Abuja",
    },
  
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer1.src,
        location: "Lagos",
    },
  
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer2.src,
        location: "Lagos",
    },
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer1.src,
        location: "Lagos",
    },
  
    {
        name: "Ade, Video Editor & Brand Storyteller",
        review: "What stood out for me was how easy it was to find paid opportunities that matched my niche. The team really cares about helping us grow.",
        image: Images.customer2.src,
        location: "Lagos",
    },
  
  
]

export const BrandType: BrandPropsType[] = [
  {
    id: 1,
    icon: Images.icon7.src,
    alt: "Brand 1",
    title: "Content Creators",
  },
  {
    id: 2,
    icon: Images.icon5.src,
    alt: "Brand 2",
    title: "Video Editor",
  },
  {
    id: 3,
    icon: Images.icon6.src,
    alt: "Brand 3",
    title: "Thumbnail Designer",
  },
  {
    id: 4,
    icon: Images.icon7.src,
    alt: "Brand 4",
    title: "Content Strategist",
  },
  {
    id: 5,
    icon: Images.icon8.src,
    alt: "Brand 5",
    title: "Social media managers",
  },
  {
    id: 6,
    icon: Images.icon8.src,
    alt: "Brand 6",
    title: "Creative directors",
  },
  {
    id: 7,
    icon: Images.icon7.src,
    alt: "Brand 7",
    title: "Community managers",
  },
  
]


export const HacktonsData = [
  {
    id: "1",
    image: Images.hacktonHero.src,
    location: "Lagos",
    date: "24, July 2025",
    title: "Homified Food Hackathon",
    prize: "$4K-10K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  },
  {
    id: "2",
    image: Images.hacktonHero.src,
    location: "Abuja",
    date: "22, July 2025",
    title: "Homified Food Hackathon",
    prize: "$2K-5K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  },
  {
    id: "3",
    image: Images.hacktonHero.src,
    location: "Port Harcourt",
    date: "30, July 2025",
    title: "Homified Food Hackathon",
    prize: "$3K-7K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  },
  {
    id: "4",
    image: Images.hacktonHero.src,
    location: "Ibadan",
    date: "15, August 2025",
    title: "Homified Food Hackathon",
    prize: "$1K-4K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  },
  {
    id: "5",
    image: Images.hacktonHero.src,
    location: "Enugu",
    date: "10, September 2025",
    title: "Homified Food Hackathon",
    prize: "$5K-12K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  },

  {
    id: "6",
    image: Images.hacktonHero.src,
    location: "Enugu",
    date: "10, September 2025",
    title: "Homified Food Hackathon",
    prize: "$5K-12K USDT",
    category: ["Food Tech", "Hackathon", "Innovation"],
    skills: ["Storying telling", "Video editing", "Content creations", "Social media management", "Creative direction", "Community management"],
  }

]