import { Container, Typography } from "@mui/material";
import NavBar from "./components/nav-bar";

export default function About()
{
  return (
    <>
      <main>
    <NavBar />
      <Container component="section">
        <Typography variant="p">p tag</Typography>
        
        <h1>About</h1>
      </Container>
    </main>
    </>
  )
}