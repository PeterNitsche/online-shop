import { getFragmentData } from '@/__generated__';
import {
    GetProductsDocument, GetSearchProductsDocument, ProductListItemFragmentDoc
} from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { Grid2 as Grid } from '@mui/material';

import { Product } from './Product';

interface ProductGridProps {
  searchTerm?: string;
}

export default async function ProductGrid({ searchTerm }: ProductGridProps) {
  const products = searchTerm
    ? (
        await getClient().query({
          query: GetSearchProductsDocument,
          variables: { term: searchTerm },
        })
      ).data.searchHomeProducts
    : (await getClient().query({ query: GetProductsDocument })).data.getLandingProducts.products;

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
      {products?.map((prd) => {
        const product = getFragmentData(ProductListItemFragmentDoc, prd);
        return <Product product={product} key={product.id} />;
      })}
    </Grid>
  );
}
