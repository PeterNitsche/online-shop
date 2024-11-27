'use server';

import {
  AddProductReviewDocument,
  AddProductReviewMutationVariables,
} from '@/__generated__/graphql';
import { getClient } from '@/lib/client';

export async function saveReview(params: AddProductReviewMutationVariables) {
  await getClient().mutate({
    mutation: AddProductReviewDocument,
    variables: {
      ...params,
    },
  });
}
