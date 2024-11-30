import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { ReviewOverview } from './ReviewOverview';

describe('ReviewOverview', () => {
  it('renders the average rating as text and as stars', () => {
    const { getByText, getAllByTestId } = render(<ReviewOverview averageRating={3} />);

    expect(getByText('3 / 5')).toBeInTheDocument();

    const filledStars = getAllByTestId('StarIcon');
    const unfilledStars = getAllByTestId('StarBorderIcon');
    expect(filledStars).toHaveLength(3);
    expect(unfilledStars).toHaveLength(2);
  });

  it('renders ? and empty stars if no average rating is given', () => {
    const { getByText, getAllByTestId } = render(<ReviewOverview />);

    expect(getByText('? / 5')).toBeInTheDocument();

    const unfilledStars = getAllByTestId('StarBorderIcon');
    expect(unfilledStars).toHaveLength(5);
  });

  it('renders the total review number as text', () => {
    const { getByText } = render(<ReviewOverview totalReviews={12} />);
    expect(getByText('12 ratings and reviews')).toBeInTheDocument();
  });

  it('renders no reviews text if no review number is given', () => {
    const { getByText } = render(<ReviewOverview />);
    expect(getByText('no reviews yet')).toBeInTheDocument();
  });
});
