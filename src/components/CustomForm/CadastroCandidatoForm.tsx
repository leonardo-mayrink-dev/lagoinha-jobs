import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
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

export function CadastroCandidatoForm() {
  // This form is meant to add a new movie

  // informed title (WILL BE IN PAYLOAD)
  const [movieTitle, setMovieTitle] = useState("");

  // genre options
  const genreOptions = useGenres();

  // informed genre (WILL BE IN PAYLOAD)
  const [genre, setGenre] = useState<{
    label: string;
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
    setAvaliation(0);
    setAvailableLanguages([]);
    setClassification(null);
    setIsAvailable(true);
  };
  return (
    <Paper elevation={0}>
      <CustomForm
        // props for form
        action="#"
        method="POST"
        onFormSubmit={handleSubmit}
        // grid props
        container
        gap={2}
        px={3}
        py={4}
        justifyContent={"end"}
        flexDirection={"column"}
      >
        {/* Form title */}
        <Typography variant="h5">Cadastro de Candidato</Typography>

        {/* Text input */}
        {/* https://mui.com/material-ui/react-text-field/ */}
        <FormControl sx={{ width: "100%" }}>
          <TextField
            name="movie-title"
            label="Movie title"
            required
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </FormControl>

        {/* Autocomplete */}
        {/* https://mui.com/material-ui/react-autocomplete/ */}
        <FormControl sx={{ width: "100%" }}>
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
        </FormControl>

        {/* Rating */}
        {/* https://mui.com/material-ui/react-rating/ */}
        <FormControl>
          <FormLabel id="avaliation-label">Overrall avaliation</FormLabel>
          <Rating
            name="avaliation"
            onChange={(e, value) => setAvaliation(value)}
            value={avaliation}
          />
        </FormControl>

        {/* Radio group */}
        {/* https://mui.com/material-ui/react-radio-button/ */}
        <FormControl>
          {/* classifications: https://en.wikipedia.org/wiki/Motion_Picture_Association_film_rating_system#:~:text=Rated%20G%3A%20General%20audiences%20%E2%80%93%20All,accompanying%20parent%20or%20adult%20guardian. */}
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
        </FormControl>

        {/* Checkboxes */}
        {/* https://mui.com/material-ui/react-checkbox/ */}
        <FormControl>
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
        </FormControl>

        {/* Switch */}
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isAvailable}
                onChange={() => setIsAvailable((value) => !value)}
              />
            }
            label="is available?"
          />
        </FormGroup>
      </CustomForm>
    </Paper>
  );
}
