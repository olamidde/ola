"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Headphones, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Component doesn't currently use props

interface SpotifyData {
  isPlaying: boolean;
  title: string | null;
  artist: string | null;
  album: string | null;
  albumImageUrl: string | null;
  songUrl: string | null;
  recentlyPlayed: boolean;
}

export function NowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/spotify");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const spotifyData = await res.json();
        setData(spotifyData);
        setError(null);
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError("Couldn't load Spotify data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Refresh data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !data || (!data.title && !data.artist)) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <Music className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-lg font-medium">No track data available</p>
        <p className="text-sm text-muted-foreground">
          Check back later to see what I&apos;m listening to
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center gap-4 mb-4">
        {data.albumImageUrl ? (
          <div className="relative h-16 w-16 rounded-md overflow-hidden">
            <Image
              src={data.albumImageUrl}
              alt={data.album || "Album cover"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
            <Music className="h-8 w-8 text-muted-foreground" />
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {data.isPlaying ? (
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-500">
                  Now playing
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Headphones className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">
                  {data.recentlyPlayed ? "Recently played" : "Not playing"}
                </span>
              </div>
            )}
          </div>

          <h3 className="font-medium mt-1">{data.title}</h3>
          <p className="text-sm text-muted-foreground">{data.artist}</p>
        </div>
      </div>

      {data.songUrl && (
        <Button variant="outline" size="sm" asChild className="mt-2">
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            Listen on Spotify
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
      )}
    </div>
  );
}
