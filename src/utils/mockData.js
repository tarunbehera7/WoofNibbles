// const products = [
//     {
//         id: 1,
//         name: "Premium Dry Dog Food",
//         price: "₹1,499",
//         description: "High-quality dry food for adult dogs, made with premium ingredients.",
//         image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80",
//         details: [
//             "Made with real chicken as the first ingredient",
//             "Contains essential vitamins and minerals",
//             "No artificial preservatives or flavors",
//             "Supports healthy digestion",
//             "Promotes strong muscles and bones"
//         ]
//     },
//     {
//         id: 2,
//         name: "Grain-Free Puppy Food",
//         price: "₹1,299",
//         description: "Specially formulated for puppies with sensitive stomachs.",
//         image: "https://www.google.com/imgres?q=grain-free%20puppy%20food&imgurl=https%3A%2F%2Fpetshopdirect.co.uk%2Fwp-content%2Fuploads%2FNatura-Wild-Ontario-Wildland-12kg.jpg&imgrefurl=https%3A%2F%2Fpetshopdirect.co.uk%2Fproduct%2Fnatura-wild-grain-free-dog-food-ontario-wildland-adult-dry-food%2F&docid=02KTZZkzlHhMTM&tbnid=BXHCxFvAnd0AqM&vet=12ahUKEwjk5MaStZaMAxXysFYBHTN8MWMQM3oECD0QAA..i&w=2000&h=2000&hcb=2&ved=2ahUKEwjk5MaStZaMAxXysFYBHTN8MWMQM3oECD0QAA",
//         details: [
//             "Grain-free formula for easy digestion",
//             "Contains DHA for brain development",
//             "Made with real lamb and sweet potatoes",
//             "No artificial flavors or colors"
//         ]
//     },
//     {
//         id: 3,
//         name: "Organic Dog Treats",
//         price: "₹599",
//         description: "Healthy organic treats made with natural ingredients.",
//         image: "https://www.google.com/imgres?q=Organic%20Dog%20Treats&imgurl=https%3A%2F%2Fwww.puprise.com%2Fwp-content%2Fuploads%2F2021%2F02%2FAwesome-Pawsome-Peanut-Butter-Dog-Treat-f.jpg&imgrefurl=https%3A%2F%2Fwww.puprise.com%2Fawesome-pawsome-peanut-butter-cranberry-natural-dog-treat-85g%2F&docid=s3DwJHy7bM5SIM&tbnid=OkqWH7dy5f3_2M&vet=12ahUKEwjT0tbWtZaMAxXpsVYBHe5ZODEQM3oECBsQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjT0tbWtZaMAxXpsVYBHe5ZODEQM3oECBsQAA",
//         details: [
//             "No artificial additives",
//             "Rich in fiber for better digestion",
//             "Perfect for training rewards"
//         ]
//     },
//     {
//         id: 4,
//         name: "Soft Chew Dog Treats",
//         price: "₹699",
//         description: "Soft and delicious treats for dogs of all ages.",
//         image: "https://www.google.com/imgres?q=Soft%20Chew%20Dog%20Treats&imgurl=https%3A%2F%2Fheadsupfortails.com%2Fcdn%2Fshop%2Ffiles%2FDSC_4806.jpg%3Fv%3D1739043459%26width%3D1946&imgrefurl=https%3A%2F%2Fheadsupfortails.com%2Fproducts%2Fhuft-chewbarks-smoked-chicken-soft-chew-strips-dog-treats&docid=uVbHLJ69RCOl5M&tbnid=ALp55eObMFyrmM&vet=12ahUKEwit2ebltZaMAxVPrlYBHd0QL7IQM3oECGUQAA..i&w=1946&h=1946&hcb=2&ved=2ahUKEwit2ebltZaMAxVPrlYBHd0QL7IQM3oECGUQAA",
//         details: [
//             "Soft texture for easy chewing",
//             "Rich in Omega-3 and Omega-6",
//             "Made with real beef and sweet potatoes",
//             "Supports healthy skin and coat"
//         ]
//     },
//     {
//         id: 5,
//         name: "Natural Dental Chews",
//         price: "₹899",
//         description: "Helps reduce plaque and tartar for better dental health.",
//         image: "https://www.google.com/imgres?q=Natural%20Dental%20Chews&imgurl=https%3A%2F%2Fwww.pawstruck.com%2Fcdn%2Fshop%2Ffiles%2FPS_Bag_Mockup_NaturalDentalChews_Small_30count_1080x.jpg%3Fv%3D1739407679&imgrefurl=https%3A%2F%2Fwww.pawstruck.com%2Fproducts%2Fpawstruck-daily-dental-brush-chews&docid=uufJTtt2Qjrr5M&tbnid=pWm-jRAFdF5-vM&vet=12ahUKEwjjpf76tZaMAxXdk1YBHdhPAZAQM3oECBgQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjjpf76tZaMAxXdk1YBHdhPAZAQM3oECBgQAA",
//         details: [
//             "Promotes fresh breath",
//             "Helps maintain strong teeth and gums",
//             "Made with natural ingredients",
//             "No artificial colors or flavors"
//         ]
//     },
//     {
//         id: 6,
//         name: "Hypoallergenic Dog Food",
//         price: "₹1,799",
//         description: "Ideal for dogs with food sensitivities and allergies.",
//         image: "https://www.google.com/imgres?q=Hypoallergenic%20Dog%20Food&imgurl=https%3A%2F%2Fwww.cessnapetstore.in%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fed53181b50218cdc87655bf095ad0748%2Fh%2Fy%2Fhypoallergenic-2kg-.png&imgrefurl=https%3A%2F%2Fwww.cessnapetstore.in%2Fvivaldis-hypoallergenic-dog-dry-food-2kg.html&docid=Gt-8SmFbobxncM&tbnid=RCAQsx_ERjsMbM&vet=12ahUKEwjzrpCJtpaMAxWpsVYBHaM5HRQQM3oECBUQAA..i&w=650&h=650&hcb=2&ved=2ahUKEwjzrpCJtpaMAxWpsVYBHaM5HRQQM3oECBUQAA",
//         details: [
//             "Made with limited ingredients",
//             "Grain-free and soy-free",
//             "Supports a healthy immune system",
//             "Contains high-quality protein sources"
//         ]
//     },
//     {
//         id: 7,
//         name: "Freeze-Dried Raw Dog Food",
//         price: "₹2,299",
//         description: "Nutrient-rich freeze-dried raw food for a balanced diet.",
//         image: "https://www.google.com/imgres?q=Freeze-Dried%20Raw%20Dog%20Food&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F619xVx7smeL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FInstinct-Chicken-Natural-Natures-Variety%2Fdp%2FB00YWPIF2O&docid=9BQJfEbsif8zeM&tbnid=Un6zyu72tp643M&vet=12ahUKEwiA5YmetpaMAxUNr1YBHQDnM60QM3oECBoQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiA5YmetpaMAxUNr1YBHQDnM60QM3oECBoQAA",
//         details: [
//             "Made with raw, natural ingredients",
//             "Freeze-dried to retain nutrients",
//             "No artificial additives or preservatives",
//             "Supports digestive health"
//         ]
//     },
//     {
//         id: 8,
//         name: "Puppy Training Pads",
//         price: "₹499",
//         description: "Highly absorbent pads to help with puppy training.",
//         image: "https://www.google.com/imgres?q=Puppy%20Training%20Pads&imgurl=http%3A%2F%2Fheadsupfortails.com%2Fcdn%2Fshop%2Ffiles%2FM-PetsPuppyTrainingPads-100Pcs_60x60cm.jpg%3Fv%3D1704952744&imgrefurl=https%3A%2F%2Fheadsupfortails.com%2Fproducts%2Fm-pets-puppy-training-pads-100-pcs-60-x-60-cm&docid=9PPef002-fifQM&tbnid=4wOuNsS2T4LHAM&vet=12ahUKEwjPyd2utpaMAxWm8DQHHezJNxkQM3oECBcQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjPyd2utpaMAxWm8DQHHezJNxkQM3oECBcQAA",
//         details: [
//             "Super absorbent to prevent leaks",
//             "Odor-neutralizing technology",
//             "Ideal for house training",
//             "Quick-dry surface for comfort"
//         ]
//     },
//     {
//         id: 9,
//         name: "Eco-Friendly Dog Poop Bags",
//         price: "₹349",
//         description: "Biodegradable poop bags for easy and eco-friendly disposal.",
//         image: "https://www.google.com/imgres?q=Eco-Friendly%20Dog%20Poop%20Bags&imgurl=https%3A%2F%2Fpixelfriedhof.com%2Fwp-content%2Fuploads%2F2020%2F07%2FDSC_8439-scaled.jpg&imgrefurl=https%3A%2F%2Fpixelfriedhof.com%2Fen%2Fbiodegradable-dog-poop-bags-without-plastic-do-they-hold-tight%2F&docid=yo49Sw1gSrSxEM&tbnid=b8MjbNEQMH-swM&vet=12ahUKEwik2YHBtpaMAxUcp1YBHX8wPBYQM3oECGkQAA..i&w=2560&h=1707&hcb=2&itg=1&ved=2ahUKEwik2YHBtpaMAxUcp1YBHX8wPBYQM3oECGkQAA",
//         details: [
//             "Made from plant-based materials",
//             "Leak-proof and durable",
//             "Environmentally friendly",
//             "Easy to tear and use"
//         ]
//     },
//     {
//         id: 10,
//         name: "Adjustable Dog Harness",
//         price: "₹1,199",
//         description: "Comfortable and durable harness for walking your dog safely.",
//         image: "https://www.google.com/imgres?q=Adjustable%20Dog%20Harness&imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F662ff0ef894a0216d66f8f20-heavy-duty-tactical-dog-harness-for.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2FJS9YSCYJY-heavy-duty-tactical-dog-harness-for-large-dogs-no-pull-adjustable-pet-harness-reflective-service-training-easy-control-pet-vest-military-k9-working&docid=huF9oGpgc4DjoM&tbnid=FlefMX5iX0upTM&vet=12ahUKEwjHqtPUtpaMAxXNsFYBHUeJBTcQM3oECF4QAA..i&w=1490&h=1500&hcb=2&ved=2ahUKEwjHqtPUtpaMAxXNsFYBHUeJBTcQM3oECF4QAA",
//         details: [
//             "Adjustable straps for a perfect fit",
//             "Soft padding for comfort",
//             "Reflective strips for night walks",
//             "Durable and lightweight design"
//         ]
//     }
// ];

// export default products;




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