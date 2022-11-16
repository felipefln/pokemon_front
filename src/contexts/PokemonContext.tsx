import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
  } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

type PokemonContextType = {
  mainData: PokemonMainData[];
  setQuerySearch: (query: string) => void;
  setOrderSelection: (order: string) => void;
  setTypeSearch: (type: string | null) => void;
  favoriteEngine: (pokemonNumber: string, isFavorite: boolean) => void;
  setIsFavoriteFilter: (isFavoriteFilter: boolean) => void;
};

type PokemonContextProviderType = {
  children: ReactNode;
};

type PokemonData = {
  sprites: {
    large: string;
  };
  name: string;
  national_number: string;
  type: string[];
  evolution: {
    name: string;
  };
  isFavorite: boolean;
};

type PokemonMainData = {
  sprites: {
    large: string;
  };
  name: string;
  national_number: string;
  type: string[];
  evolution: {
    name: string;
  };
  isFavorite: boolean;
};

type ApiResponseType = {
  data: {
    results: PokemonData[];
  };
};

export const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({
  children,
}: PokemonContextProviderType) {
  const [apiPokemonListResult, setApiPokemonListResult] = useState<
    PokemonData[]
  >([]);
  const [mainData, setMainData] = useState<PokemonMainData[]>([]);
  const [typeSearch, setTypeSearch] = useState<string | null>(null);
  const [querySearch, setQuerySearch] = useState('');
  const [orderSelection, setOrderSelection] = useState('ascending');
  const [favoriteList, setFavoriteList] = useState<string[]>(
    JSON.parse(localStorage.getItem('favoritePokemonList') || '[]'),
  );
  const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);

  useEffect(() => {
    (async function getPokemonData() {
      try {
        const { data }: ApiResponseType = await axios.get(API_URL);

        const duplicateFilter = data.results.filter(
          (pokemon, index, array) =>
            index ===
            array.findIndex(
              (element) => element.national_number === pokemon.national_number,
            ),
        );

        const favoritesVerify = duplicateFilter.map((pokemon) => ({
          ...pokemon,
          isFavorite: favoriteList.includes(pokemon.national_number),
        }));

        setApiPokemonListResult(favoritesVerify);
        setMainData(favoritesVerify);
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(`${err.name}: ${err.message}`);
        }
      }
    })();
  }, [favoriteList]);

  const searchEngine = useCallback(
    (
      query: string,
      order: string,
      type: string | null,
      isFavoriteFilterOn: boolean,
    ) => {
      const searchResult = apiPokemonListResult.filter(
        (value) =>
          value.name
            .toLocaleLowerCase()
            .startsWith(query?.toLocaleLowerCase()) ||
          Number(value.national_number) === Number(query),
      );

      if (order === 'ascending') {
        searchResult.sort((a, b) => {
          if (a.national_number > b.national_number) return 1;
          if (a.national_number < b.national_number) return -1;
          return 0;
        });
      }

      if (order === 'descending') {
        searchResult.sort((a, b) => {
          if (a.national_number > b.national_number) return -1;
          if (a.national_number < b.national_number) return 1;
          return 0;
        });
      }

      setMainData(searchResult);

      if (type) {
        setMainData(searchResult.filter((item) => item.type.includes(type)));
      }

      if (isFavoriteFilterOn) {
        setMainData(searchResult.filter((item) => item.isFavorite));
      }
    },
    [apiPokemonListResult],
  );

  useEffect(() => {
    searchEngine(querySearch, orderSelection, typeSearch, isFavoriteFilter);
  }, [
    querySearch,
    typeSearch,
    apiPokemonListResult,
    searchEngine,
    orderSelection,
    isFavoriteFilter,
  ]);

  const favoriteEngine = useCallback(
    (pokemonNumber: string, isFavorite: boolean) => {
      if (!isFavorite) {
        setFavoriteList((oldState) => [...oldState, pokemonNumber]);
        const setFavorite = mainData.map((pokemon) =>
          pokemon.national_number === pokemonNumber
            ? { ...pokemon, isFavorite: true }
            : pokemon,
        );

        setMainData(setFavorite);
      } else {
        setFavoriteList((oldState) =>
          oldState.filter((item) => item !== pokemonNumber),
        );
        const setFavorite = mainData.map((pokemon) =>
          pokemon.national_number === pokemonNumber
            ? { ...pokemon, isFavorite: false }
            : pokemon,
        );

        setMainData(setFavorite);
      }
    },
    [mainData],
  );

  useEffect(
    () =>
      localStorage.setItem('favoritePokemonList', JSON.stringify(favoriteList)),
    [favoriteList],
  );

  const providerValues = useMemo(
    () => ({
      mainData,
      setTypeSearch,
      setQuerySearch,
      setOrderSelection,
      favoriteEngine,
      setIsFavoriteFilter,
    }),
    [mainData, favoriteEngine],
  );

  return (
    <PokemonContext.Provider value={providerValues}>
      {children}
    </PokemonContext.Provider>
  );
}
