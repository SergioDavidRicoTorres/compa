import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { spotifyClientId } from "./credentials";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const useSpotifyAuth = () => {
  const redirectUri = makeRedirectUri({
    scheme: "compa",
  });

  const configuration = {
    clientId: spotifyClientId,
    scopes: [
      "user-read-email",
      "user-library-read",
      "user-top-read",
      "user-read-recently-played",
    ],
    redirectUri,
  };

  return {
    configuration,
    discovery,
  };
};

export default useSpotifyAuth;
