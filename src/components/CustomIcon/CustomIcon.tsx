import { ReactElement, useContext } from "react";
import { Box } from "@mui/material";
import QuestionMark from "@mui/icons-material/QuestionMark";
import { ThemeContext, getTheme } from "../../Theme";

export function CustomIcon({
  topColor,
  bottomColor,
  icon,
}: {
  topColor: string;
  bottomColor: string;
  icon?: ReactElement;
}) {
  const { mode } = useContext(ThemeContext);

  return (
    <Box
      p={2}
      sx={{
        background: `linear-gradient(0deg, ${bottomColor}, ${topColor})`,
        borderRadius: 48,
        width: "1.5rem",
        height: "1.5rem",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      {icon ? icon : <QuestionMark fontSize="medium" />}
    </Box>
  );
}
