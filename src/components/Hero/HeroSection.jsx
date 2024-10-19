import { Box, Typography, Button } from "@mui/material";
import heroImage from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        background: "linear-gradient(to right, #1F3B4D, #2E5061, #3B6679)", 
        textAlign: "center",
        position: "relative",
        padding: 4,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          color: "#E6EAF0",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)",
        }}
      >
        Ahmed Hamdy's Personalized Development Services
      </Typography>

      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: "#FF6F61",
          padding: "12px 24px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#FF8A75",
          },
        }}
      >
        GET STARTED NOW
      </Button>

      <Box
        component="img"
        src={heroImage}
        alt="Hero Illustration"
        sx={{
          width: "650px", 
          height: "auto",
          position: "absolute",
          bottom: -60,
          right: 0,
          transform: "translateX(10%)",
        }}
      />
    </Box>
  );
}
