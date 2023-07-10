import { ReactElement } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { Height } from "@mui/icons-material";

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
        <Paper elevation={0} sx={{ borderRadius: 1}}>
            <Box p={0}>
                <div
                    style={{
                        width: '100%',
                        height: '72px',
                        // objectFit: 'cover',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                        backgroundColor: '#015F43'
                    }}                    
                    // src={'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 'calc(0px - 1.5rem - 6px)'
                }}>                
                <img
                    style={{width: '3rem', height: '3rem', borderRadius: '8px'}}
                    src={'https://avatars.githubusercontent.com/u/32936332?v=4'}
                />
                <strong>QMK Consulting</strong>
                
            </div>
                <Divider />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 16,
                    }}
                >
                    {props.icon}
                    <div style={{ textAlign: "right" }}>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color={"text.disabled"}
                            gutterBottom
                        >
                            {props.title}
                        </Typography>
                        <Typography variant="h5" color={"secondary"} component="div">
                            {props.value}
                        </Typography>
                    </div>
                </div>
                <Divider />
                <Typography
                    variant="overline"
                    component="div"
                    color="text.disabled"
                    style={{ textAlign: "left" }}
                    px={2}
                >
                    {props.category}
                </Typography>
            </Box>
        </Paper>
    );
}
