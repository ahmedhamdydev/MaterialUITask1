import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import NavBar from "./components/NavBar/NavBar";
import imgOne from "./assets/imageOne.jpg";
import imgTwo from "./assets/imageTwo.png";
import imgThree from "./assets/imageThree.svg";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Developers from "./components/Developers/Developers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <InfoSection
        title="One-on-one live mentorship"
        items={[
          {
            text: "Debug with the help of an expert",
            icon: <BugReportIcon sx={{ color: "#71a3c1", marginRight: 1 }} />,
          },
          {
            text: "Personalize your learning experience",
            icon: <PersonIcon sx={{ color: "#71a3c1", marginRight: 1 }} />,
          },
          {
            text: "Get answers to complex problems",
            icon: <BadgeIcon sx={{ color: "#71a3c1", marginRight: 1 }} />,
          },
        ]}
        image={imgOne}
        reverse={false}
      >
        Explore Mentorship
      </InfoSection>
      <InfoSection
        title="Project-based freelance work"
        items={[
          {
            text: "Find experts for on-demand code-review",
            icon: <CodeIcon sx={{ color: "#71a3c1", marginRight: 1 }} />,
          },
          {
            text: "Build features for your existing product",
            icon: <BuildIcon sx={{ color: "#71a3c1", marginRight: 1 }} />,
          },
          {
            text: "Turn your idea into an MVP",
            icon: (
              <RocketLaunchIcon sx={{ color: "#71a3c1", marginRight: 1 }} />
            ),
          },
        ]}
        image={imgTwo}
        reverse={true}
      >
        Find a Freelancer
      </InfoSection>
      <InfoSection
        title="Hiring for a bigger project?"
        items={[
          {
            text: "Arc helps you find a senior developer for both permanent full-time roles and 40+hour contract projects",
          },
          {
            text: (
              <a
                href="https://arc.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#71a3c1",
                }}
              >
                Visit Arc to learn more{" "}
                <ArrowForwardIcon sx={{ marginLeft: 1 }} />{" "}
              </a>
            ),
          },
        ]}
        image={imgThree}
        reverse={true}
      ></InfoSection>
      <Developers />
      <Footer />
    </>
  );
}

export default App;
