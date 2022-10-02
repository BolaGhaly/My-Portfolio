import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import GA_Event from "./GA_Event";

const navItems = ["Home", "About", "Skills", "Projects", "Contact Me"];
const navHRefs = ["#home", "#about", "#skills", "#projects", "#contact-me"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", width: "200px" }}>
      <h1 className="navbar-name-black">BG</h1>
      <List sx={{ padding: "0" }} onClick={handleDrawerToggle}>
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
      </List>
    </Box>
  );

  return (
    <nav>
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
            <h1 className="navbar-name-white">BG</h1>
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
    </nav>
  );
};

export default Navbar;
