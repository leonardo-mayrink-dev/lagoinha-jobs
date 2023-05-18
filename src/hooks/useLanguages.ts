import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import languagesMock from "./mocks/languages.json";

type TLanguageOptions = { label: string; id: string }[];
export function useLanguages() {
  const [languageOptions, setLanguageOptions] = useState<TLanguageOptions>();

  useEffect(() => {
    // const languageReponse = Api.get('/languages').then((response) => response.data);
    // setLanguageOptions(languageResponse);
    setLanguageOptions(languagesMock);
  }, []);

  return languageOptions;
}
