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
    image: string;
    alt: string;
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
    image: Images.brand1.src,
    alt: "Brand 1",
  },
    {
        id: 2,
        image: Images.brand2.src,
        alt: "Brand 2",
    },
    {
        id: 3,
        image: Images.brand3.src,
        alt: "Brand 3",
    },
    {
        id: 4,
        image: Images.brand4.src,
        alt: "Brand 4",
    },
    {
        id: 5,
        image: Images.brand5.src,
        alt: "Brand 5",
    },

]