import { GetProductDocument, GetProductSlugsDocument } from '@/__generated__/graphql';
import { getClient } from '@/lib/client';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import { Stack, Typography } from '@mui/material';

import { MediaCarousel } from './MediaCarousel';
import Reviews from './Reviews';
import TabBar from './TabBar';

interface ProductProps {
  params: Promise<{ slug: string }>;
}

export default async function Product({ params }: ProductProps) {
  const { slug } = await params;
  const { data } = await getClient().query({
    query: GetProductDocument,
    variables: { slug },
  });

  const product = data.getProductBySlug;

  const imageUrls = product.images
    .map((image) => image.secure_url)
    .filter((url) => url !== undefined && url !== null);

  return (
    <>
      <MediaCarousel
        videoUrl={product.video?.secure_url}
        imageUrls={imageUrls}
        productTitle={product.title}
      />
      {product.title && <Typography variant="h6">{product.title}</Typography>}
      {product.brand && <Typography variant="subtitle1">{`By ${product.brand}`}</Typography>}

      {product.price && (
        <Stack direction="row" spacing={1} alignItems="center">
          <SellTwoToneIcon />
          <Typography variant="subtitle2">{`${product.price[0]} ${product.currency}`}</Typography>
        </Stack>
      )}
      {product.inStock === true && (
        <Stack direction="row" spacing={1} alignItems="center">
          <CheckCircleTwoToneIcon />
          <Typography variant="subtitle2">In stock!</Typography>
        </Stack>
      )}
      {product.inStock === false && (
        <Stack direction="row" spacing={1} alignItems="center">
          <CancelTwoToneIcon />
          <Typography variant="subtitle2">Out of stock!</Typography>
        </Stack>
      )}
      <TabBar
        descriptionComponent={<Typography>{product.description}</Typography>}
        reviewsComponent={<Reviews productId={product.id!} />}
      />
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: GetProductSlugsDocument,
  });

  const slugs = data.getLandingProducts.products?.map((product) => ({
    slug: product.slug,
  }));

  return slugs || [];
}
