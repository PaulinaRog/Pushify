export interface Album {
  cover_small: string;
  title: string;
  cover_medium: string;
  id: number;
  tracklist: string;
}

export interface Artist {
  name: string;
  picture_small: string;
  picture_medium: string;
  id: number;
}

export interface TrackProps {
  d: TrackData;
  idx: number;
}

export interface ApiResponse {
  data: Array<TrackData>;
}

export interface AlbumData {
  data: ApiResponse;
}

export interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export interface AlbumProps {
  src: string;
  artist: string;
  albumId: number;
  tracklist: string;
}

export interface TrackListState {
  trackData: TrackData | null;
  trackList: any;
}

export interface TrackData {
  preview: string;
  album: Album;
  title: string;
  duration: number;
  artist: Artist;
}

export interface CurrentTimeProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setPlay: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  ico: string | null;
}

export interface AudioRef {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export interface Genre {
  data: Array<GenreData>;
}

export interface GenreData {
  title: string;
  picture_medium: string;
  id: number;
  tracklist: string;
}

export interface GenreProps {
  data: Genre;
}

export interface RadioApi {
  data: Array<RadioData>;
}

export interface RadioData {
  data: Array<RadioDataData>;
}

export interface RadioDataData {
  artist: RadioArtist;
  album: RadioAlbum;
}

export interface RadioProps {
  data: RadioApi;
}

export interface RadioArtist {
  id: number;
  name: string;
  tracklist: string;
  picture_medium: string;
  picture_small: string;
}

export interface RadioAlbum {
  id: number;
  title: string;
  cover_medium: string;
  cover_small: string;
  tracklist: string;
}

export interface Title {
  title: string;
}

export interface ApiSearch {
  data: Array<SearchResults>;
}

export interface SearchResults {
  artist: RadioArtist;
  album: RadioAlbum;
  title: string;
  id: string;
  duration: number;
  al: SearchResults;
}

export interface stateProps {
  artist: string;
  title: string;
  d: TrackData;
}

export interface ReducedAlbums {
  id: number;
  cover: string;
  title: string;
  tracklist: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
