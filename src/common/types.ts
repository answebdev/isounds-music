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