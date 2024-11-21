import { GetProductsDocument } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { Grid2 as Grid, Typography } from "@mui/material";

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 8 }}>
      {data.getLandingProducts.products?.map((product) => (
        <Grid size={2} key={product.id}>
          <Typography variant="subtitle1" gutterBottom noWrap>
            {product.id}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
