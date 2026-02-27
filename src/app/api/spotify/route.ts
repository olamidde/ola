import { NextRequest, NextResponse } from 'next/server';
import {
  getNowPlaying,
  getRecentlyPlayed,
  getTopTracks,
  getTopArtists,
  getUserProfile,
} from '@/lib/spotify';

// GET /api/spotify?type=now-playing | top-tracks | top-artists | profile
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') ?? 'now-playing';

  try {
    switch (type) {
      // ── Currently playing / recently played ────────────────────────
      case 'now-playing': {
        const nowPlaying = await getNowPlaying();

        if (nowPlaying.isPlaying) {
          return NextResponse.json({
            isPlaying: true,
            title: nowPlaying.title,
            artist: nowPlaying.artist,
            album: nowPlaying.album,
            albumImageUrl: nowPlaying.albumImageUrl,
            songUrl: nowPlaying.songUrl,
            recentlyPlayed: false,
          });
        }

        // Fall back to recently played
        try {
          const recent = await getRecentlyPlayed(1);
          if (recent.items?.length > 0) {
            const track = recent.items[0].track;
            return NextResponse.json({
              isPlaying: false,
              title: track.name,
              artist: track.artists.map((a: { name: string }) => a.name).join(', '),
              album: track.album.name,
              albumImageUrl: track.album.images?.[0]?.url ?? null,
              songUrl: track.external_urls.spotify,
              recentlyPlayed: true,
            });
          }
        } catch {
          // If recently-played also fails, return empty
        }

        return NextResponse.json({
          isPlaying: false,
          title: null,
          artist: null,
          album: null,
          albumImageUrl: null,
          songUrl: null,
          recentlyPlayed: false,
        });
      }

      // ── Top tracks ─────────────────────────────────────────────────
      case 'top-tracks': {
        const timeRange = searchParams.get('time_range') ?? 'medium_term';
        const limit = searchParams.get('limit') ?? '10';
        const data = await getTopTracks(timeRange, Number(limit));

        const tracks = data.items.map(
          (track: {
            name: string;
            artists: { name: string }[];
            album: { name: string; images: { url: string }[] };
            external_urls: { spotify: string };
          }) => ({
            title: track.name,
            artist: track.artists.map((a) => a.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images?.[0]?.url ?? null,
            songUrl: track.external_urls.spotify,
          })
        );

        return NextResponse.json({ tracks });
      }

      // ── Top artists ────────────────────────────────────────────────
      case 'top-artists': {
        const timeRange = searchParams.get('time_range') ?? 'medium_term';
        const limit = searchParams.get('limit') ?? '10';
        const data = await getTopArtists(timeRange, Number(limit));

        const artists = data.items.map(
          (artist: {
            name: string;
            genres: string[];
            images: { url: string }[];
            external_urls: { spotify: string };
            followers: { total: number };
          }) => ({
            name: artist.name,
            genres: artist.genres,
            imageUrl: artist.images?.[0]?.url ?? null,
            artistUrl: artist.external_urls.spotify,
            followers: artist.followers.total,
          })
        );

        return NextResponse.json({ artists });
      }

      // ── User profile ───────────────────────────────────────────────
      case 'profile': {
        const profile = await getUserProfile();

        return NextResponse.json({
          displayName: profile.display_name,
          email: profile.email,
          imageUrl: profile.images?.[0]?.url ?? null,
          profileUrl: profile.external_urls?.spotify ?? null,
          followers: profile.followers?.total ?? 0,
          country: profile.country,
        });
      }

      default:
        return NextResponse.json(
          { error: `Unknown type: ${type}. Use now-playing, top-tracks, top-artists, or profile.` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { error: 'Error fetching Spotify data' },
      { status: 500 }
    );
  }
}
