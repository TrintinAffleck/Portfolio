import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
 
  return (
    
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <AppBar sx={{backgroundColor: "lightgray"}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link href="about">About</Link>
          <Link>Projects</Link>
          <Link>Work</Link>
        </Toolbar>
      </AppBar>
    </Box>
    
    
  );
}
