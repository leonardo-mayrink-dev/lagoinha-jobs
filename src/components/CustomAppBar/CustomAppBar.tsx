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
import { Diversity1, LogoDev, Padding } from "@mui/icons-material";
import { Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import logoImgBranco from '../../assets/LagoinhaNiteroi_Branco-1536x864.png';
import logoImgPreto from '../../assets/LagoinhaNiteroi_Preto-1536x864.png';
import logoCrie from '../../assets/LogoCrie2.png';

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
        elevation={10}
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

          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'end'}
            flexDirection={'row'}
            sx={{ flexGrow: 1, mr: 3 }}
          >
            {/* <img src={logoImgBranco} alt="Conexão RH - Lagoinha" style={{ width: "140px", height: "60px" }} /> */}
            <img src={mode === "light" ? logoImgPreto : logoImgBranco} alt="Guia de Negócios - Lagoinha" style={{ width: "140px", height: "60px" }} />
            <Divider style={{ borderLeft: '1px solid white', height: '44px', marginBottom: '10px' }} />
            <img src={logoCrie} alt="Guia de Negócios - Lagoinha" style={{ width: "70px", height: "55px", marginBottom: '5px' }} />
          </Box>


          {/* <Button
            // color={getTheme(mode).palette.text.primary}
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button> */}
          <CustomDialog
            open={isLoginOpen}
            title="Enter your credentials"
            onClose={() => setIsLoginOpen(false)}
          >
            <LoginForm callback={loginCallback} />
          </CustomDialog>
        </Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        elevation={20}
        color="transparent"
        sx={{
          boxShadow: "0px -0.2em 0.5em grey",
          // backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${getTheme(mode).palette.divider}`,
          marginTop: "60px",
          backgroundColor: '#18181a',
        }}

      >
        {/* <Grid fontStyle={{}}        
        item xs={4} style={{textAlign: "center"}}
        justifySelf={"center"}
        
        sx={{border: "1px solid red"}}> */}

        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}

        >

          <List style={{
            display: 'flex',
            flexDirection: 'row',
            // padding: 0,
            // margin: 0,
            height: "40px",
            width: '100%',
            maxWidth: 560,
            border: '1px none yellow'

          }}>

            <ListItem
              key={"businessPanel"}
              sx={{ textDecoration: "none", color: "inherit", borderRight: '1px solid grey', padding: 0, justifyContent: 'center' }}
              component={Link}
              to="/painelnegocios/"
            >
              <ListItemButton sx={{ textAlign: 'center', maxWidth: '200px', }} >
                <ListItemText color="text.main" secondary={"Painel de Negócios"} />
              </ListItemButton>

            </ListItem>



            <ListItem
              key={"empresa"}
              sx={{ textDecoration: "none", color: "inherit", padding: 0, border: '1px none red', justifyContent: 'center', borderRight: '1px solid grey' }}
              component={Link}
              to="/empresa"
            >
              <ListItemButton sx={{ textAlign: 'center', maxWidth: '200px' }}>
                <ListItemText color="text.main" secondary={"Cadastro de Empresa"} />
              </ListItemButton>
            </ListItem>

            <ListItem
              key={"empresa"}
              sx={{ textDecoration: "none", color: "inherit", padding: 0, justifyContent: 'center' }}
            // component={Link}
            // to="/empresa"
            >
              <ListItemButton sx={{ textAlign: 'center', maxWidth: '200px' }}>
                <ListItemText color="text.main" secondary={"Sobre o CRIE"} />
              </ListItemButton>
            </ListItem>
          </List>

        </Box>


        {/* </Grid> */}
      </AppBar>
    </Box>
  );
}
