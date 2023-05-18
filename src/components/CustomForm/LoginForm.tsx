import { FormControl, Grid, TextField } from "@mui/material";
import { CustomForm } from "./CustomForm";
import { FormEvent, useState } from "react";
import { Api } from "../../services/Api";

type TLoginForm = {
  callback: () => void;
};

export function LoginForm(props: TLoginForm) {
  // input controls
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // prevent form from default submit,
    // since we're going to control the inputs via state
    e.preventDefault();

    // actual validation and axios calls
    if(username.length > 0 && password.length > 0) {
      const payload = {
        username,
        password
      }
      Api.post("user/register", payload);
    }
    // run anything you want after submit handler ends
    props.callback();
  };

  // to create a custom form, check link below for input types
  // https://mui.com/material-ui/react-text-field/
  return (
    <CustomForm
      // props for form
      action="#"
      method="POST"
      onFormSubmit={handleSubmit}

      // grid props
      container
      gap={2}
      px={3}
      pb={4}
      justifyContent={'end'}
    >
      <FormControl sx={{ width: "100%" }}>
        <TextField
          name="username"
          label="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
    </CustomForm>
  );
}
