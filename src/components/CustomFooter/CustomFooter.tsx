import { useContext, useState } from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { ThemeContext, getTheme } from "../../Theme";
import logoImgBranco from '../../assets/LagoinhaNiteroi_Branco-1536x864.png';
import logoImgPreto from '../../assets/LagoinhaNiteroi_Preto-1536x864.png';
import facebookIcon from '../../assets/icons/FacebookIcon.png';
import instaIcon from '../../assets/icons/InstaIcon.png';
import ytIcon from '../../assets/icons/YTIcon.png';


export default function CustomFooter() {
    const { mode } = useContext(ThemeContext);
    return (
        // <Box
        //     sx={{
        //         width: "100%",
        //         height: "auto",
        //         backgroundColor: "background.main",
        //         paddingTop: "1rem",
        //         paddingBottom: "1rem",
        //     }}
        // >
        //     <Container maxWidth="lg">
        //         <Grid container direction="column" alignItems="center">
        //             <Grid item xs={12}>
        //                 <Typography color="text.primary" variant="h5">
        //                     React Starter App
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12}>
        //                 <Typography color="text.secondary" variant="subtitle1">
        //                     {`Copyright © ${new Date().getFullYear()} Igreja Lagoinha Niterói`}
        //                 </Typography>
        //             </Grid>
        //         </Grid>
        //     </Container>
        // </Box>
        ///////////////////////////
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "background.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                {/* <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography color="text.primary" variant="h5">
                        React Starter App
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="text.secondary" variant="subtitle1">
                        {`Copyright © ${new Date().getFullYear()} Igreja Lagoinha Niterói`}
                    </Typography>
                </Grid>
            </Grid> */}



                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={2} sm={4} md={4}>
                            <div style={{ textAlign: "left" }}>
                                <img src={mode === "light" ? logoImgPreto : logoImgBranco} alt="Conexão RH - Lagoinha" style={{ width: "180px", height: "100px" }} />
                            </div>
                            <div style={{ textAlign: "left", marginTop: "-15px" }}>
                            <img src={facebookIcon} alt="Conexão RH - Lagoinha" style={{ width: "20px", height: "20px", margin: "3px 3px" }} />
                            <img src={instaIcon} alt="Conexão RH - Lagoinha" style={{ width: "20px", height: "20px", margin: "3px 3px" }} />
                            <img src={ytIcon} alt="Conexão RH - Lagoinha" style={{ width: "20px", height: "20px", margin: "3px 3px" }} />

                            </div>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <div style={{ textAlign: "left" }}>
                                <Link href="https://construindoporalgomaior.com.br/" style={{color: `${getTheme(mode).palette.text.primary}`}}>CONSTRUINDO</Link><br/>
                                <Link href="https://oferta.lagoinhario.com.br/" style={{color: `${getTheme(mode).palette.text.primary}`}}>OFERTA</Link><br/>
                                <Link href="https://lagoinhaniteroi.com.br/servir/" style={{color: `${getTheme(mode).palette.text.primary}`}}>SERVIR</Link><br/>
                                <Link href="https://lagoinhaniteroi.com.br/" style={{color: `${getTheme(mode).palette.text.primary}`}}>IGREJA</Link><br/>
                                <Link href="https://www.youtube.com/c/LagoinhaTv" style={{color: `${getTheme(mode).palette.text.primary}`}}>TV</Link><br/>
                                {/* <Typography sx={{ fontSize: 14 }}
                                    color={"text.primary"}
                                    gutterBottom>                                   
                                </Typography> */}
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <div style={{ textAlign: "right" }}>
                                <Typography sx={{ fontSize: 14 }}
                                    color={"text.primary"}
                                    gutterBottom>
                                    (21) 3254-3417 | (21) 3254-3418
                                    secretaria@lagoinhaniteroi.com.br
                                </Typography>
                            </div>
                        </Grid>

                    </Grid>
                </Box>


            </Container>
        </Box>
    );
}