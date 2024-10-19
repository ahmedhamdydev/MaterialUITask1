import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        padding: 4,
        textAlign: "center",
        marginTop: "auto",
        borderTop: "1px solid #444",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        {[
          { icon: <Facebook />, link: "https://facebook.com" },
          { icon: <Twitter />, link: "https://twitter.com" },
          { icon: <Instagram />, link: "https://instagram.com" },
          { icon: <GitHub />, link: "https://github.com" },
          { icon: <LinkedIn />, link: "https://linkedin.com" },
          { icon: <YouTube />, link: "https://youtube.com" },
        ].map(({ icon, link }, index) => (
          <IconButton
            key={index}
            component={Link}
            href={link}
            target="_blank"
            color="inherit"
            sx={{ "&:hover": { color: "#f5945c" } }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 3 }}>
        {[
          {
            title: "Quick Links",
            links: ["About", "Services", "Contact"],
          },
          {
            title: "Resources",
            links: ["Blog", "FAQs", "Support"],
          },
          {
            title: "Company",
            links: ["Careers", "Press", "Investors"],
          },
        ].map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {section.title}
            </Typography>
            {section.links.map((link, idx) => (
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: "none", display: "block", mt: 1 }}
                key={idx}
              >
                {link}
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Ahmed Hamdy Mostafa. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
