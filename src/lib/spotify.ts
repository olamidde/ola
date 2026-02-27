// Spotify API — Authorization Code Flow with Refresh Token
// Credentials are read from environment variables (.env.local)

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? '';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? '';
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN ?? '';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// ── Spotify API endpoints ──────────────────────────────────────────────
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOP_ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';
const USER_PROFILE_ENDPOINT = 'https://api.spotify.com/v1/me';

// ── Access token (refresh-token grant) ─────────────────────────────────
export async function getAccessToken(): Promise<{ access_token: string }> {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }).toString(),
    cache: 'no-store',
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${data.error_description || data.error}`);
  }

  return { access_token: data.access_token };
}

// ── Helper: authenticated fetch ────────────────────────────────────────
async function spotifyFetch(url: string): Promise<Response> {
  const { access_token } = await getAccessToken();

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  });
}

// ── Now Playing ────────────────────────────────────────────────────────
export async function getNowPlaying() {
  const response = await spotifyFetch(NOW_PLAYING_ENDPOINT);

  // 204 = nothing playing right now
  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const data = await response.json();

  if (!data.item) {
    return { isPlaying: false };
  }

  return {
    isPlaying: data.is_playing as boolean,
    title: data.item.name as string,
    artist: (data.item.artists as { name: string }[]).map((a) => a.name).join(', '),
    album: data.item.album.name as string,
    albumImageUrl: data.item.album.images?.[0]?.url as string | undefined,
    songUrl: data.item.external_urls.spotify as string,
  };
}

// ── Recently Played ────────────────────────────────────────────────────
export async function getRecentlyPlayed(limit = 1) {
  const response = await spotifyFetch(`${RECENTLY_PLAYED_ENDPOINT}?limit=${limit}`);

  if (!response.ok) {
    throw new Error(`Failed to get recently played: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

// ── Top Tracks ─────────────────────────────────────────────────────────
export async function getTopTracks(timeRange = 'medium_term', limit = 10) {
  const response = await spotifyFetch(
    `${TOP_TRACKS_ENDPOINT}?time_range=${timeRange}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(`Failed to get top tracks: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

// ── Top Artists ────────────────────────────────────────────────────────
export async function getTopArtists(timeRange = 'medium_term', limit = 10) {
  const response = await spotifyFetch(
    `${TOP_ARTISTS_ENDPOINT}?time_range=${timeRange}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(`Failed to get top artists: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

// ── User Profile ───────────────────────────────────────────────────────
export async function getUserProfile() {
  const response = await spotifyFetch(USER_PROFILE_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Failed to get user profile: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
