import { AppBar, Typography, Box } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';

const drawerWidth = 140;

function App() {
  const [currentPage, setCurrentPage] = useState('Home Page');

  return (
    <Box>
      <Sidebar drawerWidth={drawerWidth} setCurrentPage={setCurrentPage} />
      <AppBar
        color="primary"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          p: 1,
          pl: 2,
        }}
      >
        <Typography variant="h5">{currentPage}</Typography>
      </AppBar>
      <Box sx={{ m: 6, ml: `${drawerWidth}px`, p: 2 }} component="h1">
        TESTING
      </Box>
    </Box>
  );
}

export default App;
