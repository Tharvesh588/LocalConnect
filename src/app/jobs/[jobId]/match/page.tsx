import Link from "next/link";
import { workers, type Worker } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Play, Phone, MessageSquare } from "lucide-react";

function WorkerCard({ worker }: { worker: Worker }) {
  const whatsappLink = `https://wa.me/${worker.phone}?text=${encodeURIComponent("Hi, I found you on Seva Local and I need your help.")}`;
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        <Avatar className="w-16 h-16 border-2 border-primary/50">
          <AvatarImage src={worker.avatarUrl} alt={worker.name} data-ai-hint="person face" />
          <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <CardTitle className="font-headline text-xl">{worker.name}</CardTitle>
          <CardDescription className="flex items-center gap-4 mt-1">
            <span className="flex items-center gap-1 font-bold text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
              {worker.rating.toFixed(1)}
            </span>
            <span className="text-xs">({worker.reviews} reviews)</span>
          </CardDescription>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            {worker.distance}km away
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {worker.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
        </div>
        <Button variant="outline" className="w-full" onClick={() => alert('Playing voice intro...')}>
          <Play className="mr-2" />
          Listen to Intro
        </Button>
      </CardContent>
      <CardFooter className="bg-secondary p-4 flex gap-2">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white">
            <MessageSquare className="mr-2" />
            WhatsApp
          </Button>
        </a>
        <a href={`tel:${worker.phone}`} className="flex-1">
          <Button variant="outline" className="w-full h-12">
            <Phone className="mr-2" />
            Call
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default function MatchPage({ params }: { params: { jobId: string } }) {
  // Sort workers by distance, then rating
  const sortedWorkers = [...workers].sort((a, b) => {
    if (a.distance < b.distance) return -1;
    if (a.distance > b.distance) return 1;
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  });

  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto max-w-2xl py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="font-headline text-3xl font-bold">We found {workers.length} workers for you</h1>
          <p className="text-muted-foreground mt-1">Here are the best matches for your job request.</p>
        </div>

        <div className="grid gap-6">
          {sortedWorkers.map(worker => <WorkerCard key={worker.id} worker={worker} />)}
        </div>
      </div>
    </div>
  );
}
