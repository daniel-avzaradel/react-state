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
        }}
      >
        <Typography variant="h5">{currentPage}</Typography>
      </AppBar>
      <h2>test</h2>
    </Box>
  );
}

export default App;
