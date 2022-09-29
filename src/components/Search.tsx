import React, { useState, useEffect } from 'react';
import { IState, ISearchState } from '../common/types';
import ArtistResults from './ArtistResults';
import Input from './Input';
import useDebounce from './utilities/useDebounce';
import '../App.css';

const Search = () => {
  const [artists, setArtists] = useState<IState['artists']>([]);
  const [isLoading, setIsLoading] = useState<IState['isLoading']>(false);
  const [isNotFound, setIsNotFound] = useState<IState['isNotFound']>(false);
  const [searchTerm, setSearchTerm] = useState<ISearchState['searchTerm']>('');

  // API search results
  const [, setResults] = useState([]);
  // Searching status
  const [, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us the latest value
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        setIsLoading(true);
        fetchArtists(debouncedSearchTerm).then((data: any) => {
          setIsSearching(false);
          setIsLoading(false);
          setResults(data);
        });
      } else {
        setResults([]);
        setIsSearching(false);
        setIsLoading(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  // Fetch Artists
  const fetchArtists = async (searchTerm: any) => {
    // const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`;
    const url = `https://theaudiodb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/search.php?s=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();

    fetch(url)
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });

    if (data.artists) {
      setArtists(data.artists);
      setIsNotFound(false);
    }

    if (!data.artists) {
      setIsNotFound(true);
    }
  };

  return (
    <div>
      <Input
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isNotFound={isNotFound}
      />
      <ArtistResults
        artists={artists}
        isLoading={isLoading}
        isNotFound={isNotFound}
      />
    </div>
  );
};

export default Search;
