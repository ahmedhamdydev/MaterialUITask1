import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ButtonAppBar() {
  const [anchorElMentorship, setAnchorElMentorship] = useState(null);
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorElFreelancing, setAnchorElFreelancing] = useState(null);

  const handleClick = (event, setter) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter) => {
    setter(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#004D40" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ComputerIcon
              sx={{ marginLeft: 2, marginRight: 1, color: "#00BCD4" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#00BCD4", fontWeight: "bold", letterSpacing: 1 }}
            >
              Codementor
            </Typography>

            <Button
              onClick={(event) => handleClick(event, setAnchorElMentorship)}
              sx={{
                color: "#00BCD4",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0, 188, 212, 0.1)" },
              }}
            >
              Mentorship <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElMentorship}
              open={Boolean(anchorElMentorship)}
              onClose={() => handleClose(setAnchorElMentorship)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                One-on-One Sessions
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                Group Mentorship
              </MenuItem>
            </Menu>

            <Button
              onClick={(event) => handleClick(event, setAnchorElHelp)}
              sx={{
                color: "#00BCD4",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0, 188, 212, 0.1)" },
              }}
            >
              Expert Help <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElHelp}
              open={Boolean(anchorElHelp)}
              onClose={() => handleClose(setAnchorElHelp)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Quick Support
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Code Review
              </MenuItem>
            </Menu>

            <Button
              onClick={(event) => handleClick(event, setAnchorElFreelancing)}
              sx={{
                color: "#00BCD4",
                marginLeft: 2,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0, 188, 212, 0.1)" },
              }}
            >
              Freelancing <ExpandMoreIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
            <Menu
              anchorEl={anchorElFreelancing}
              open={Boolean(anchorElFreelancing)}
              onClose={() => handleClose(setAnchorElFreelancing)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Find Jobs
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Hire Developers
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                color: "#00BCD4",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "rgba(0, 188, 212, 0.1)" },
              }}
            >
              Become a Mentor
            </Button>
            <Button
              sx={{
                color: "#00BCD4",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "rgba(0, 188, 212, 0.1)" },
              }}
            >
              Log In
            </Button>
            <Button
              sx={{
                color: "#004D40",
                backgroundColor: "#00BCD4",
                textTransform: "none",
                marginLeft: 2,
                "&:hover": { backgroundColor: "#B2EBF2" },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
