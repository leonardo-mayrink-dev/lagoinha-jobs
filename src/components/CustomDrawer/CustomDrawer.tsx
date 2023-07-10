import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Home from "@mui/icons-material/Home";
import Feed from "@mui/icons-material/Feed";
import Cable from "@mui/icons-material/Cable";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ThemeContext, getTheme } from "../../Theme";
import { useContext } from "react";
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: 8,
  paddingLeft: 12,
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: "end",
}));

export function CustomDrawer({
  isDrawerOpen,
  onCloseDrawer,
  handleModeChange,
}: {
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
  handleModeChange: () => void;
}) {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <Drawer variant="temporary" open={isDrawerOpen}>
      <DrawerHeader>
        <IconButton onClick={onCloseDrawer}>
          <Close />
        </IconButton>
      </DrawerHeader>
      <Box
        sx={{ width: 270, height: '100%' }}
        display={'flex'}
        flexDirection={'column'}
        role="presentation"
        onClick={onCloseDrawer}
        onKeyDown={onCloseDrawer}
        justifyContent={"space-between"}
      >
        <List>
          <ListItem
            key={"home"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/"
          >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Home Screen"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"empresa"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/empresa"
          >
            <ListItemButton>
              <ListItemIcon>
                <Cable />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Empresa"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"candidato"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/candidato"
          >
            <ListItemButton>
              <ListItemIcon>
                <Cable />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Candidato"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"vaga"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/vaga"
          >
            <ListItemButton>
              <ListItemIcon>
                <Cable />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Vaga"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"requests"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/requests"
          >
            <ListItemButton>
              <ListItemIcon>
                <Cable />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Requests Screen"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"forms"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/forms/"
          >
            <ListItemButton>
              <ListItemIcon>
                <Feed />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Form Screen"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"businessPanel"}
            sx={{ textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/painelnegocios/"
          >
            <ListItemButton>
              <ListItemIcon>
                <Feed />
              </ListItemIcon>
              <ListItemText color="text.main" primary={"Painel de Negócios"} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            key={"forms"}
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton onClick={toggleMode}>
              <ListItemIcon>
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </ListItemIcon>
              <ListItemText color="text.main" primary={`${mode} mode`} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
