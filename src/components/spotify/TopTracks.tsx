"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopTracks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1Eph7WHYmUm0QH"
        width="100%"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        className="max-w-xl rounded-lg"
      ></iframe>
      <p className="text-sm text-muted-foreground mt-4">
        this is my spotify wrapped playlist - a collection of my most played tracks
      </p>
    </div>
  );
}
