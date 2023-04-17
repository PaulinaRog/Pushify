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
