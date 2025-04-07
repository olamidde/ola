// Spotify API credentials
const CLIENT_ID = '0ade11485db140a8bf382266d41867c0';
const CLIENT_SECRET = 'fc20f794d1904175b697bf02507d92b5';
// Spotify user ID
const SPOTIFY_USER_ID = 'cotn4ljazw7o661eopdvljuge';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/player/recently-played`;
const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists`;

// Get access token using client credentials flow
export async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }).toString(),
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${data.error}`);
    }

    return data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Get recently played tracks
export async function getRecentlyPlayed() {
  try {
    const { access_token } = await getAccessToken();

    // Note: This endpoint requires user authorization, so it won't work with client credentials
    // We'll use a public playlist instead in our implementation
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to get recently played: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting recently played:', error);
    throw error;
  }
}

// Get user playlists
export async function getPlaylists() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(PLAYLISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to get playlists: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting playlists:', error);
    throw error;
  }
}
