import { Grid2 as Grid, Typography, Button } from "@mui/material";

export default function InfoSection({
  image,
  title,
  items,
  reverse,
  children,
}) {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "#F5F8FA", 
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            color: "#2A3A4B", 
          }}
        >
          {title}
        </Typography>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
                padding: "8px",
                borderRadius: "6px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#EBF0F5"; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {item.icon}
              <Typography
                variant="body1"
                sx={{
                  marginLeft: 1,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  color: "#4A4A4A", 
                }}
              >
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>

        {children && (
          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              backgroundColor: "#FF6F61", 
              boxShadow: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#FF8A75", 
              },
            }}
          >
            {children}
          </Button>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>
    </Grid>
  );
}
