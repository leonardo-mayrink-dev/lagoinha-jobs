import { ReactElement } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { Height } from "@mui/icons-material";
import zapIcon from '../../assets/ZapVector.png';

type TCustomBusinessCardProps = {
    icon: ReactElement<typeof CustomIcon>;
    title: string;
    value: string;
    category: string;

};

// category="money"
// title="Income"
// value="R$ 12.350,00"

export function CustomBusinessCard(props: TCustomBusinessCardProps) {
    return (
        // <Paper elevation={0} sx={{ borderRadius: 2 }}>
        //   <Box p={2}>
        //     <div
        //       style={{
        //         display: "flex",
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //         padding: 16,
        //       }}
        //     >
        //       {props.icon}
        //       <div style={{ textAlign: "right" }}>
        //         <Typography
        //           sx={{ fontSize: 14 }}
        //           color={"text.disabled"}
        //           gutterBottom
        //         >
        //           {props.title}
        //         </Typography>
        //         <Typography variant="h5" color={"secondary"} component="div">
        //           {props.value}
        //         </Typography>
        //       </div>
        //     </div>
        //     <Divider />
        //     <Typography
        //       variant="overline"
        //       component="div"
        //       color="text.disabled"
        //       style={{ textAlign: "left" }}
        //       px={2}
        //     >
        //       {props.category}
        //     </Typography>
        //   </Box>
        // </Paper>
        /////////////////////////////////////
        <Paper elevation={0} sx={{ borderRadius: 1 }}>
            <Box p={0}>
                <div
                    style={{
                        width: '100%',
                        height: '52px',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                        backgroundColor: '#015F43'
                    }}                
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 'calc(0px - 1.5rem - 6px)',

                }}>
                    <img
                        style={{ width: '3rem', height: '3rem', borderRadius: '8px' }}
                        src={'https://avatars.githubusercontent.com/u/32936332?v=4'}
                    />
                    <strong style={{ padding: 10 }}>QMK Consulting</strong>

                </div>
                <Divider />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 10,
                    }}
                >

                    <div style={{ textAlign: "center" }}>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color={"text.primary"}
                            gutterBottom
                        >
                            Empresa de Consultoria em Tecnologia e Negócios.
                            Fazemos uma análise sistemática em todas as áreas da sua empresa para corrigir os pontos fracos e alavancar os fortes.
                        </Typography>

                    </div>
                </div>
                <Divider />
                <div style={{ textAlign: "center", padding: 10, }}>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color={"text.primary"}
                        gutterBottom
                    >
                        <Typography
                            sx={{ fontSize: 14 }}
                            color={"text.primary"}
                            gutterBottom
                        >
                            Serviços:
                        </Typography>

                        &#x2022; Software House<br />
                        &#x2022; Generative AI / Chatbots <br />
                        &#x2022; Business Intelligence <br/>
                        &#x2022; Data Analytics 
                    </Typography>

                </div>
                <Divider />
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} mb={2} p={1}>
                    <Button
                        style={{ border: '1px solid #00B37E', color: '#00B37E' }}
                        type="submit"
                        color="secondary"
                        >
                            <img src={zapIcon} alt="Conexão RH - Lagoinha" style={{ width: "16px", height: "17px", padding: '5px' }} />
                        Entrar em contato
                    </Button>
                </Box>         
            </Box>
        </Paper>
    );
}
