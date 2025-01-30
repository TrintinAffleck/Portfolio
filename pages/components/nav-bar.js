import { AppBar, Box, Toolbar, Link } from "@mui/material"

export default function NavBar() {
  return (
    <Box>
    <AppBar sx={{backgroundColor: "lightgray", position: "static"}}>
    
    <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
    <Link href="about">About</Link>
    <Link href="projects">Projects</Link>
    <Link>Work</Link>
    </Toolbar>
    </AppBar>
    </Box>
  )
  
}