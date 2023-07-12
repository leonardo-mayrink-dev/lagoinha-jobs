import { ReactElement } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { Height } from "@mui/icons-material";
import zapIcon from '../../assets/ZapVector.png';

type TCustomBusinessCardProps = {    
    icon: ReactElement<typeof CustomIcon>;
    name: string;
    description: string;
    services: string;
    phoneNumber: string;
    contactName: string;
    address: string;

};



export function CustomBusinessCard(props: TCustomBusinessCardProps) {
    return (
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
                    <strong style={{ padding: 10 }}>{props.name}</strong>

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
                            {props.description}                    
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
                            {props.services.split('-').map(item =>{
                                return (
                                    <>&#x2022; {item} <br /></>
                                )
                            })} 
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
