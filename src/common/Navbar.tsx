"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  //   const isRecipesPage = pathname.startsWith("/recipes-details");

  return (
    <div className="container mx-auto text-center py-4">
      <div className="space-x-12">
        {/* Home Link */}
        <Link
          href="/"
          className={`relative font-alt text-[16px] font-bold pb-1 ${
            pathname === "/"
              ? "text-[#67B542] after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-[#67B542]"
              : "text-secondary"
          }`}>
          Home
        </Link>

        {/* Recipes Link - Disabled on home */}
        {isHome ? (
          <span className="font-alt text-[16px] font-bold text-[#4A4E49] cursor-not-allowed">
            Recipes
          </span>
        ) : (
          <Link
            href="/recipes-details-1"
            className={`relative font-alt text-[16px] font-bold pb-1 ${
              pathname === "/"
                ? "text-green-700 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-green-700"
                : "text-secondary"
            }`}>
            Recipes
          </Link>
        )}
      </div>
    </div>
  );
}
