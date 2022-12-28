import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import GA_Event from "../utils/GA_Event";
import { FiMenu } from "react-icons/fi";
import { AiOutlineFileText } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";

const navItems = ["Home", "About", "Skills", "Projects", "Contact Me"];
const navHRefs = ["#home", "#about", "#skills", "#projects", "#contact-me"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", width: "200px" }}>
      <List sx={{ padding: "0" }} onClick={handleDrawerToggle}>
        <ListItemButton className="navbar-name-black">
          <a href="#home">BG</a>
        </ListItemButton>
        {navItems.map((item, i) => (
          <ListItem sx={{ padding: "0" }} key={item}>
            <ListItemButton
              sx={{ padding: "0" }}
              className="nav-listItemButton"
            >
              <a
                href={`${navHRefs[i]}`}
                className="hover-underline-animation"
                onClick={() =>
                  GA_Event(
                    "SM_Navbar - links",
                    `SM_Navbar - ${item} Clicked`,
                    `SM_Navbar - ${item}`
                  )
                }
              >
                {item}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
        <div className="drawer-icons">
          <a
            title="Resume"
            href="/Bola_Ghaly_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Bola_Ghaly_Resume"
            onClick={() =>
              GA_Event(
                "Navbar - Resume",
                "Navbar Resume Icon Clicked",
                "Navbar Resume Icon"
              )
            }
          >
            <AiOutlineFileText />
          </a>
          <a
            title="LinkedIn"
            href="https://linkedin.com/in/bolaghaly"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              GA_Event(
                "Navbar - LinkedIn",
                "Navbar LinkedIn Icon Clicked",
                "Navbar LinkedIn Icon"
              )
            }
          >
            <SiLinkedin />
          </a>
          <a
            title="GitHub"
            href="https://github.com/BolaGhaly"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              GA_Event(
                "Navbar - GitHub",
                "Navbar GitHub Button Clicked",
                "Navbar GitHub Button"
              )
            }
          >
            <ImGithub />
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar className="main-nav">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className="nav-IconButton"
          >
            <FiMenu
              onClick={() =>
                GA_Event(
                  "SM_Navbar - IconButton",
                  "SM_Navbar - IconButton Clicked",
                  "SM_Navbar - IconButton"
                )
              }
            />
          </IconButton>

          <div className="lg-nav">
            <button className="navbar-name-white">
              <a href="#home">BG</a>
            </button>

            <Box className="lg-nav-box">
              {navItems.map((item, i) => (
                <Button key={item}>
                  <a
                    href={`${navHRefs[i]}`}
                    className="hover-underline-animation"
                    onClick={() =>
                      GA_Event(
                        "LG_Navbar - links",
                        `LG_Navbar - ${item} Clicked`,
                        `LG_Navbar - ${item}`
                      )
                    }
                  >
                    {item}
                  </a>
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="box-drawer"
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
