import { getFragmentData } from '@/__generated__';
import {
    GetProductsDocument, GetSearchProductsDocument, ProductListItemFragmentDoc
} from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { Grid2 as Grid, Stack } from '@mui/material';

import { Product } from './Product';
import { SearchInput } from './SearchInput';

interface ProductsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Products({ searchParams }: ProductsProps) {
  const { query } = await searchParams;

  const products =
    query && typeof query === 'string'
      ? (
          await getClient().query({
            query: GetSearchProductsDocument,
            variables: { term: query },
          })
        ).data.searchHomeProducts
      : (await getClient().query({ query: GetProductsDocument })).data.getLandingProducts.products;

  return (
    <Stack spacing={2} alignItems={'center'} paddingTop="10px">
      <SearchInput />
      <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
        {products?.map((prd) => {
          const product = getFragmentData(ProductListItemFragmentDoc, prd);
          return <Product product={product} key={product.id} />;
        })}
      </Grid>
    </Stack>
  );
}
