import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    src: "https://placehold.co/600x400",
    alt: "photo 1",
    caption: "caption for photo 1",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "photo 2",
    caption: "caption for photo 2",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "photo 3",
    caption: "caption for photo 3",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "photo 4",
    caption: "caption for photo 4",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "photo 5",
    caption: "caption for photo 5",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "photo 6",
    caption: "caption for photo 6",
  },
];

export const metadata = {
  title: "photography | your name",
  description: "a collection of my photography work",
};

export default function PhotographyPage() {
  return (
    <div className="container px-4 sm:px-6 py-12 md:py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">photography</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
        a collection of my photography work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{photo.caption}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
