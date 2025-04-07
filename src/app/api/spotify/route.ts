import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

interface SpotifyArtist {
  name: string;
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

// Endpoint for getting currently playing track
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    // Try to get currently playing
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    // If we can't get currently playing, get recently played
    if (nowPlayingResponse.status !== 200) {
      const recentlyPlayedResponse = await fetch(
        'https://api.spotify.com/v1/me/player/recently-played?limit=1',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          cache: 'no-store',
        }
      );

      if (recentlyPlayedResponse.status === 200) {
        const recentlyPlayed = await recentlyPlayedResponse.json();

        if (recentlyPlayed.items && recentlyPlayed.items.length > 0) {
          const track = recentlyPlayed.items[0].track as SpotifyTrack;

          return NextResponse.json({
            isPlaying: false,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0]?.url,
            songUrl: track.external_urls.spotify,
            recentlyPlayed: true,
          });
        }
      }
    } else {
      const nowPlaying = await nowPlayingResponse.json();

      if (nowPlaying.item) {
        const track = nowPlaying.item as SpotifyTrack;

        return NextResponse.json({
          isPlaying: nowPlaying.is_playing,
          title: track.name,
          artist: track.artists.map((artist) => artist.name).join(', '),
          album: track.album.name,
          albumImageUrl: track.album.images[0]?.url,
          songUrl: track.external_urls.spotify,
          recentlyPlayed: false,
        });
      }
    }

    // Fallback to a default response
    return NextResponse.json({
      isPlaying: false,
      title: null,
      artist: null,
      album: null,
      albumImageUrl: null,
      songUrl: null,
      recentlyPlayed: false,
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ error: 'Error fetching Spotify data' }, { status: 500 });
  }
}
