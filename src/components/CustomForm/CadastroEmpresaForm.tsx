import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { CustomForm } from "./CustomForm";
import { useState, FormEvent } from "react";
import { Api } from "../../services/Api";
import { useGenres } from "../../hooks/useGenres";
import { useClassifications } from "../../hooks/useClassifications";
import { useLanguages } from "../../hooks/useLanguages";
import React from "react";
import { IMaskInput } from 'react-imask';
import { ThirteenMp } from "@mui/icons-material";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

const TextMaskCNPJCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCNPJCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00.000.000/0000-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);



export function CadastroEmpresaForm() {
  // This form is meant to add a new movie

  // informed title (WILL BE IN PAYLOAD)
  const [movieTitle, setMovieTitle] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [descricaoEmpresa, setDescricaoEmpresa] = useState("");
  // const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [siteEmpresa, setSiteEmpresa] = useState("");
  const [instagramEmpresa, setInstagramEmpresa] = useState("");
  const [formValidation, setFormValidation] = useState({
      hasError: false,
      msg : ''
  });



  // genre options
  const genreOptions = useGenres();

  // informed genre (WILL BE IN PAYLOAD)
  const [genre, setGenre] = useState<{
    label: string;
    value: string;
    id: number;
  } | null>(genreOptions ? genreOptions[0] : null);

  // informed avaliation (WILL BE IN PAYLOAD)
  const [avaliation, setAvaliation] = useState<number | null>(2);

  // classification options (can come from an endpoint)
  const classificationOptions = useClassifications();
  const [classification, setClassification] = useState<string | null>(
    classificationOptions ? classificationOptions[0].id : null
  );

  // informed available languages (WILL BE IN PAYLOAD)
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);

  // informed avaliation (WILL BE IN PAYLOAD)
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  // languages options (can come from an endpoint)
  const availableLanguageOptions = useLanguages();

  // On change event
  const handleAvailableLanguagesChange = (value: string) => {
    if (availableLanguages.find((av) => av === value)) {
      setAvailableLanguages([
        ...availableLanguages.filter((av) => av !== value),
      ]);
    } else {
      setAvailableLanguages([...availableLanguages, value]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // prevent form from default submit,
    // since we're going to control the inputs via state
    e.preventDefault();
    console.log("entrou submit");
    setFormValidation({hasError: true, msg: 'Campo obrigatório'});
    console.log(descricaoEmpresa.length);

    // actual validation and axios calls
    if (movieTitle.length > 0 && !!genre && avaliation && !!classification) {
      const payload = {
        movieTitle,
        genre,
        avaliation,
        classification,
        availableLanguages,
        isAvailable,
      };
      Api.post("movie/register", payload);
      alert("Form was successfully registered.");
      clearAll();
    }
  };

  const clearAll = () => {
    setMovieTitle("");
    setGenre(null);
    setNomeEmpresa("");
    setDescricaoEmpresa("");
    // setCnpj("");
    setEndereco("");
    setNumero("");
    setComplemento("");
    setCep("");
    setBairro("");
    setCidade("");
    setSiteEmpresa("");
    setInstagramEmpresa("");
    setTelefone({
      textmask: '',
    });
    setWhatsapp({
      textmask: '',
    });
    setCNPJ({
      textmask: '',
    });
    
    setFormValidation({
      hasError: false,
      msg: ''
    });

  };

  const handleFormClear = () => {
    clearAll();
  };

  const [telefone, setTelefone] = useState({
    textmask: '',
  });

  const handleChangeTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone({
      ...telefone,
      [event.target.name]: event.target.value,
    });
  };

  const [whatsapp, setWhatsapp] = useState({
    textmask: '',
  });

  const handleChangeWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp({
      ...whatsapp,
      [event.target.name]: event.target.value,
    });
  };

  const [cnpj, setCNPJ] = useState({
    textmask: '',
  });

  const handleChangeCNPJ = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCNPJ({
      ...cnpj,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Paper elevation={0} >
      <CustomForm
        // props for form
        action="#"
        method="POST"
        onFormSubmit={handleSubmit}
        onFormClear={handleFormClear}
        // grid props
        container
        gap={2}
        px={1}
        py={4}
        // justifyContent={"end"}
        flexDirection={"column"}
      // sx={{ m: 1, width: '60ch' }}

      >
        {/* Form title */}
        <Typography variant="h5">Cadastro de Empresa</Typography>



        {/* Text input */}
        {/* https://mui.com/material-ui/react-text-field/ */}
        {/* <FormControl sx={{ width: "100%"}}  >
          <TextField           
            name="movie-title"
            label="Movie title"
            required
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}    
            // sx={{ p: '2px 1px', display: 'flex', alignItems: 'center' }}      
            
            
          />


        </FormControl> */}

        {/* /////////////////////////////////////////////////////////// */}

        <Grid container
          spacing={{ xs: 0, md: 2 }}
          gap={{ xs: 2, md: 0 }}
          py={5}
          px={0}
          width={"100%"}>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="nome-empresa"
                label="Nome da empresa*"
                // required
                error={nomeEmpresa == ''&& formValidation.hasError}
                helperText={ formValidation.hasError && nomeEmpresa.length === 0 ? formValidation.msg : ''}
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
              />

            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="descricao-empresa"
                label="Descrição da empresa*"
                // required
                error={descricaoEmpresa == ''&& formValidation.hasError}
                helperText={ formValidation.hasError && descricaoEmpresa.length === 0 ?  formValidation.msg : ''}
                value={descricaoEmpresa}
                onChange={(e) => setDescricaoEmpresa(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                // name="wpp"
                label="Whatsapp*"                
                error={whatsapp.textmask === '' && formValidation.hasError}
                helperText={ formValidation.hasError && whatsapp.textmask.length === 0 ?  formValidation.msg : ''}
                value={whatsapp.textmask}
                onChange={handleChangeWhatsapp}
                name="textmask"
                id="formatted-text-mask-input"
                InputProps={{
                  inputComponent: TextMaskCustom as any,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                // name="telefone"
                label="Telefone"
                value={telefone.textmask}
                onChange={handleChangeTelefone}
                name="textmask"
                id="formatted-text-mask-input"
                InputProps={{
                  inputComponent: TextMaskCustom as any,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                // name="cnpj"
                label="CNPJ*"
                error={cnpj.textmask === '' && formValidation.hasError}
                helperText={ formValidation.hasError && cnpj.textmask.length === 0 ?  formValidation.msg : ''}
                value={cnpj.textmask}
                onChange={handleChangeCNPJ}
                name="textmask"
                id="formatted-text-mask-input"
                InputProps={{
                  inputComponent: TextMaskCNPJCustom as any,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="endereco-empresa"
                label="Endereço*"
                error={endereco == ''&& formValidation.hasError}
                helperText={ formValidation.hasError && endereco.length === 0 ?  formValidation.msg : ''}                
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="endereco-numero"
                label="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="endereco-complemento"
                label="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="cep"
                label="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="bairro"
                label="Bairro*"
                error={bairro == ''&& formValidation.hasError}
                helperText={ formValidation.hasError && bairro.length === 0 ?  formValidation.msg : ''}                
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="cidade"
                label="Cidade*"
                error={cidade == ''&& formValidation.hasError}
                helperText={ formValidation.hasError && cidade.length === 0 ?  formValidation.msg : ''}                
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FormControl sx={{ width: "100%" }}>
              <Autocomplete              
                disablePortal
                id="genres"
                options={genreOptions || []}
                value={genre}
                onChange={(e, value) => setGenre(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Estado" 
                  error={ params.inputProps.value === ''&& formValidation.hasError}
                  helperText={ formValidation.hasError && params.inputProps.value?.toString().length === 0 ?  formValidation.msg : ''}
                  />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="url-site"
                label="Site da empresa"
                value={siteEmpresa}
                onChange={(e) => setSiteEmpresa(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                name="url-instagram"
                label="Instagram da empresa"
                value={instagramEmpresa}
                onChange={(e) => setInstagramEmpresa(e.target.value)}
              />
            </FormControl>
          </Grid>



        </Grid>





















        {/* /////////////////////////////////////////////////////////// */}

        {/* Autocomplete */}
        {/* https://mui.com/material-ui/react-autocomplete/ */}
        {/* <FormControl sx={{ width: "100%" }}>
          <Autocomplete
            disablePortal
            id="genres"
            options={genreOptions || []}
            value={genre}
            onChange={(e, value) => setGenre(value)}
            renderInput={(params) => (
              <TextField {...params} label="Genre" required />
            )}
          />
        </FormControl> */}

        {/* Rating */}
        {/* https://mui.com/material-ui/react-rating/ */}
        {/* <FormControl>
          <FormLabel id="avaliation-label">Overrall avaliation</FormLabel>
          <Rating
            name="avaliation"
            onChange={(e, value) => setAvaliation(value)}
            value={avaliation}
          />
        </FormControl> */}

        {/* Radio group */}
        {/* https://mui.com/material-ui/react-radio-button/ */}
        {/* classifications: https://en.wikipedia.org/wiki/Motion_Picture_Association_film_rating_system#:~:text=Rated%20G%3A%20General%20audiences%20%E2%80%93%20All,accompanying%20parent%20or%20adult%20guardian. */}
        {/* <FormControl>
          <FormLabel id="classification-label">Classification</FormLabel>
          <RadioGroup name="classification-group" row={false}>
            {classificationOptions?.map((option) => (
              <FormControlLabel
                value={classification == option.id}
                onChange={(event) =>
                  setClassification((event.target as HTMLInputElement).value)
                }
                control={<Radio value={option.id} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl> */}

        {/* Checkboxes */}
        {/* https://mui.com/material-ui/react-checkbox/ */}
        {/* <FormControl>
          <FormLabel id="classification-label">Available languages</FormLabel>
          <FormGroup row>
            {availableLanguageOptions?.map((language) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      !!availableLanguages.find((av) => av === language.id) ||
                      false
                    }
                    onChange={(e) =>
                      handleAvailableLanguagesChange(e.target.name)
                    }
                    name={language.id}
                  />
                }
                label={language.label}
              />
            ))}
          </FormGroup>
        </FormControl> */}

        {/* Switch */}
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isAvailable}
                onChange={() => setIsAvailable((value) => !value)}
              />
            }
            label="is available?"
          />
        </FormGroup> */}
      </CustomForm>
    </Paper>
  );
}
