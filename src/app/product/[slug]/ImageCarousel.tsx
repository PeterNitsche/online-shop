"use client";

import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import Carousel from "react-multi-carousel";

import theme from "@/theme";
import { Box } from "@mui/material";

interface ImageCarouselProps {
  imageUrls: string[];
  productTitle?: string | null;
}

export function ImageCarousel({ imageUrls, productTitle }: ImageCarouselProps) {
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
            style={{ objectFit: "contain" }}
            alt={`${productTitle || "Product"} Image ${i}`}
            sizes={`${theme.breakpoints.values.lg}`}
          />
        </Box>
      ))}
    </Carousel>
  );
}
