const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const USER_PROFILE_ENDPOINT = 'https://api.spotify.com/v1/me';

export async function getAccessToken() {
  if (!REFRESH_TOKEN) {
    throw new Error('No refresh token found');
  }

  try {
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
      throw new Error(`Failed to get access token: ${data.error}`);
    }

    return data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

export async function getNowPlaying() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok && response.status !== 204) {
      throw new Error(`Failed to get now playing: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting now playing:', error);
    throw error;
  }
}

export async function getTopTracks() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to get top tracks: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting top tracks:', error);
    throw error;
  }
}

export async function getUserProfile() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(USER_PROFILE_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to get user profile: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}
