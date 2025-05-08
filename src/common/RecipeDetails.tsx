"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

type RecipeDetailsProps = {
  title: string;
  imageSrc: string;
  ingredients: string[];
  instructions: string[];
};

export default function RecipeDetails({
  title,
  imageSrc,
  ingredients,
  instructions,
}: RecipeDetailsProps) {
  return (
    <div className="relative w-full min-h-screen  px-4 py-10 md:px-20 ">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/banner.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="container max-w-8xl w-full backdrop-blur-md rounded-xl  overflow-hidden flex flex-col lg:flex-row gap-10 p-6 md:p-10">
          {/* Left: Recipe Image */}
          <div className="relative w-full lg:h-[700px] lg:w-[680px] md:w-full md:h-[600px] sm:h-[500px] h-[500px] rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full flex flex-col items-start justify-center md:w-1/2 text-gray-800">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              {title}
            </h1>

            <div className="max-w-6xl">
              <ul className="list-disc list-inside space-y-1 mb-6 text-base md:text-[16px] font-sans">
                {ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <ul className="list-disc list-inside space-y-2 text-base md:text-[16px] font-sans">
                {instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
