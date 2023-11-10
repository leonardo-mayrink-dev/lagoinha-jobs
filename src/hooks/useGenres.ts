import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import genresMock from './mocks/genres.json';

type TGenreOptions = {label: string; value: string; id: number; }[]
export function useGenres(){
    const [genreOptions, setGenreOptions] = useState<TGenreOptions>();

    useEffect(() => {
        // const genresReponse = Api.get('/genres').then((response) => response.data);
        // setGenreOptions(genresResponse);
        setGenreOptions(genresMock);
    }, []);

    return genreOptions;
}