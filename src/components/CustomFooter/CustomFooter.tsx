import { useContext, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";


export default function CustomFooter() {
    return (
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
                <Grid container direction="column" alignItems="center">
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
                </Grid>
            </Container>
        </Box>
    );
}