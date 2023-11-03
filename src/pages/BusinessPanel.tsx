import { Box, Button, Divider, FormControl, Grid, IconButton, InputBase, Paper, TextField, Typography } from "@mui/material";

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
import { FormEvent, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { Datum, TBusiness, TBusiness2 } from "../types/TBusiness";
import { CustomForm } from "../components/CustomForm/CustomForm";
import InputAdornment from '@mui/material/InputAdornment';

export function BusinessPanel() {
    // https://mui.com/material-ui/react-grid/
    // https://mui.com/material-ui/customization/breakpoints/
    // documentation to understand breakpoint system

    const [businessList, setBusinessList] = useState<TBusiness2>();
    const [businessLitFiltered, setBusinessListFiltered] = useState<Datum[] | undefined>();
    const [searchTerm, setSearchTerm] = useState('');
    // const [businessLitFiltered, setBusinessListFiltered] = useState<Datum[]>();
    const [descricaoNegocio, setDescricaoNegocio] = useState("");



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

        <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            gap={{ xs: 2, md: 0 }}
            py={10}
            px={2}
            width={"100%"}
        >

            <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '2px 1px' }}>
                <Typography variant="h5" color={"text.primary"}>CRIE - OPORTUNIDADES</Typography>
            </Grid>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            // sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 1px', display: 'flex', alignItems: 'center', width: 450 }}
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
            </Grid>

            {/* <Grid item xs={12} sm={12} md={12} lg={12} style={{}}> */}
            {/* <TextField
                    style={{borderColor: 'red'}}
                    label="TextField"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant="outlined" style={{color: 'white', backgroundColor: '#349e34'}}>Button</Button>
                            </InputAdornment>
                        ),
                    }}
                />
                
                */}
            {/* </Grid> */}

            {
                businessLitFiltered?.map(business => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={3} key={business.id}>
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





        </Grid >
    );
}