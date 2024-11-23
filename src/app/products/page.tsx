import Image from "next/image";
import Link from "next/link";

import { GetProductsDocument, GetProductsQuery } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid2 as Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

type Products = NonNullable<GetProductsQuery["getLandingProducts"]["products"]>;
type Product = Products[0];
interface ProductComponentProps {
  product: Product;
}

function ProductComponent({ product }: ProductComponentProps) {
  return (
    <Grid size={2}>
      <Card variant="outlined">
        <CardActionArea>
          <Link href={`product/${product.slug}`}>
            <CardContent>
              <Stack>
                <Box height={150} width={150} position="relative">
                  <Image
                    src={product.images[0].secure_url!}
                    fill
                    objectFit="contain"
                    alt={product.title || "Product"}
                  />
                </Box>
                <Typography variant="subtitle1" gutterBottom noWrap>
                  {product.title}
                </Typography>

                <Typography variant="subtitle2" gutterBottom noWrap>
                  {`${product.price[0]} €`}
                </Typography>

                <Rating
                  name="product-rating"
                  readOnly
                  disabled={!product.averageRating}
                  value={product.averageRating || null}
                />
              </Stack>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default async function Products() {
  const { data } = await getClient().query({ query: GetProductsDocument });

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 8 }}>
      {data.getLandingProducts.products?.map((product) => (
        <ProductComponent product={product} key={product.id} />
      ))}
    </Grid>
  );
}
