import { format, parseISO } from "date-fns";

import {
  GetProductReviewsDocument,
  GetProductReviewsQuery,
} from "@/__generated__/graphql";
import { getClient } from "@/lib/client";
import { Avatar, Rating, Stack, Typography } from "@mui/material";

function getInitials(displayName?: string | null) {
  return (
    displayName
      ?.match(/(\b\S)?/g)
      ?.join("")
      .match(/(^\S|\S$)?/g)
      ?.join("")
      .toUpperCase() || "?"
  );
}

type Review = NonNullable<
  GetProductReviewsQuery["getProductReviews"]["reviewList"][0]
>;

interface ReviewProps {
  review: Review;
}

function Review({ review }: ReviewProps) {
  return (
    <>
      <Stack direction={"row"} spacing={1}>
        <Avatar>{getInitials(review.user?.displayName)}</Avatar>
        <Stack direction={"column"}>
          <Typography variant="body2">{`Reviewed by ${review.user?.displayName}`}</Typography>
          <Typography variant="body2">
            {format(parseISO(review.createdAt), "PPPpp")}
          </Typography>
        </Stack>
      </Stack>
      <Rating name="product-rating" readOnly value={review.rating} />
      <Typography variant="body1">{review.review}</Typography>
    </>
  );
}

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

  const reviews = data.getProductReviews.reviewList;
  return (
    <>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
}
