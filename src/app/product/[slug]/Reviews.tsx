import { GetProductReviewsQuery } from '@/__generated__/graphql';
import { Grid2 as Grid, Stack, Typography } from '@mui/material';

import { Review } from './Review';

type ReviewList = GetProductReviewsQuery['getProductReviews']['reviewList'];
interface ReviewsProps {
  reviewList: ReviewList;
}
export default async function Reviews({ reviewList }: ReviewsProps) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">All reviews</Typography>
      <Grid container spacing={4} columns={{ xs: 2, sm: 4, md: 6 }}>
        {...reviewList.map((review) => (
          <Grid key={review.id}>
            <Review review={review} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
