import dogFood from "../assets/dog_food.jpeg";
import puppyFood from "../assets/puppy_food.jpeg";
import dogTreats from "../assets/dog_treats.jpeg";
import chewTreats from "../assets/chew_treats.jpeg";
import dentalChews from "../assets/dental_chews.jpeg";
import dogHarness from "../assets/dog_harness.jpeg";
import dogBottle from "../assets/dog_bottle.jpeg";
import chewToys from "../assets/chew_toys.jpeg";
import hypoallergenicFood from "../assets/hypoallergenic_food.jpeg";
import poopBags from "../assets/poop_bags.jpeg";

const products = [
    {
        id: 1,
        name: "Premium Dry Dog Food",
        price: "₹1,499",
        description: "High-quality dry food for adult dogs.",
        image: dogFood,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Grain-Free Puppy Food",
        price: "₹1,299",
        description: "Specially formulated for puppies with sensitive stomachs.",
        image: puppyFood,
        rating: 4.0,
    },
    {
        id: 3,
        name: "Organic Dog Treats",
        price: "₹599",
        description: "Healthy organic treats made with natural ingredients.",
        image: dogTreats,
        rating: 3.5,
    },
    {
        id: 4,
        name: "Soft Chew Dog Treats",
        price: "₹699",
        description: "Soft and delicious treats for dogs of all ages.",
        image: chewTreats,
        rating: 4.8,
    },
    {
        id: 5,
        name: "Natural Dental Chews",
        price: "₹899",
        description: "Helps reduce plaque and tartar for better dental health.",
        image: dentalChews,
        rating: 4.2,
    },
    {
        id: 6,
        name: "Adjustable Dog Harness",
        price: "₹1,199",
        description: "Comfortable and durable harness for walking your dog safely.",
        image: dogHarness,
        rating: 4.9,
    },
    {
        id: 7,
        name: "Portable Dog Water Bottle",
        price: "₹499",
        description: "Easy-to-carry water bottle for dogs on the go.",
        image: dogBottle,
        rating: 4.7,
    },
    {
        id: 8,
        name: "Durable Chew Toys",
        price: "₹599",
        description: "Long-lasting chew toys for all dog breeds.",
        image: chewToys,
        rating: 4.0,
    },
    {
        id: 9,
        name: "Hypoallergenic Dog Food",
        price: "₹1,799",
        description: "Ideal for dogs with food sensitivities and allergies.",
        image: hypoallergenicFood,
        rating: 4.3,
    },
    {
        id: 10,
        name: "Eco-Friendly Poop Bags",
        price: "₹349",
        description: "Biodegradable poop bags for easy and eco-friendly disposal.",
        image: poopBags,
        rating: 4.6,
    },
];

export default products;