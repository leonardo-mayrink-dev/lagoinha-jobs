import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import classificationsMock from "./mocks/classifications.json";

type TClassificationOptions = { label: string; id: string }[];
export function useClassifications() {
  const [classificationOptions, setClassificationOptions] =
    useState<TClassificationOptions>();

  useEffect(() => {
    // const classificationReponse = Api.get('/classifications').then((response) => response.data);
    // setClassificationOptions(classificationResponse);
    setClassificationOptions(classificationsMock);
  }, []);

  return classificationOptions;
}
