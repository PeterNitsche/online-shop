"use client";

import { useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

const tabItems = ["Description", "Reviews"] as const;
type TabItemsType = (typeof tabItems)[number];

interface TabBarProps {
  reviewsComponent: React.ReactNode;
  descriptionComponent: React.ReactNode;
}

export default function TabBar({
  reviewsComponent,
  descriptionComponent,
}: TabBarProps) {
  const [value, setValue] = useState<TabItemsType>("Description");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: TabItemsType
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{ borderBottom: 3, borderColor: "divider", marginBottom: "6px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Product Detail Navigation"
        >
          {tabItems.map((tabItem) => (
            <Tab key={tabItem} value={tabItem} label={tabItem} />
          ))}
        </Tabs>
      </Box>
      {value === "Description" && descriptionComponent}
      {value === "Reviews" && reviewsComponent}
    </>
  );
}
