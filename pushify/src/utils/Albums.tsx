import nonblondes from "../assets/4nonblondes.jpg";
import iseered from "../assets/iseered.jpg";
import rem from "../assets/rem.jpg";
import berlin from "../assets/berlin.jpg";
import queen from "../assets/queen.jpg";
import stealers from "../assets/stealers.jpg";

export const albums = [
  {
    id: 1,
    src: nonblondes,
    artist: "4 Non Blondes",
    api: "https://api.deezer.com/artist/1187/top?limit=50",
  },
  {
    id: 2,
    src: iseered,
    artist: "Everybody Loves an Outlaw",
    api: "https://api.deezer.com/artist/53465462/top?limit=50",
  },
  {
    id: 3,
    src: rem,
    artist: "R.E.M.",
    api: "https://api.deezer.com/artist/129/top?limit=50",
  },
  {
    id: 4,
    src: berlin,
    artist: "Berlin",
    api: "https://api.deezer.com/artist/1678285/top?limit=50",
  },
  {
    id: 5,
    src: queen,
    artist: "Queen",
    api: "https://api.deezer.com/artist/412/top?limit=50",
  },
  {
    id: 6,
    src: stealers,
    artist: "Stealers Wheel",
    api: "https://api.deezer.com/artist/4900/top?limit=50",
  },
];
