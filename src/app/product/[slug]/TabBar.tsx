"use client";
import { useParams, usePathname, useRouter } from 'next/navigation';

import { Box, Tab, Tabs } from '@mui/material';

export default function TabBar() {
  const router = useRouter();
  const selectedPath = usePathname();
  const { slug } = useParams();

  const paths = [`/product/${slug}/info`, `/product/${slug}/review`];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={selectedPath}
        onChange={handleChange}
        aria-label="Product Detail Navigation"
      >
        <Tab value={paths[0]} label="Info" />
        <Tab value={paths[1]} label="Reviews" />
      </Tabs>
    </Box>
  );
}
