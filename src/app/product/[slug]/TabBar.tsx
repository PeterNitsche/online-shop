'use client';

import { useState } from 'react';

import { Box, Button, Divider, Stack, Tab, Tabs } from '@mui/material';

import { AddReviewForm } from './AddReviewForm';

const tabItems = ['Description', 'Reviews'] as const;
type TabItemsType = (typeof tabItems)[number];

interface TabBarProps {
  productId: string;
  reviewOverviewComponent: React.ReactNode;
  reviewsComponent: React.ReactNode;
  descriptionComponent: React.ReactNode;
}

export default function TabBar({
  productId,
  reviewOverviewComponent,
  reviewsComponent,
  descriptionComponent,
}: TabBarProps) {
  const [selection, setSelection] = useState<TabItemsType>('Description');
  const [showNewReview, setShowNewReview] = useState<boolean>(false);

  const onTabSelection = (event: React.SyntheticEvent, newValue: TabItemsType) => {
    setSelection(newValue);
    setShowNewReview(false);
  };

  const onAddReview = () => {
    setShowNewReview((prev) => !prev);
  };

  let tabContent = undefined;

  if (selection === 'Description') {
    tabContent = descriptionComponent;
  } else if (selection === 'Reviews' && !showNewReview) {
    tabContent = (
      <Stack spacing={2} alignItems={'start'}>
        {reviewOverviewComponent}
        <Button onClick={onAddReview} variant="outlined">
          Add new review
        </Button>
        <Divider />
        {reviewsComponent}
      </Stack>
    );
  } else if (selection === 'Reviews' && showNewReview) {
    tabContent = (
      <Stack spacing={2} alignItems={'start'}>
        {reviewOverviewComponent}
        <Button onClick={onAddReview} variant="outlined">
          Show other reviews
        </Button>
        <AddReviewForm productId={productId} reviewSubmitted={() => setShowNewReview(false)} />
      </Stack>
    );
  }

  return (
    <>
      <Box sx={{ borderBottom: 3, borderColor: 'divider', marginBottom: '6px' }}>
        <Tabs value={selection} onChange={onTabSelection} aria-label="Product Detail Navigation">
          {tabItems.map((tabItem) => (
            <Tab key={tabItem} value={tabItem} label={tabItem} />
          ))}
        </Tabs>
      </Box>
      {tabContent}
    </>
  );
}
