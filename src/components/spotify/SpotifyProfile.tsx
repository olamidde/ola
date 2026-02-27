"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ProfileData {
  displayName: string;
  email: string | null;
  imageUrl: string | null;
  profileUrl: string | null;
  followers: number;
  country: string | null;
}

export function SpotifyProfile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/spotify?type=profile");

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        setProfile(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching Spotify profile:", err);
        setError("Couldn't load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="h-5 w-[180px]" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <User className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-lg font-medium">Couldn&apos;t load profile</p>
        <p className="text-sm text-muted-foreground">Try again later</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {profile.imageUrl ? (
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          <Image
            src={profile.imageUrl}
            alt={profile.displayName || "Profile"}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center">
          <User className="h-12 w-12 text-muted-foreground" />
        </div>
      )}

      <div className="text-center">
        <h3 className="text-lg font-medium">{profile.displayName}</h3>
        <p className="text-sm text-muted-foreground">
          {profile.followers.toLocaleString()} followers
          {profile.country ? ` · ${profile.country}` : ""}
        </p>
      </div>

      {profile.profileUrl && (
        <Button variant="outline" size="sm" asChild>
          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            View on Spotify
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
      )}
    </div>
  );
}

