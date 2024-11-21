import Image from "next/image";

import { GetProductsDocument } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 8 }}>
      {data.getLandingProducts.products?.map((product) => (
        <Grid size={2} key={product.id}>
          <Box height={100} width={100} position="relative">
            <Image
              src={product.images[0].secure_url!}
              fill
              alt={product.title || "Product"}
            />
          </Box>
          <Typography variant="subtitle1" gutterBottom noWrap>
            Test Product X
          </Typography>

          <Typography variant="subtitle2" gutterBottom noWrap>
            {`${product.price[0]} €`}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
