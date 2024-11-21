import { GetProductsDocument } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <ul>
      {data.getLandingProducts.products?.map((product) => (
        <li key={product.title}>{product.title}</li>
      ))}
    </ul>
  );
}
