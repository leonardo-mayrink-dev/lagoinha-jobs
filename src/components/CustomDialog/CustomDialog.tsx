import { ReactNode } from "react";
import { Dialog, DialogTitle } from "@mui/material";
export type TCustomDialog = {
  open: boolean;
  title: string;
  onClose: (value: string) => void;
  children: ReactNode;
};

export function CustomDialog(props: TCustomDialog) {
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle my={4} color={"secondary"}>
        {props.title || "My dialog"}
      </DialogTitle>
      {props.children}
    </Dialog>
  );
}
