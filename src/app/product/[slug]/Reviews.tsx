import { GetProductReviewsDocument } from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { Divider, Stack, Typography } from "@mui/material";

import { Review } from "./Review";
import { ReviewOverview } from "./ReviewOverview";

interface ReviewsProps {
  productId?: string;
}
export default async function Reviews({ productId }: ReviewsProps) {
  if (!productId) {
    return undefined;
  }

  const { data } = await getClient().query({
    query: GetProductReviewsDocument,
    variables: { productId },
  });

  const { reviewList: reviews, pageInfo: summary } = data.getProductReviews;
  return (
    <Stack spacing={1}>
      <Typography variant="h5">Customer reviews</Typography>
      <ReviewOverview
        averageRating={summary.avgRating}
        totalReviews={summary.totalReviews}
      />
      <Divider />
      {...reviews.map((review) => <Review key={review.id} review={review} />)}
    </Stack>
  );
}
