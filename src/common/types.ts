export interface IState {
    artists: {
        strArtist: string;
        strArtistWideThumb: string;
        strGenre: string;
        strCountry: string;
        strWebsite: string;
        idArtist: string;
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
    }[];
    searchTerm: string;
    isNotFound: boolean;
    setSearchTerm: string;
}