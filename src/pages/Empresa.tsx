import { FormControl, Grid, Paper, TextField } from "@mui/material";
import { CustomForm } from "../components/CustomForm/CustomForm";
import { CadastroEmpresaForm } from "../components/CustomForm/CadastroEmpresaForm";

export function Empresa() {
  // https://mui.com/material-ui/react-grid/
  // https://mui.com/material-ui/customization/breakpoints/
  // documentation to understand breakpoint system

  return (
    <Grid
      // container
      spacing={{ xs: 0, md: 0 }}
      gap={{ xs: 2, md: 5 }}
      py={1}
      px={1}
      style={{ marginTop: "65px" }}
    >
      <Grid item xs={12} md={12}>
        <CadastroEmpresaForm />
      </Grid>
    </Grid>


  //        </Grid >
  //   <Grid
  //     container
  //     spacing={{ xs: 0, md: 2 }}
  //     gap={{ xs: 2, md: 0 }}
  //     py={10}
  //     px={{lg: 40, md: 20, sm: 4, xs: 2}}
  //     width={"100%"}
  //   >
  //     <Grid item xs={12} md={12}>
  //       <CadastroEmpresaForm />
  //     </Grid>
  //   </Grid>
   );
}