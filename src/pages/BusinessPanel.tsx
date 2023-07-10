import { Grid } from "@mui/material";

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

export function BusinessPanel() {
    // https://mui.com/material-ui/react-grid/
    // https://mui.com/material-ui/customization/breakpoints/
    // documentation to understand breakpoint system
    return (
        <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            gap={{ xs: 2, md: 0 }}
            py={10}
            px={2}
            width={"100%"}
            
        >
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <CustomBusinessCard
                    category="money"
                    title="Income"
                    value="R$ 12.350,00"
                    icon={
                        <CustomIcon
                            icon={<AttachMoneyIcon sx={{ color: "#fff" }} />}
                            bottomColor="#6dca82"
                            topColor="#58ced6"
                        />
                    }
                />
            </Grid>
            

        </Grid>
    );
}