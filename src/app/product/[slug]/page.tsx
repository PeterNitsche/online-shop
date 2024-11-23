import {
  GetProductDocument,
  GetProductSlugsDocument,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";

import { ImageCarousel } from "./ImageCarousel";

interface ProductProps {
  params: Promise<{ slug: string }>;
}

export default async function Product({ params }: ProductProps) {
  const { slug } = await params;
  const { data } = await getClient().query({
    query: GetProductDocument,
    variables: { slug },
  });

  const imageUrls = data.getProductBySlug.images
    .map((image) => image.secure_url)
    .filter((url) => url !== undefined && url !== null);

  return (
    <ImageCarousel
      imageUrls={imageUrls}
      productTitle={data.getProductBySlug.title}
    />
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: GetProductSlugsDocument,
  });

  return data.getLandingProducts.products?.map((product) => ({
    slug: product.slug,
  }));
}
