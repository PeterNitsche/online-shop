import {
  GetProductDocument,
  GetProductSlugsDocument,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";

interface ProductProps {
  params: Promise<{ slug: string }>;
}

export default async function Product({ params }: ProductProps) {
  const { slug } = await params;
  const { data } = await getClient().query({
    query: GetProductDocument,
    variables: { slug },
  });
  return <>{data.getProductBySlug.price}</>;
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: GetProductSlugsDocument,
  });

  return data.getLandingProducts.products?.map((product) => ({
    slug: product.slug,
  }));
}
