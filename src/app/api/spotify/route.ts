import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

const SPOTIFY_USER_ID = 'cotn4ljazw7o661eopdvljuge';

// This is a simplified version that returns a featured track from a playlist
export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    // Get a track from a public playlist (Spotify Wrapped)
    const playlistId = '37i9dQZF1Eph7WHYmUm0QH'; // Your Spotify Wrapped playlist
    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=1`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-store',
      }
    );

    if (playlistResponse.status === 200) {
      const playlistData = await playlistResponse.json();

      if (playlistData.items && playlistData.items.length > 0) {
        const track = playlistData.items[0].track;

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

    // Fallback to a default response
    return NextResponse.json({
      isPlaying: false,
      title: "No track data available",
      artist: "Try again later",
      album: "Spotify",
      albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273b5551cd31ab8fa39b307b1a0", // Default Spotify logo
      songUrl: `https://open.spotify.com/user/${SPOTIFY_USER_ID}`,
      recentlyPlayed: false,
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({
      error: 'Error fetching Spotify data',
      isPlaying: false,
      title: "Error fetching data",
      artist: "Check console for details",
      album: "Spotify",
      albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273b5551cd31ab8fa39b307b1a0", // Default Spotify logo
      songUrl: `https://open.spotify.com/user/${SPOTIFY_USER_ID}`,
      recentlyPlayed: false,
    }, { status: 200 }); // Return 200 even on error to prevent UI issues
  }
}
