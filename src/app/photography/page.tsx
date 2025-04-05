import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const photos = [
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 1",
    caption: "Caption for photo 1",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 2",
    caption: "Caption for photo 2",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 3",
    caption: "Caption for photo 3",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 4",
    caption: "Caption for photo 4",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 5",
    caption: "Caption for photo 5",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Photo 6",
    caption: "Caption for photo 6",
  },
];

export const metadata = {
  title: "Photography | Your Name",
  description: "A collection of my photography work",
};

export default function PhotographyPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Photography</h1>
      <p className="text-xl text-muted-foreground mb-8">
        A collection of my photography work
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
