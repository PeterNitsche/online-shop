import { GetProductsDocument } from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import { Grid2 as Grid } from '@mui/material';

import { Product } from './Product';

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
      {data.getLandingProducts.products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Grid>
  );
}
