import {cappuccino, chaiLatte, macchiato, expresso} from "../assets/images";
import {  coffeeBeans,
    badge,
    coffeeCup,
    bestPrice} from "../assets/icons"


export const products = [
    {
        image: cappuccino,
        name: "Cappuccino",
        ingredients: "Coffee 50% | Milk 50%",
        price: 8.50
    },
    {
        image: chaiLatte,
        name: "Chai Latte",
        ingredients: "Tea 40% | Milk 60%",
        price: 5.50
    },
    {
        image: macchiato,
        name: "Macchiato",
        ingredients: "Coffee 60% | Milk 40%",
        price: 9.50
    },
    {
        image: expresso,
        name: "Expresso",
        ingredients: "Coffee 55% | Milk 45%",
        price: 9.00
    },
]

export const features = [
    {
        image: coffeeBeans,
        name: "Supreme Beans",
        text: "Beans that provide great taste",
    },
    {
        image: badge,
        name: "High Quality",
        text: "We provide the highest quality",
    },
    {
        image: coffeeCup,
        name: "Extraordinary",
        text: "Coffee like you have never tasted",
    },
    {
        image: bestPrice,
        name: "Affordable Price",
        text: "Coffee that is easy on the pocket",
    },
]

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];