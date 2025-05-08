// pages/recipes/index.tsx
import React from "react";

import RecipeCard from "../../common/RecipeCard";
import { Recipe } from "../../types/recipe";

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Chia seed pudding",
    description:
      "Chia seed pudding is a delicious and nutritious dish made by soaking chia seeds in milk or a milk alternative until they form a thick, pudding-like texture. Naturally rich in fiber, omega-3 fatty acids, and plant-based protein, it's a healthy option for breakfast, snacks, or dessert. This versatile pudding can be flavored with fruits, honey, vanilla, or spices, making it easy to customize to your taste.",
    slug: "chia-seed-pudding",
    imageUrl: "/images/recipes1.png",
  },
  {
    id: 2,

    title: "Chocolate dip",
    description:
      "Chocolate dip is a delicious, gluten-free treat when made with pure chocolate and natural ingredients. It's safe for those with gluten sensitivity and offers benefits like antioxidants, heart support, and mood-boosting properties from dark chocolate.",
    slug: "chocolate-dip",
    imageUrl: "/images/recipes2.png",
  },
  {
    id: 3,
    title: "Oatmeal snacks",
    description:
      "Oatmeal snacks are a tasty and wholesome gluten-free option when made with certified gluten-free oats. They provide lasting energy, support digestion with their high fiber content, and help keep you full longer. Packed with nutrients like iron and magnesium, they make a healthy, satisfying snack for any time of day.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes3.png",
  },
  {
    id: 4,
    title: "Greek yogurt popsicles ",
    description:
      "Greek yogurt popsicles are a creamy, refreshing gluten-free treat made with simple ingredients like Greek yogurt and fruit. They're rich in protein, calcium, and probiotics, which support digestion and bone health. Naturally gluten-free, they’re a healthy and satisfying snack or dessert for all ages.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes4.png",
  },
  {
    id: 5,
    title: "Spam Masubi ",
    description:
      "Spam musubi is a popular Hawaiian snack made with grilled Spam, rice, and seaweed. While traditional versions may contain soy sauce or marinades with gluten, it can be made gluten-free by using gluten-free soy sauce and certified gluten-free rice. It’s a tasty, protein-rich snack that’s easy to prepare and perfect for on-the-go meals.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes5.png",
  },
  {
    id: 6,
    title: "Mediterranean wraps ",
    description:
      "Mediterranean wraps are a flavorful and healthy option packed with fresh veggies, hummus, and lean proteins like chicken or falafel. When made with gluten-free wraps or lettuce leaves, they’re completely gluten-free. Rich in fiber, healthy fats, and antioxidants, they support heart health and make a nutritious, satisfying meal.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes6.png",
  },
  {
    id: 7,
    title: "Chicken breast ",
    description:
      "Chicken breast is a lean, naturally gluten-free source of high-quality protein that supports muscle growth and overall health. It's low in fat, versatile, and easy to cook in a variety of gluten-free recipes, making it a staple for balanced, nutritious meals.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes7.png",
  },
  {
    id: 8,
    title: "Tortilla  ",
    description:
      "Tortillas can be gluten-free when made with corn or gluten-free flour instead of wheat. Corn tortillas are a traditional option that’s naturally gluten-free, making them safe for those with gluten sensitivity. They're a great source of fiber and can be used in a variety of healthy, delicious recipes.",
    slug: "Check Full Recipe",
    imageUrl: "/images/recipes8.png",
  },
];

export default function Recipes() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-12">
        Best Gluten Free Recipes
      </h1>
      <div className="max-w-8xl mx-auto ">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}
