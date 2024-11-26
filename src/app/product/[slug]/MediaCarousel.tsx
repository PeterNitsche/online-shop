"use client";

import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import Carousel from "react-multi-carousel";

import theme from "@/theme";
import { Box } from "@mui/material";

interface MediaCarouselProps {
  videoUrl?: string | null;
  imageUrls: string[];
  productTitle?: string | null;
}

export function MediaCarousel({
  videoUrl,
  imageUrls,
  productTitle,
}: MediaCarouselProps) {
  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {imageUrls.map((imageUrl, i) => (
        <Box key={imageUrl} height={500} position="relative">
          <Image
            src={imageUrl}
            fill
            priority={i === 0}
            style={{ objectFit: "contain" }}
            alt={`${productTitle || "Product"} Image ${i}`}
            sizes={`${theme.breakpoints.values.lg}`}
          />
        </Box>
      ))}
      {videoUrl && (
        <Box
          key={videoUrl}
          height={500}
          position="relative"
          justifyContent={"center"}
          display={"flex"}
        >
          <video key={videoUrl} controls width={"auto"} height={"100%"}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </Box>
      )}
    </Carousel>
  );
}
