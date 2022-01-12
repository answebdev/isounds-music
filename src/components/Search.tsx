import React, { useState, useEffect } from 'react';
import ArtistResults from './ArtistResults';
import Input from './Input';
import useDebounce from './utilities/useDebounce';
import '../App.css';

export interface IState {
  artists: {
    strArtist: string;
    strArtistWideThumb: string;
    strGenre: string;
    strCountry: string;
    strWebsite: string;
    idArtist: string;
    // Album info:
    // strAlbumThumb: string;
    // strAlbum: string;
    // intYearReleased: string;
    // strLabel: string;
    // strDescriptionEN: string;
  }[];
  isLoading: boolean;
  isNotFound: boolean;
}

export interface ISearchState {
  artists: {
    strArtist: string;
    strArtistWideThumb: string;
    strGenre: string;
    strCountry: string;
    strWebsite: string;
    idArtist: string;
    // Album info:
    // strAlbumThumb: string;
    // strAlbum: string;
    // intYearReleased: string;
    // strLabel: string;
    // strDescriptionEN: string;
  }[];
  searchTerm: string;
  isNotFound: boolean;
  setSearchTerm: string;
}

const Search = () => {
  // const [artists, setArtists] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isNotFound, setIsNotFound] = useState(false);
  const [artists, setArtists] = useState<IState['artists']>([]);
  const [isLoading, setIsLoading] = useState<IState['isLoading']>(false);
  const [isNotFound, setIsNotFound] = useState<IState['isNotFound']>(false);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<ISearchState['searchTerm']>('');

  // API search results
  const [, setResults] = useState([]);
  // Searching status
  const [, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us the latest value
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // TS for API data => see around 11:40 => https://www.youtube.com/watch?v=oQZJxyMoLws

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        setIsLoading(true);
        fetchArtists(debouncedSearchTerm).then((data) => {
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
    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${searchTerm}`;
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
      // console.log(data.artists);
    }

    if (!data.artists) {
      setIsNotFound(true);
    }
  };

  return (
    <div>
      <Input
        // artists={artists}
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
