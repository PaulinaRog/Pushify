const DEEZER_API_ORIGIN = "https://api.deezer.com";
const MUSIXMATCH_API_ORIGIN = "https://api.musixmatch.com";

const proxiedApiUrl = (
  urlOrPath: string,
  apiOrigin: string,
  proxyPath: string
): string => {
  if (urlOrPath.startsWith(proxyPath)) {
    return urlOrPath;
  }

  if (urlOrPath.startsWith(apiOrigin)) {
    const url = new URL(urlOrPath);

    return `${proxyPath}${url.pathname}${url.search}`;
  }

  const path = urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;

  return `${proxyPath}${path}`;
};

export const deezerApiUrl = (urlOrPath: string): string =>
  proxiedApiUrl(urlOrPath, DEEZER_API_ORIGIN, "/deezer");

export const musixmatchApiUrl = (urlOrPath: string): string =>
  proxiedApiUrl(urlOrPath, MUSIXMATCH_API_ORIGIN, "/musixmatch");
