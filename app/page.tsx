import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Crown } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8">
        <Crown className="h-16 w-16 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          The Mughal Empire
        </h1>
        
        <div className="max-w-[800px] text-lg text-muted-foreground">
          <p className="mb-4">
            In 1564, under Akbar&apos;s rulership, the jizya tax was for the first time abolished, providing greater religious equality. Though this was a forward-thinking and impactful move, it was brought back by Aurangzeb in 1679, forcing people to pay unfair taxes based on their religion.
          </p>
          <p>
            The implementation of sharia law under Aurangzeb led to discrimination against non-Muslims and limited their political participation - a stark contrast to Akbar&apos;s policies of religious tolerance and inclusive political ideologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/quiz">
            <Button size="lg" className="text-lg">
              Take the Personality Quiz
            </Button>
          </Link>
          <Link href="/compare">
            <Button size="lg" variant="outline" className="text-lg">
              Compare the Rulers
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-6 bg-card rounded-lg leading-none flex items-center space-x-6">
              <div className="space-y-2">
                <p className="text-xl font-semibold">Student Generated Words</p>
                <p className="text-muted-foreground">1070 words</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-6 bg-card rounded-lg leading-none flex items-center space-x-6">
              <div className="space-y-2">
                <p className="text-xl font-semibold">Created with ❤️ by:</p>
                <p className="text-muted-foreground">Varshith, JunWoo, Eli, Killian</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-6 bg-card rounded-lg leading-none flex items-center space-x-6">
              <div className="space-y-2">
                <p className="text-xl font-semibold">Process Paper Words</p>
                <p className="text-muted-foreground">975 words</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}