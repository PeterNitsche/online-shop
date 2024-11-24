import { getFragmentData } from '@/__generated__';
import { GetProductsDocument, ProductListItemFragmentDoc } from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { Grid2 as Grid, Stack } from '@mui/material';

import { Product } from './Product';
import { SearchInput } from './SearchInput';

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <Stack spacing={2} alignItems={"center"}>
      <SearchInput />
      <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
        {data.getLandingProducts.products?.map((prd) => {
          const product = getFragmentData(ProductListItemFragmentDoc, prd);
          return <Product product={product} key={product.id} />;
        })}
      </Grid>
    </Stack>
  );
}
