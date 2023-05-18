import { useState, useContext } from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MovieIcon from "@mui/icons-material/Movie";
import { ThemeContext, getTheme } from "../../Theme";
import { useNavigate } from "react-router-dom";

const FABMenu = () => {
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const actions = [
    {
      icon: <MovieIcon />,
      name: "New movie",
      onClick: () => navigate("/forms/"),
    },
    { icon: <AddIcon />, name: "Any other shortcut" },
    // { icon: <AddIcon />, name: "Print" },
    // { icon: <AddIcon />, name: "Share" },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "fixed",
        bottom: getTheme(mode).spacing(2),
        right: getTheme(mode).spacing(2),
      }}
      icon={<AddIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default FABMenu;
