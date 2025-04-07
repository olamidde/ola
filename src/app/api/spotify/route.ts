import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

const CLIENT_ID = '0ade11485db140a8bf382266d41867c0';
const CLIENT_SECRET = 'fc20f794d1904175b697bf02507d92b5';
const SPOTIFY_USER_ID = 'cotn4ljazw7o661eopdvljuge';

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/top/tracks`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

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
          const track = recentlyPlayed.items[0].track;
          
          return NextResponse.json({
            isPlaying: false,
            title: track.name,
            artist: track.artists.map((_artist: any) => _artist.name).join(', '),
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
        const track = nowPlaying.item;
        
        return NextResponse.json({
          isPlaying: nowPlaying.is_playing,
          title: track.name,
          artist: track.artists.map((_artist: any) => _artist.name).join(', '),
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
