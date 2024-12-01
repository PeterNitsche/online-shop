import { Suspense } from 'react';

import { CircularProgress, Stack } from '@mui/material';

import ProductGrid from './ProductGrid';
import { SearchInput } from './SearchInput';

interface ProductsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Products({ searchParams }: ProductsProps) {
  const { query } = await searchParams;
  const searchTerm = typeof query === 'string' ? query : undefined;

  return (
    <Stack spacing={2} alignItems={'center'} paddingTop="10px">
      <SearchInput />
      <Suspense key={searchTerm || 'initialLoading'} fallback={<CircularProgress />}>
        <ProductGrid searchTerm={searchTerm} />
      </Suspense>
    </Stack>
  );
}
