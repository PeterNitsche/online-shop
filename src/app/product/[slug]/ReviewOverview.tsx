import { Rating, Stack, Typography } from "@mui/material";

interface ReviewOverviewProps {
  totalReviews?: number | null;
  averageRating?: number | null;
}

export function ReviewOverview({
  totalReviews,
  averageRating,
}: ReviewOverviewProps) {
  return (
    <Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="subtitle1"> {`${averageRating} / 5`}</Typography>
        <Rating
          name="product-rating-summary"
          disabled={!totalReviews}
          readOnly
          value={averageRating}
        />
      </Stack>
      <Typography variant="caption">
        {`${totalReviews} ratings and reviews`}
      </Typography>
    </Stack>
  );
}
