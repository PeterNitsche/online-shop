import Image from 'next/image';
import Link from 'next/link';

import { ProductListItemFragment } from '@/__generated__/graphql';
import {
    Box, Card, CardActionArea, CardContent, Grid2 as Grid, Rating, Stack, Typography
} from '@mui/material';

interface ProductProps {
  product: ProductListItemFragment;
}

export function Product({ product }: ProductProps) {
  return (
    <Grid size={2}>
      <Card variant="outlined">
        <CardActionArea>
          <Link href={`product/${product.slug}`}>
            <CardContent>
              <Stack>
                <Box height={150} width={"auto"} position="relative">
                  <Image
                    src={product.images[0].secure_url!}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={product.title || "Product"}
                  />
                </Box>
                <Typography variant="subtitle1" gutterBottom noWrap>
                  {product.title}
                </Typography>

                <Typography variant="subtitle2" gutterBottom noWrap>
                  {`${product.price[0]} ${product.currency}`}
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
