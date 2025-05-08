import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../types/recipe";

interface RecipeCardProps {
  recipe: Recipe; // Using the Recipe interface
  imagePosition: "left" | "right"; // Add this prop
}

export default function RecipeCard({ recipe, imagePosition }: RecipeCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 mb-12 p-6 rounded-lg  bg-white ${
        imagePosition === "left" ? " right" : "lg:flex-row-reverse"
      }`}>
      {/* Text Content */}
      <div className="flex-1 order-2 mt-10 max-w-[600px] lg:order-1">
        <div className="mb-4">
          <span className="text-[16px] font-bold text-[#053F22]">
            {String(recipe.id).padStart(2, "0")}
          </span>
        </div>
        <h2 className="text-2xl md:text-[40px] font-bold mb-6 text-textHeading">
          {recipe.title}
        </h2>
        <p className="text-[16px] text-textColor font-sans mb-6 text-sm/7">
          {recipe.description}
        </p>
        <Link
          href={`/recipes/${recipe.slug}`}
          className="inline-bloc bg-button text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
          Check Full Recipe →
        </Link>
      </div>

      {/* Image */}
      <div className="flex-1 order-1 lg:order-2">
        {recipe.imageUrl && (
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
