"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imagez } from "@/assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

export default function Caro() {
  const heroImage = [
    { imageUrl: "/image1.png" },
    { imageUrl: "/image2.png" },
    { imageUrl: "/image3.png" },
    { imageUrl: "/image4.png" },
    { imageUrl: "/image5.png" },
    { imageUrl: "/image6.png" },
  ];
  return (
    <>
      <div className="  py-107    bg-slate-50 rounded-lg   ">
        <Carousel
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          interval={1000}
        >
          {heroImage.map((image, index) => (
            <div className="  m-auto   h-[286px] w-[286px]" key={index}>
              <img
                src={image.imageUrl}
                alt="image"
                className="  h-full w-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
