import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomDialog } from "../CustomDialog/CustomDialog";
import { LoginForm } from "../CustomForm/LoginForm";
import { ThemeContext, getTheme } from "../../Theme";
import { LogoDev, Padding } from "@mui/icons-material";
import { Container } from "@mui/material";
import logoImg from '../../assets/LagoinhaNiteroi_Branco-1536x864.png';

export default function CustomAppBar({
  drawerHandler,
}: {
  drawerHandler: () => void;
}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const loginCallback = () => {
    setIsLoginOpen(false);
  };

  const { mode } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }} px={2}>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${getTheme(mode).palette.divider}`,
        }}
      >

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: getTheme(mode).palette.text.primary }}
            onClick={drawerHandler}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            color={getTheme(mode).palette.text.primary}
            component="div"
            sx={{ flexGrow: 1 }}
          >

            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'end'}
              flexDirection={'row'}
            >
              <img src={logoImg} alt="dt money" style={{ width: "140px", height: "60px" }} />

            </Box>

          </Typography>

          <Button
            // color={getTheme(mode).palette.text.primary}
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button>
          <CustomDialog
            open={isLoginOpen}
            title="Enter your credentials"
            onClose={() => setIsLoginOpen(false)}
          >
            <LoginForm callback={loginCallback} />
          </CustomDialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
