'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button, FormHelperText, Rating, Stack, TextField, Typography } from '@mui/material';

import { saveReview } from './actions';

interface Inputs {
  rating: string;
  review: string;
}

interface AddReviewFormProps {
  productId: string;
  reviewSubmitted: () => void;
}

export function AddReviewForm({ productId, reviewSubmitted }: AddReviewFormProps) {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);

  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit({ rating, review }: Inputs) {
    await saveReview({
      productId,
      rating: Number(rating),
      review,
    });
    setSubmissionSuccessful(true);
    setTimeout(reviewSubmitted, 700);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>
        <Typography variant="body1">
          By submitting a review, you agree that it will be public and associated with your account.
        </Typography>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <Rating
              onChange={onChange}
              onBlur={onBlur}
              emptyIcon={
                <StarBorderIcon fontSize="inherit" color={errors.rating ? 'error' : undefined} />
              }
            />
          )}
          {...register('rating', {
            required: { value: true, message: 'Please set a rating' },
          })}
        />
        {errors.rating && <FormHelperText error>{errors.rating.message}</FormHelperText>}
        <TextField
          label="Share your experience"
          multiline
          rows={4}
          error={!!errors.review}
          helperText={errors.review?.message}
          {...register('review', { required: { value: true, message: 'Please enter a review' } })}
        />
        <Button
          type="submit"
          variant="contained"
          color={submissionSuccessful ? 'success' : undefined}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
