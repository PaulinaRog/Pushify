export interface Album {
  cover_small: string;
  title: string;
}

export interface Artist {
  name: string;
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
  name: Artist;
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
}

export interface RadioAlbum {
  id: number;
  title: string;
  cover_medium: string;
  tracklist: string;
}

export interface Title {
  title: string;
}
