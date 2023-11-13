import { ReactElement, useState } from "react";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { BorderAll, FormatAlignJustify, Height } from "@mui/icons-material";
import zapIcon from '../../assets/ZapVector.png';
import "./BusinessCard.css";

type TCustomBusinessCardProps = {
    icon: ReactElement<typeof CustomIcon>;
    name: string;
    description: string;
    services: string;
    phoneNumber: number;
    address: string;
    logo: string;
};




export function CustomBusinessCard(props: TCustomBusinessCardProps) {

    const [isReadMoreDescription, setIsReadMoreDescription] = useState(true);
    const [isReadMoreServices, setIsReadMoreServices] = useState(true);

    const toggleReadMoreDescription = () => {
        setIsReadMoreDescription(!isReadMoreDescription);
    }

    const toggleReadMoreServices = () => {
        setIsReadMoreServices(!isReadMoreServices);
    }

    const handleClick = (phoneNumber: number) => {
        // Appending the phone number to the URL
        let url = `https://web.whatsapp.com/send?phone=+55${phoneNumber}`;
        

        // Appending the message to the URL by encoding it
        url += `&text=${encodeURIComponent('Olá! Estou entrando em contado para saber mais sobre os serviços oferecidos.')}&app_absent=0`;

        // Open our newly created URL in a new tab to send the message
        window.open(url);
    }

    return (
        <Paper elevation={0} sx={{ borderRadius: 1 }}>
            <Box p={0}>
                <div
                    style={{
                        width: '100%',
                        height: '52px',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                        backgroundColor: '#015F43',
                    }}
                />

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 'calc(0px - 1.5rem - 6px)',

                }}>

                    <img
                        style={{
                            width: '4rem',
                            height: '4rem',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            border: '2px solid #00B37E',
                            padding: '5px 5px',
                            backgroundClip: 'content-box, padding-box',
                            backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%), linear-gradient(to bottom, transparent 0%, #000000 100%)'
                        }}
                        src={props.logo}
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
                        minHeight: '100px'
                    }}
                >

                    <div style={{ textAlign: "justify" }}>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color={"text.primary"}
                            gutterBottom
                        >
                            {isReadMoreDescription ? props.description.slice(0, 150) : props.description}
                            <span onClick={toggleReadMoreDescription} className="read-or-hide">
                                {((isReadMoreDescription && props.description.length > 50) ? " ...ver mais" : " " ) }
                                {((!isReadMoreDescription && props.description.length > 50) ? " ...ver menos" : " " ) }                                
                            </span>
                            
                        </Typography>

                    </div>
                </div>
                <Divider />
                <div style={{ textAlign: "center", padding: 10, minHeight: '140px' }}>
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
                        <Typography
                            align="justify"
                            sx={{ fontSize: 14 }}
                            color={"text.primary"}
                            gutterBottom

                        >                           
                            {isReadMoreServices ? props.services.slice(0, 150) : props.services}                            
                            <span onClick={toggleReadMoreServices} className="read-or-hide">
                                {((isReadMoreServices && props.services.length > 50) ? " ...ver mais" : " " ) }
                                {((!isReadMoreServices && props.services.length > 50) ? " ...ver menos" : " " ) }                                
                            </span>
                        </Typography>

                     
                    </Typography>

                </div>
                <Divider />
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} mb={2} p={1}>
                    <Button
                        style={{ border: '1px solid #00B37E', color: '#00B37E' }}
                        type="submit"
                        color="secondary"
                        onClick={() => handleClick(props.phoneNumber)}
                    >
                        <img src={zapIcon} alt="Conexão RH - Lagoinha" style={{ width: "16px", height: "17px", padding: '5px' }} />
                        Entrar em contato
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}
