import { ReactElement } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { CustomIcon } from "../CustomIcon/CustomIcon";

type TCustomInformativeProps = {
  icon: ReactElement<typeof CustomIcon>;
  title: string;
  value: string;
  category: string;

};

export function CustomInformative(props: TCustomInformativeProps) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 2 }}>
      <Box p={2}>
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
