import { Button, Grid, GridProps, Box } from "@mui/material";
import { FormEvent, ReactNode } from "react";

type TCustomForm = {
  action: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFormClear: () => void;
  children: ReactNode;
} & GridProps;



export function CustomForm(props: TCustomForm) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <form
          action={props.action}
          onSubmit={props.onFormSubmit}
          method={props.method}

        >
          <Grid {...props}>
            {props.children}
          </Grid>
          <Box display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'row'} mb={2} p={3} gap={3}>
          <Button type="button" color="warning" onClick={() => props.onFormClear()}>Limpar</Button>    
            <Button type="submit"  color="primary">Enviar</Button>
          </Box>
        </form>
        
      </Grid>
    </Grid>
  );
}
