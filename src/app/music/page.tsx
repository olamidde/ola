import { Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NowPlaying } from "@/components/spotify/NowPlaying";
import { TopTracks } from "@/components/spotify/TopTracks";

export const metadata = {
  title: "music | ola ogunsanya",
  description: "my musical interests and creations",
};

export default function MusicPage() {
  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">music</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
        sharing my musical journey and inspirations
      </p>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {/* Currently Listening Section */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Headphones className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-2xl lowercase">currently listening</CardTitle>
            <CardDescription>see what i'm playing right now on spotify</CardDescription>
          </CardHeader>
          <CardContent>
            <NowPlaying />
          </CardContent>
        </Card>

        {/* My Top Tracks */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">my music taste</CardTitle>
            <CardDescription>check out what i've been listening to</CardDescription>
          </CardHeader>
          <CardContent>
            <TopTracks />
          </CardContent>
        </Card>

        {/* My Spotify Profile */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">my spotify profile</CardTitle>
            <CardDescription>check out my playlists and listening history</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <iframe
              src="https://open.spotify.com/embed/user/cotn4ljazw7o661eopdvljuge"
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              className="max-w-xl rounded-lg"
            ></iframe>
          </CardContent>
        </Card>

        {/* Future Music Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lowercase">my creations</CardTitle>
            <CardDescription>coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary animate-ping"></div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                i'm working on creating my own music. snippets of my work will appear here soon!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
