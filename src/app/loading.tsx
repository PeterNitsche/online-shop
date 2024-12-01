import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
