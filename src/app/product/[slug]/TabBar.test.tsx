import '@testing-library/jest-dom';

import { fireEvent, render, within } from '@testing-library/react';

import TabBar from './TabBar';

describe('TabBar', () => {
  function renderTabBar() {
    const reviewComponent = <div data-testid="reviewComponent" />;
    const descriptionComponent = <div data-testid="descriptionComponent" />;
    return render(
      <TabBar descriptionComponent={descriptionComponent} reviewsComponent={reviewComponent} />,
    );
  }

  it('renders two tabs', () => {
    const { getAllByRole } = renderTabBar();
    const tabs = getAllByRole('tab');
    expect(tabs).toHaveLength(2);
    const descriptionTab = within(tabs.at(0)!).getByText('Description');
    expect(descriptionTab).toBeDefined();
    const reviewTab = within(tabs.at(1)!).getByText('Reviews');
    expect(reviewTab).toBeDefined();
  });

  it('selects the Description tab by default', () => {
    const { getByText } = renderTabBar();
    expect(getByText('Description')).toHaveAttribute('aria-selected', 'true');
  });

  it('renders descriptionComponent when Description tab is selected', () => {
    const { getByTestId, queryByTestId, getByText } = renderTabBar();
    fireEvent.click(getByText('Description'));

    const descriptionComponent = getByTestId('descriptionComponent');
    expect(descriptionComponent).toBeDefined();

    const reviewComponent = queryByTestId('reviewComponent');
    expect(reviewComponent).toBe(null);
  });

  it('renders reviewComponent when Review tab is selected', () => {
    const { getByTestId, queryByTestId, getByText } = renderTabBar();
    fireEvent.click(getByText('Reviews'));

    const reviewComponent = getByTestId('reviewComponent');
    expect(reviewComponent).toBeDefined();

    const descriptionComponent = queryByTestId('descriptionComponent');
    expect(descriptionComponent).toBe(null);
  });
});
