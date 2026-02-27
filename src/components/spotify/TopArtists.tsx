"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { User, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Artist {
  name: string;
  genres: string[];
  imageUrl: string | null;
  artistUrl: string;
  followers: number;
}

export function TopArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<string>("medium_term");

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/spotify?type=top-artists&time_range=${timeRange}&limit=10`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch top artists");
        }

        const data = await res.json();
        setArtists(data.artists ?? []);
        setError(null);
      } catch (err) {
        console.error("Error fetching top artists:", err);
        setError("Couldn't load top artists");
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, [timeRange]);

  const timeRangeLabels: Record<string, string> = {
    short_term: "last 4 weeks",
    medium_term: "last 6 months",
    long_term: "all time",
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <User className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-lg font-medium">Couldn&apos;t load top artists</p>
        <p className="text-sm text-muted-foreground">Try again later</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Time range selector */}
      <div className="flex justify-center gap-2">
        {Object.entries(timeRangeLabels).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setTimeRange(value)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              timeRange === value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Artist list */}
      <ol className="space-y-3">
        {artists.map((artist, index) => (
          <li key={index}>
            <a
              href={artist.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <span className="text-sm font-medium text-muted-foreground w-5 text-right">
                {index + 1}
              </span>

              {artist.imageUrl ? (
                <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={artist.imageUrl}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{artist.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {artist.genres.slice(0, 3).join(", ") || "No genres listed"}
                </p>
              </div>

              <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>
          </li>
        ))}
      </ol>

      {artists.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No top artists available yet
        </p>
      )}
    </div>
  );
}

