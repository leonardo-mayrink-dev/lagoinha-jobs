import { AppBar, Box, Button, Divider, FormControl, Grid, IconButton, InputBase, Paper, TextField, Typography } from "@mui/material";

import { MyLinePlot } from "../components/CustomPlot/MyLinePlot";
import { MyBarPlot } from "../components/CustomPlot/MyBarPlot";
import { MyTodoTable } from "../components/CustomTable/MyTodoTable";
import { ChatInformative } from "../components/CustomInformative/ChatInformative";
import { MyRegularTable } from "../components/CustomTable/MyRegularTable";
import styled from "@emotion/styled";
import { CustomInformative } from "../components/CustomInformative/CustomInformative";
import { CustomIcon } from "../components/CustomIcon/CustomIcon";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SellIcon from '@mui/icons-material/Sell';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FABMenu from "../components/CustomFab/CustomFab";
import { CustomBusinessCard } from "../components/CustomCard/BusinessCard";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { Datum, TBusiness, TBusiness2 } from "../types/TBusiness";
import { CustomForm } from "../components/CustomForm/CustomForm";
import InputAdornment from '@mui/material/InputAdornment';
import { ThemeContext, getTheme } from "../Theme";

export function BusinessPanel() {
    // https://mui.com/material-ui/react-grid/
    // https://mui.com/material-ui/customization/breakpoints/
    // documentation to understand breakpoint system

    const [businessList, setBusinessList] = useState<TBusiness2>();
    const [businessLitFiltered, setBusinessListFiltered] = useState<Datum[] | undefined>();
    const [searchTerm, setSearchTerm] = useState('');
    const [descricaoNegocio, setDescricaoNegocio] = useState("");

    const { mode } = useContext(ThemeContext);

    useEffect(() => {

        // Api.get<TBusiness[]>("https://my-json-server.typicode.com/leonardo-mayrink-dev/mockdata/business")
        // Promisse
        getDataFromApi()
            .then(response => {
                // console.log(response.data);
                setBusinessList(response.data);
                setBusinessListFiltered(response.data.data);
            })

    }, []);

    useEffect(() => {
        handleSearchBusinesses(searchTerm);
    }, [searchTerm])


    const getDataFromApi = () => {
        return Api.get<TBusiness2>("https://gestao.crielagoinhario.com.br/api/empresas");
    }

    const handleSearchBusinesses = (searchTerm: string): void => {

        console.log('entrou no metodo search');

        var lista = businessList?.data;

        const filtered = lista?.filter((item) =>
            item.negocio_descricao.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log(filtered);

        setBusinessListFiltered(filtered);

        console.log(businessList);

    }

    return (

        <>
            <AppBar
                position="fixed"
                elevation={20}
                color="transparent"                
                sx={{
                    boxShadow: "0px -0.2em 0.5em grey",
                    backdropFilter: "blur(18px)",
                    borderBottom: `1px solid ${getTheme(mode).palette.divider}`,
                    marginTop: "60px",
                }}
            >
                <Grid fontStyle={{}} alignItems="center" justifyContent="center" px={{ lg: 40, md: 20, sm: 4, xs: 0 }}>
                    <Paper
                        component="form"
                        // sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', width: 300}}
                        sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', margin: "5px 5px" }}


                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="BUSCAR OPORTUNIDADES"
                            inputProps={{ 'aria-label': 'BUSCAR OPORTUNIDADES' }}
                            value={descricaoNegocio}
                            onChange={(e) => setDescricaoNegocio(e.target.value)}
                        />
                        <InputAdornment position="end">
                            <Button variant="text" onClick={() => handleSearchBusinesses(descricaoNegocio)} style={{ color: 'white', backgroundColor: '#349e34', borderStartStartRadius: '0px', borderEndEndRadius: '2px' }}>BUSCAR</Button>
                        </InputAdornment>
                    </Paper>
                </Grid>
            </AppBar>

            <Grid
                // container
                spacing={{ xs: 0, md: 0 }}
                gap={{ xs: 2, md: 5 }}
                py={10}
                // py={0}
                px={3}
            // style={{border: "1px solid red", marginLeft: "1px"}}            
            >

                {/* <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: '80px', marginBottom: '20px' }} >
                    <Typography variant="h5" color={"text.primary"}>CRIE - OPORTUNIDADES</Typography>
                </Grid>

                <Grid fontStyle={{}} alignItems="center" justifyContent="center" px={{ lg: 40, md: 20, sm: 4, xs: 0 }}>
                    <Paper
                        component="form"
                        // sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', width: 300}}
                        sx={{ p: '2px 1px', display: 'flex', alignItems: 'center' }}


                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="BUSCAR OPORTUNIDADES"
                            inputProps={{ 'aria-label': 'BUSCAR OPORTUNIDADES' }}
                            value={descricaoNegocio}
                            onChange={(e) => setDescricaoNegocio(e.target.value)}
                        />
                        <InputAdornment position="end">
                            <Button variant="text" onClick={() => handleSearchBusinesses(descricaoNegocio)} style={{ color: 'white', backgroundColor: '#349e34', borderStartStartRadius: '0px', borderEndEndRadius: '2px' }}>BUSCAR</Button>
                        </InputAdornment>
                    </Paper>
                </Grid> */}

                <Grid container
                    spacing={{ xs: 0, md: 2 }}
                    gap={{ xs: 2, md: 0 }}
                    py={5}
                    px={0}
                    width={"100%"}>
                    {
                        businessLitFiltered?.map(business => {
                            return (
                                <Grid item xs={12} sm={12} md={4} lg={3} key={business.id}>
                                    <CustomBusinessCard
                                        key={business.id}
                                        name={business.negocio_nome}
                                        description={business.negocio_descricao}
                                        services={business.negocio_descricao}
                                        address={business.negocio_endereco}
                                        phoneNumber={business.negocio_tel_wapp}
                                        logo={business.url_logo}
                                        icon={
                                            <CustomIcon
                                                icon={<AttachMoneyIcon sx={{ color: "#fff" }} />}
                                                bottomColor="#6dca82"
                                                topColor="#58ced6"
                                            />
                                        }
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>





            </Grid >
        </>
    );
}