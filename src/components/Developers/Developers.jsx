import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPython,
  faReact,
  faJava,
  faGithub,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

function AvatarCard({ imgSrc, developerName, jobTitle, tools }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        textAlign: "center",
        margin: "auto",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Avatar
        alt={developerName}
        src={imgSrc}
        sx={{ width: 80, height: 80, margin: "16px auto" }}
      />
      <CardContent sx={{ flex: "1" }}>
        <Typography variant="h6" color="#333">
          {developerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobTitle}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          {tools.map((tool, index) => (
            <Box key={index} sx={{ marginRight: 1 }}>
              <FontAwesomeIcon icon={tool.icon} size="lg" color="#005576" />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

function MyComponent() {
  const avatarCards = [
    {
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      developerName: "John Doe",
      jobTitle: "Frontend Developer",
      tools: [{ icon: faJsSquare }, { icon: faReact }],
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
      developerName: "Jane Smith",
      jobTitle: "Backend Developer",
      tools: [{ icon: faPython }, { icon: faJava }],
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
      developerName: "Mike Johnson",
      jobTitle: "Full Stack Developer",
      tools: [{ icon: faJsSquare }, { icon: faHtml5 }, { icon: faGithub }],
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
      developerName: "Sarah Williams",
      jobTitle: "Mobile Developer",
      tools: [{ icon: faReact }, { icon: faJsSquare }],
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      developerName: "Tom Brown",
      jobTitle: "Data Scientist",
      tools: [{ icon: faPython }, { icon: faGithub }],
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
      developerName: "Emily Davis",
      jobTitle: "DevOps Engineer",
      tools: [{ icon: faJava }, { icon: faGithub }],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        padding: 4,
        background: "linear-gradient(to right, #003C50, #005976, #006080)",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        Connect with 1200+ top developers anytime
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {avatarCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AvatarCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        textAlign="center"
        marginBottom={4}
        marginTop={4}
      >
        Start working with our developers
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#f5945c",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#e78f47",
          },
        }}
      >
        Get started
      </Button>
    </Box>
  );
}

export default MyComponent;
