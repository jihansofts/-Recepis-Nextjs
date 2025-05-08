import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Image from "next/image";
export default function Home() {
  return (
    <section className="relative w-full min-h-screen py-14">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/banner.png"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover  object-center"
          sizes="100vw"
        />
      </div>
      <div className="container z-100 mx-auto text-center">
        <div className="space-x-12 ">
          <a className=" font-alt text-[16px] font-bold text-secondary" href="">
            Home
          </a>
          <a className="text-[#4A4E49] font-alt text-[16px] " href="">
            Recipes
          </a>
        </div>
      </div>
      <div className="container z-100  gap-x-12 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
        <div className="col-span-1 md:px-5 sm:px-10 ">
          <div className="mt-14 border-5 z-10 border-secondary p-2 rounded-full">
            <Image
              src="/images/Ellipse 16.png"
              alt="logo"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="col-span-1 md:px-5 sm:px-10 flex flex-col items-center justify-center">
          <div className="mt-16">
            <h1 className="text-[56px] font-alt font-extrabold text-textHeading">
              Stay Gluten Free <br /> With Natalie
            </h1>
            <p className="text-[16px] text-textHeading font-sans font-normal mt-4">
              A gluten-free diet is beneficial for individuals with gluten
              sensitivity, celiac disease, or wheat allergies, as it helps avoid
              digestive issues and other health complications. For others, it
              can promote better digestion, reduce inflammation, and improve
              energy levels.
            </p>
            <div className="mt-10 flex space-x-6 justify-start items-center">
              <span className="text-[14px]  text-textHeading font-semibold font-sans">
                Follow me on:
              </span>
              <ul className="flex gap-x-4 ">
                <li>
                  <FaTwitter className="text-secondary text-[20px] hover:text-textHeading duration-300 translate-all cursor-pointer" />
                </li>
                <li>
                  <PiInstagramLogoFill className="text-secondary text-[20px] hover:text-textHeading duration-300 translate-all cursor-pointer" />
                </li>
                <li>
                  <FaFacebook className="text-secondary text-[20px] hover:text-textHeading duration-300 translate-all cursor-pointer" />
                </li>
                <li>
                  <FaLinkedin className="text-secondary text-[20px] hover:text-textHeading duration-300 translate-all cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
